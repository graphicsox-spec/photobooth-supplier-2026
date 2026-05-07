# Photo Booth Supplier — Website 2026

The Best Photo Booth Supplier in New England. AI-powered, attendant-included, always memorable.

## 📁 Project Structure

```
.
├── index.php                # Homepage
├── ai-studio.php            # AI Photo Booth landing page
├── includes/
│   ├── header.php           # Shared <head> + navigation
│   ├── footer.php           # Shared footer + scripts
│   └── logo.php             # Reusable brand logo SVG
├── css/
│   └── styles.css           # All site styles
├── js/
│   └── main.js              # Shared interactive scripts
├── assets/
│   └── ai-booth/            # AI Photo Booth gallery images
│       ├── ai-sports.jpg
│       ├── ai-cyberpunk-1.jpg
│       └── ... (20 images)
└── README.md
```

## 🛠 Tech Stack

- **PHP** — for shared header/footer includes (no database, just templating)
- **HTML5** + **CSS3** — semantic markup, custom CSS variables, modern layouts
- **Vanilla JavaScript** — no frameworks; small file, fast loads
- **Google Fonts** — Inter (UI) + Instrument Serif (display italic)

## 🚀 Local Preview

You need PHP installed locally to preview. Most computers have PHP available.

### Option 1 — Built-in PHP server (easiest)

Open a terminal in the project root and run:

```bash
php -S localhost:8000
```

Then open <http://localhost:8000> in your browser.

### Option 2 — XAMPP / MAMP / WAMP

Place this folder inside your `htdocs` (or equivalent) directory and visit
<http://localhost/Photobooth%20Supplier%202026/>.

### Option 3 — VS Code Live Server with PHP plugin

Install the *PHP Server* extension in VS Code, then right-click `index.php` →
*PHP Server: Serve project*.

## 🌐 Deploying

This site runs on **any** PHP-enabled web host (cPanel, Hostinger, Bluehost,
SiteGround, etc.).

1. Upload the entire folder to your hosting `public_html` directory via FTP or
   the host's file manager.
2. Make sure the host has PHP 7.4 or newer enabled (default on most hosts).
3. Done — visit your domain.

> **GitHub Pages note:** GitHub Pages only serves static HTML, so PHP includes
> won't render there. Use a PHP host (most paid hosts include PHP) for
> deployment, or convert PHP includes to static HTML if you specifically need
> GitHub Pages.

## ✏️ Editing Content

| What you want to change       | File to edit                       |
|-------------------------------|------------------------------------|
| Page text / sections          | `index.php` or `ai-studio.php`     |
| Top navigation menu           | `includes/header.php`              |
| Footer links / contact info   | `includes/footer.php`              |
| Brand colors, fonts, layout   | `css/styles.css`                   |
| Site logo                     | `includes/logo.php`                |
| Animations / interactions     | `js/main.js`                       |
| AI Photo Booth gallery images | `assets/ai-booth/` (replace files) |

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
