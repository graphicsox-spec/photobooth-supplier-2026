# Photo Booth Supplier — Website 2026

The Best Photo Booth Supplier in New England. AI-powered, attendant-included, always memorable.

## 📁 Project Structure

```
.
├── index.html               # Homepage (main content)
├── ai-studio.html           # AI Photo Booth landing page (main content)
├── includes/
│   ├── header.html          # Shared navigation + logo (edit once, both pages update)
│   └── footer.html          # Shared footer (edit once, both pages update)
├── css/
│   └── styles.css           # All site styles
├── js/
│   └── main.js              # Include loader + interactive scripts
├── assets/
│   └── ai-booth/            # AI Photo Booth gallery (20 images)
└── README.md
```

## ✨ How it works

`index.html` and `ai-studio.html` contain only **page-specific content**.
The shared **navigation and footer** are written once in `includes/header.html`
and `includes/footer.html`. A small JavaScript snippet in `js/main.js`
auto-injects them into every page on load.

This means: **edit the header or footer in one place, both pages update.**

## 🛠 Tech Stack

- **HTML5** — semantic markup, no frameworks
- **CSS3** — custom properties (variables), grid + flex, responsive
- **Vanilla JavaScript** — small file, fast loads, dynamic include loader
- **Google Fonts** — Inter (UI) + Instrument Serif (display italic)

## 🚀 Local Preview

Because the site uses `fetch()` to load shared includes, you need to serve it
through a local HTTP server (not just double-click the file).

### Easiest — VS Code Live Server (free)

1. Install [VS Code](https://code.visualstudio.com/)
2. Install the **Live Server** extension (by Ritwick Dey)
3. Right-click `index.html` → **Open with Live Server**
4. Browser opens automatically with auto-reload on save

### Alternative — Python built-in server

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

> ⚠️ Double-clicking the `.html` file will *not* work — Chrome blocks `fetch()`
> on `file://` URLs for security. Always serve through a local server.

## 🌐 Deploying to GitHub Pages

This repo is ready for **GitHub Pages**. Just push and enable:

1. Push everything to your GitHub repo (`git push`)
2. Repo **Settings** → **Pages** → Branch: `main` → **Save**
3. Wait 2 minutes — your site goes live at
   `https://<username>.github.io/<repo-name>/`

That's it. GitHub Pages serves the static files; the include loader fetches
header/footer over HTTPS without issue.

## ✏️ Editing Content

| What you want to change       | File to edit                         |
|-------------------------------|--------------------------------------|
| Homepage content              | `index.html`                         |
| AI Studio page content        | `ai-studio.html`                     |
| **Top navigation menu**       | `includes/header.html` *(both pages)* |
| **Footer / contact info**     | `includes/footer.html` *(both pages)* |
| Brand colors, fonts, layout   | `css/styles.css`                     |
| Animations / interactions     | `js/main.js`                         |
| AI Photo Booth gallery images | `assets/ai-booth/` (replace files)   |

## 🎨 Brand

- Primary blue: `#084f99`
- Light blue: `#1a73d6`
- Dark theme bg: `#0a0d14`
- Font (UI): Inter
- Font (display): Instrument Serif (italic)

## 📞 Contact

- **Phone:** 800-567-1676
- **Email:** photoboothsupplier@gmail.com
- **Service area:** All 6 New England states

---

Design &amp; Development by [Advarto](https://www.behance.net/advarto)
