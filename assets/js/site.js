/* =========================================================
   Shared config + layout (sidebar & nav) for every page.
   EDIT THE `SITE` OBJECT BELOW to update links, photo, ORCID.
   ========================================================= */

const SITE = {
  name: "Anna Siebenbrunner",
  tagline: "Geoscientist · UAV-borne GPR & AI for the alpine cryosphere",

  // --- meta shown in sidebar ---
  location: "Hallein / Salzburg, Austria",
  affiliation: "GEORESEARCH · TU Munich",

  // --- profile photo ---
  // Put a photo at assets/img/ (any name) and set the path here.
  // Leave photo = "" to show initials placeholder instead.
  photo: "assets/img/profile.jpeg",
  initials: "AS",

  // --- contact ---
  // Email is stored base64-encoded and only assembled by JavaScript at runtime,
  // so it does NOT appear as plain text in the page source (basic anti-scraping).
  // To change it: base64-encode the new address and paste it here.
  emailB64: "YW5uYS5zaWViZW5icnVubmVyQGdtYWlsLmNvbQ==",

  orcid: "0000-0002-2255-2354",

  links: {
    // Set to "" to hide a link.
    linkedin:     "https://www.linkedin.com/in/anna-siebenbrunner/",
    orcidLink:    "https://orcid.org/0000-0002-2255-2354",
    scholar:      "https://scholar.google.com/citations?user=rKJoRMQAAAAJ&hl=en",
    researchgate: "https://www.researchgate.net/profile/Anna-Siebenbrunner",
    bluesky:      "https://bsky.app/profile/anna7brunner.bsky.social",
    github:       "https://github.com/anna7br",
  },
};

/* ---------- navigation items ---------- */
const NAV = [
  { href: "index.html",        label: "About" },
  { href: "research.html",     label: "Research" },
  { href: "publications.html", label: "Publications" },
  { href: "talks.html",        label: "Talks" },
  { href: "awards.html",       label: "Awards & Media" },
  { href: "beyond.html",       label: "Beyond Research" },
];

/* ---------- inline SVG icons ---------- */
const ICON = {
  pin:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  work:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>',
  mail:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  menu:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  linkedin:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H17.6v-5.3c0-1.26-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z"/></svg>',
  orcid:        '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM7.37 18.16H5.63V6.9h1.74zM6.5 5.6a1.02 1.02 0 1 1 0-2.04 1.02 1.02 0 0 1 0 2.04zm12.16 12.56h-1.73v-5.5c0-1.31-.03-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9v5.6H9.7V6.9h1.66v1.54h.02c.36-.68 1.24-1.4 2.55-1.4 2.73 0 3.24 1.8 3.24 4.13v6.99z"/></svg>',
  scholar:      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3 1 9l11 6 9-4.91V17h2V9zM5 13.18v3.32L12 20l7-3.5v-3.32L12 17z"/></svg>',
  researchgate: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.7 6.9c-.6 0-1.1.05-1.5.1v3.36c.3.05.66.06.93.06 1.24 0 2.06-.72 2.06-1.83 0-1-.7-1.69-1.49-1.69zM12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM10.9 15.3l-1.2-2.1c-.2-.34-.4-.58-.6-.72v2.82H7.2V5.72c.5-.1 1.2-.18 2.06-.18 1 0 1.86.16 2.42.63.5.4.8 1 .8 1.78 0 1.02-.68 1.74-1.44 2 .28.15.55.5.83.98l1.2 2.1zm5.3-4.3c-.02.9-.35 1.7-.9 2.24a2.6 2.6 0 0 1-1.86.7V9.94c.5 0 .92-.15 1.2-.44.28-.3.42-.72.42-1.24h1.15z"/></svg>',
  github:       '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.94 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.53.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>',
  bluesky:      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 3.2c2.3 1.7 4.7 5.2 5.6 7.1.2.4.3.6.4.6s.2-.2.4-.6C13.7 8.4 16.1 4.9 18.4 3.2c1.6-1.2 4.3-2.1 4.3 1 0 .6-.4 5.2-.6 6-.6 2.6-3.2 3.2-5.6 2.8 4.1.7 5.2 3 2.9 5.4-4.3 4.4-6.2-1.1-6.7-2.5-.1-.3-.1-.4-.2-.4s-.1.2-.2.4c-.5 1.4-2.4 6.9-6.7 2.5-2.3-2.4-1.2-4.7 2.9-5.4-2.4.4-5-.2-5.6-2.8-.2-.8-.6-5.4-.6-6 0-3.1 2.7-2.2 4.3-1z"/></svg>',
};

function buildSidebar() {
  const l = SITE.links;
  const socials = [];
  // Email: decode base64 at runtime and set href without exposing plain text in source.
  const email = (() => { try { return atob(SITE.emailB64); } catch (e) { return ""; } })();
  if (email) socials.push(`<a href="mailto:${email}" title="Email" aria-label="Email">${ICON.mail}</a>`);
  if (l.linkedin)     socials.push(`<a href="${l.linkedin}" target="_blank" rel="noopener" title="LinkedIn" aria-label="LinkedIn">${ICON.linkedin}</a>`);
  socials.push(`<a href="${l.orcidLink || ("https://orcid.org/" + SITE.orcid)}" target="_blank" rel="noopener" title="ORCID" aria-label="ORCID">${ICON.orcid}</a>`);
  if (l.scholar)      socials.push(`<a href="${l.scholar}" target="_blank" rel="noopener" title="Google Scholar" aria-label="Google Scholar">${ICON.scholar}</a>`);
  if (l.researchgate) socials.push(`<a href="${l.researchgate}" target="_blank" rel="noopener" title="ResearchGate" aria-label="ResearchGate">${ICON.researchgate}</a>`);
  if (l.bluesky)      socials.push(`<a href="${l.bluesky}" target="_blank" rel="noopener" title="Bluesky" aria-label="Bluesky">${ICON.bluesky}</a>`);
  if (l.github)       socials.push(`<a href="${l.github}" target="_blank" rel="noopener" title="GitHub" aria-label="GitHub">${ICON.github}</a>`);

  const avatar = SITE.photo
    ? `<img class="avatar" src="${SITE.photo}" alt="${SITE.name}" onerror="this.outerHTML='<div class=&quot;avatar-placeholder&quot;>${SITE.initials}</div>'">`
    : `<div class="avatar-placeholder">${SITE.initials}</div>`;

  return `
    <div class="sidebar-card">
      ${avatar}
      <div>
        <h1>${SITE.name}</h1>
        <p class="tagline">${SITE.tagline}</p>
      </div>
      <ul class="meta">
        <li>${ICON.pin}<span>${SITE.location}</span></li>
        <li>${ICON.work}<span>${SITE.affiliation}</span></li>
      </ul>
      <div class="social">${socials.join("")}</div>
    </div>`;
}

function buildNav() {
  const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const links = NAV.map(n => {
    const active = (n.href.toLowerCase() === here) ? " class=\"active\"" : "";
    return `<a href="${n.href}"${active}>${n.label}</a>`;
  }).join("");
  return `
    <button class="nav-toggle" aria-label="Menu" aria-expanded="false">${ICON.menu}</button>
    <nav class="nav">${links}</nav>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const sb = document.querySelector(".sidebar");
  if (sb) sb.innerHTML = buildSidebar();

  const tb = document.querySelector(".topbar");
  if (tb) {
    tb.innerHTML = buildNav();
    const toggle = tb.querySelector(".nav-toggle");
    const nav = tb.querySelector(".nav");
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
});
