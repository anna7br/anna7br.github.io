# Anna Siebenbrunner — personal website

A static, mobile-friendly site for **https://anna7br.github.io/**.
Publications are pulled **live** from ORCID (and enriched with authors from Crossref),
so the list stays current on its own.

## Files

```
personal-website/
├── index.html          About (education, experience, skills)
├── research.html       Projects (MELT.AI, STRATIFY, CADS, DEB[:RIS:]K)
├── publications.html   Live ORCID publication list
├── talks.html          Talks & poster presentations
├── awards.html         Awards, grants & media coverage
├── beyond.html         Volunteering, öffi Touren, mountains
├── .nojekyll           tells GitHub Pages to serve files as-is
└── assets/
    ├── css/style.css
    ├── js/site.js          ← edit this to change links, photo, ORCID
    ├── js/publications.js
    └── img/profile.jpg     ← add your profile photo here (see below)
```

## 1. Add your profile photo

Save your photo as **`assets/img/profile.jpg`** (a square-ish crop works best).
Until a photo is present, a circular "AS" placeholder is shown automatically.

## 2. Fill in the remaining links

Open **`assets/js/site.js`** and paste the URLs into the `links` block:

```js
scholar: "https://scholar.google.com/citations?user=...",
bluesky: "https://bsky.app/profile/you.bsky.social",
github:  "https://github.com/anna7br",
```

Leave any link as `""` to hide its icon. LinkedIn, ORCID and ResearchGate are already set.

## 3. Publish on GitHub Pages

Your site lives at `https://anna7br.github.io/`, which is a **user site** — it must be
served from a repository named exactly **`anna7br.github.io`**.

**Option A — GitHub website (no command line):**
1. Create a repository named `anna7br.github.io` (owner: `anna7br`).
2. Upload the *contents* of this `personal-website` folder (the `.html` files and the
   `assets/` folder must be at the repository root, not inside a sub-folder).
3. In the repo: **Settings → Pages → Build and deployment → Source: “Deploy from a branch”**,
   branch **`main`**, folder **`/ (root)`**, then **Save**.
4. Wait ~1 minute, then open **https://anna7br.github.io/**.

**Option B — command line (git):**
```bash
cd path/to/personal-website
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/anna7br/anna7br.github.io.git
git push -u origin main
```
Then enable Pages as in Option A, step 3.

## Updating content later

- **Publications** update themselves from ORCID — nothing to do.
- **Talks / awards / projects** are plain HTML: edit the relevant `.html` file.
- **Links / photo / ORCID iD**: edit `assets/js/site.js`.

## Notes

- Your email is stored base64-encoded in `site.js` and only assembled by JavaScript at
  runtime, so it does not appear as plain text in the page source (basic anti-scraping).
- ORCID often omits conference proceedings and theses, so the live list may be shorter
  than your full CV. Those extra items are covered on the Talks page.
