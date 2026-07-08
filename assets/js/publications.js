/* =========================================================
   Live publications from ORCID (+ Crossref author enrichment)
   - Pulls the works list from the ORCID public API
   - For entries with a DOI, fetches full author list from Crossref
   - Groups by year, highlights "Siebenbrunner" in author lists
   Uses SITE.orcid from site.js
   ========================================================= */

// Family name(s) to highlight in author lists.
const HIGHLIGHT_NAMES = ["siebenbrunner"];

const elStatus = () => document.getElementById("pub-status");
const elList   = () => document.getElementById("pub-list");

function escapeHtml(s) {
  return (s || "").replace(/[&<>"']/g, c => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
}

function isHighlighted(family, given) {
  const f = (family || "").toLowerCase();
  return HIGHLIGHT_NAMES.some(n => f.includes(n));
}

async function fetchJSON(url, headers) {
  const res = await fetch(url, { headers: headers || {} });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json();
}

/* ---- Crossref: authors + tidy metadata for a DOI ---- */
async function crossrefByDoi(doi) {
  try {
    const data = await fetchJSON(`https://api.crossref.org/works/${encodeURIComponent(doi)}`);
    const m = data.message || {};
    const authors = (m.author || []).map(a => ({
      family: a.family || a.name || "",
      given: a.given || "",
    }));
    const dp = m["published-print"] || m["published-online"] || m.issued || m.created;
    const year = dp && dp["date-parts"] && dp["date-parts"][0] ? dp["date-parts"][0][0] : null;
    return {
      authors,
      year,
      title: Array.isArray(m.title) ? m.title[0] : m.title,
      venue: Array.isArray(m["container-title"]) ? m["container-title"][0] : m["container-title"],
      volume: m.volume, page: m.page,
      type: m.type, subtype: m.subtype,
    };
  } catch (e) {
    return null;
  }
}

function authorsHtml(authors) {
  if (!authors || !authors.length) return "";
  return authors.map(a => {
    const initials = a.given
      ? a.given.split(/[\s.-]+/).filter(Boolean).map(x => x[0].toUpperCase() + ".").join(" ")
      : "";
    const name = escapeHtml([initials, a.family].filter(Boolean).join(" ").trim() || a.family);
    return isHighlighted(a.family, a.given)
      ? `<span class="me">${name}</span>`
      : name;
  }).join(", ");
}

/* ---- Extract the useful bits from one ORCID work summary ---- */
function parseOrcidSummary(group) {
  const s = (group["work-summary"] && group["work-summary"][0]) || {};
  const title = s.title && s.title.title ? s.title.title.value : "(untitled)";
  const journal = s["journal-title"] ? s["journal-title"].value : "";
  const type = (s.type || "").replace(/-/g, " ");
  const year = s["publication-date"] && s["publication-date"].year
    ? parseInt(s["publication-date"].year.value, 10) : null;

  let doi = "", url = "";
  const ids = (group["external-ids"] && group["external-ids"]["external-id"]) ||
              (s["external-ids"] && s["external-ids"]["external-id"]) || [];
  ids.forEach(id => {
    const t = (id["external-id-type"] || "").toLowerCase();
    const v = id["external-id-value"] || "";
    const u = id["external-id-url"] && id["external-id-url"].value;
    if (t === "doi" && !doi) doi = v;
    if (u && !url) url = u;
  });
  if (s.url && s.url.value && !url) url = s.url.value;

  return { title, journal, type, year, doi, url, isPreprint: /preprint/i.test(type) };
}

function renderPublications(pubs) {
  // group by year (desc); items with no year go last
  const byYear = {};
  pubs.forEach(p => {
    const y = p.year || "Other";
    (byYear[y] = byYear[y] || []).push(p);
  });
  const years = Object.keys(byYear).sort((a, b) => {
    if (a === "Other") return 1;
    if (b === "Other") return -1;
    return b - a;
  });

  let html = "";
  years.forEach(y => {
    html += `<div class="pub-year-group"><div class="year">${y}</div>`;
    byYear[y].forEach(p => {
      const links = [];
      if (p.doi) links.push(`<a href="https://doi.org/${p.doi}" target="_blank" rel="noopener">DOI</a>`);
      if (p.url && !p.doi) links.push(`<a href="${escapeHtml(p.url)}" target="_blank" rel="noopener">Link</a>`);
      const authors = authorsHtml(p.authors);
      const venue = p.venue || p.journal || "";
      html += `
        <div class="pub-item">
          <div class="pub-title">${escapeHtml(p.title)}${p.isPreprint ? ' <span class="pub-tag">[preprint]</span>' : ''}</div>
          ${authors ? `<div class="pub-authors">${authors}</div>` : ""}
          ${venue ? `<div class="pub-venue">${escapeHtml(venue)}</div>` : ""}
          ${links.length ? `<div class="pub-links">${links.join("")}</div>` : ""}
        </div>`;
    });
    html += `</div>`;
  });
  elList().innerHTML = html;
  elStatus().style.display = "none";
}

async function loadPublications() {
  const status = elStatus();

  if (!SITE.orcid || SITE.orcid === "0000-0000-0000-0000") {
    status.className = "pub-status error";
    status.innerHTML = "⚠️ No ORCID iD set yet. Add your ORCID iD in <code>assets/js/site.js</code> to load publications automatically.";
    return;
  }

  status.innerHTML = `<span class="spinner"></span>Loading publications from ORCID…`;

  try {
    const data = await fetchJSON(
      `https://pub.orcid.org/v3.0/${SITE.orcid}/works`,
      { "Accept": "application/json" }
    );
    const groups = data.group || [];
    if (!groups.length) {
      status.className = "pub-status";
      status.textContent = "No public works found on this ORCID record yet.";
      return;
    }

    let pubs = groups.map(parseOrcidSummary);

    // Enrich with Crossref (authors + tidy metadata) where a DOI exists.
    await Promise.all(pubs.map(async p => {
      if (p.doi) {
        const cr = await crossrefByDoi(p.doi);
        if (cr) {
          p.authors = cr.authors;
          p.venue = cr.venue || p.journal;
          if (cr.year) p.year = cr.year;
          if (cr.title) p.title = cr.title;
          if (cr.type === "posted-content" || /preprint/i.test(cr.subtype || "")) p.isPreprint = true;
        }
      }
    }));

    // De-duplicate by DOI/title, then render.
    const seen = new Set();
    pubs = pubs.filter(p => {
      const key = (p.doi || p.title).toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    renderPublications(pubs);
  } catch (e) {
    status.className = "pub-status error";
    status.innerHTML = `Could not load publications from ORCID (${escapeHtml(e.message)}).
      You can view them directly on <a href="https://orcid.org/${SITE.orcid}" target="_blank" rel="noopener">ORCID</a>.`;
  }
}

document.addEventListener("DOMContentLoaded", loadPublications);
