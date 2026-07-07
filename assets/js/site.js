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
  // Root-absolute (starts with /) so it resolves from any page depth.
  // Leave photo = "" to show initials placeholder instead.
  photo: "/assets/img/profile.jpeg",
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
  { href: "/",              label: "About" },
  { href: "/research/",     label: "Research" },
  { href: "/publications/", label: "Publications" },
  { href: "/media/",        label: "Media Coverage" },
  { href: "/beyond/",       label: "Beyond Research" },
];

/* ---------- inline SVG icons ---------- */
const ICON = {
  pin:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  work:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>',
  mail:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  menu:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  linkedin:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H17.6v-5.3c0-1.26-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z"/></svg>',
  orcid:        '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/></svg>',
  scholar:      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>',
  researchgate: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.123 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915a3.136 3.136 0 0 1-.147-.762 17.366 17.367 0 0 1-.034-.656c-.01-.26-.014-.572-.014-.939a26.401 26.403 0 0 1 .014-.938 15.821 15.822 0 0 1 .035-.656 3.19 3.19 0 0 1 .148-.76 1.89 1.89 0 0 1 .742-1.01c.344-.244.593-.352 1.137-.352.508 0 .815.096 1.144.303.33.207.528.492.764.925.047.094.111.118.198.07l1.044-.43c.075-.048.09-.115.042-.199a3.549 3.549 0 0 0-.466-.742 3 3 0 0 0-.679-.607 3.313 3.313 0 0 0-.903-.41A4.068 4.068 0 0 0 19.586 0zM8.217 5.836c-1.69 0-3.036.086-4.297.086-1.146 0-2.291 0-3.007-.029v.831l1.088.2c.744.144 1.174.488 1.174 2.264v11.288c0 1.777-.43 2.12-1.174 2.263l-1.088.2v.832c.773-.029 2.12-.086 3.465-.086 1.29 0 2.951.057 3.667.086v-.831l-1.49-.2c-.773-.115-1.174-.487-1.174-2.264v-4.784c.688.057 1.29.057 2.206.057 1.748 3.123 3.41 5.472 4.355 6.56.86 1.032 2.177 1.691 3.839 1.691.487 0 1.003-.086 1.318-.23v-.744c-1.031 0-2.063-.716-2.808-1.518-1.26-1.376-2.95-3.582-4.355-6.074 2.32-.545 4.04-2.722 4.04-4.9 0-3.208-2.492-4.698-5.758-4.698zm-.515 1.29c2.406 0 3.839 1.26 3.839 3.552 0 2.263-1.547 3.782-4.097 3.782-.974 0-1.404-.03-2.063-.086v-7.19c.66-.059 1.547-.059 2.32-.059z"/></svg>',
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
  // Normalise current path to a clean, trailing-slash form: "/", "/research/", ...
  let here = location.pathname.replace(/index\.html$/, "");
  if (!here.endsWith("/")) here += "/";
  const links = NAV.map(n => {
    const active = (n.href === here) ? " class=\"active\"" : "";
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
