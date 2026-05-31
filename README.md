# 🎓 Student Portfolio

A clean, minimal personal portfolio website to showcase your skills, projects,
certifications, and info — perfect for college applications and beyond.

---

## 📁 File Structure

```
portfolio/
├── index.html              ← Home page
├── css/
│   └── style.css           ← All shared styles, variables, components
├── js/
│   ├── nav.js              ← Nav toggle, fade-in scroll animations
│   └── nav-template.js     ← Shared nav HTML injected into every page
└── pages/
    ├── about.html          ← About me, bio, interests, goals timeline
    ├── skills.html         ← Technical skills, tools, soft skills, learning
    ├── projects.html       ← Project cards with filter by category
    ├── certifications.html ← Credly badge + certification cards
    └── contact.html        ← Contact form + social links
```

---

## ✏️ How to Customize

### Your name
Search and replace **"Your Name"** across all files with your actual name.

### Nav logo (`js/nav-template.js`)
Change `"Your Name"` in the NAV_HTML string to your name.

### About page (`pages/about.html`)
- Fill in your bio paragraphs
- Update the info card (location, school, graduation year, field)
- Add/remove interest cards
- Update the goals timeline

### Skills page (`pages/skills.html`)
- Edit the skill items — change the name and set the `width` % on `.skill-fill`
  - 0–25% = Beginner
  - 26–55% = Intermediate
  - 56–80% = Proficient
  - 81–100% = Advanced
- Add/remove soft skills tags
- Update the "currently learning" cards

### Projects page (`pages/projects.html`)
- Duplicate a `.project-card` div to add new projects
- Set `data-category` to one of: `personal`, `school`, `research`
- Change the emoji in `.project-thumb`, the title, description, and links
- Update the status badge class: `status-complete`, `status-progress`, `status-planned`

### Certifications page (`pages/certifications.html`)
- The Credly badge is already embedded — just update the cert name and date below it
- To add more certs, uncomment and duplicate the template card in the HTML comments
- Update the "working toward" section with your future goals

### Contact page (`pages/contact.html`)
- Replace `your@email.com`, LinkedIn URL, and GitHub URL
- To enable real email delivery, sign up at formspree.io and replace
  `https://formspree.io/f/YOUR_ID` in the form's `action` attribute

---

## 🎨 Design Tokens (css/style.css)

All colors and fonts are CSS variables at the top of `style.css`:

| Variable | Value | Use |
|---|---|---|
| `--accent` | #2C5F4A | Buttons, labels, highlights |
| `--cream` | #F7F5F0 | Page background |
| `--ink` | #1A1916 | Body text |
| `--ink-muted` | #6B6860 | Secondary text |

To change the accent color (e.g. to blue), just update `--accent`, `--accent-light`, and `--accent-mid`.

---

## 🚀 Deploying for Free

1. **GitHub Pages** — Push to a GitHub repo, enable Pages in Settings
2. **Netlify** — Drag and drop the `portfolio/` folder at netlify.com/drop
3. **Vercel** — Connect your GitHub repo at vercel.com

No build step needed — it's plain HTML, CSS, and JS.
