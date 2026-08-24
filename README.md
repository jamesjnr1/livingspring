# LivingSpring Apartments

A small marketing site for **LivingSpring Apartments** — two thoughtfully finished apartments in Sunyani, Ghana.

Built as a plain static site: HTML, CSS, and a little JS. No build step. No framework. Nothing to install.

---

## Pages

- **`index.html`** — homepage: hero, intro, features, gallery preview, CTA
- **`gallery.html`** — full photo grid
- **`book.html`** — enquiry form (name, dates, guests, message)

---

## Run locally

Just open `index.html` in your browser. That's it.

For a nicer local dev experience (auto-reload, proper paths), use any static server:

```bash
# Python (built-in)
python3 -m http.server 8000

# or Node
npx serve
```

Then open **http://localhost:8000**.

---

## Deploy to Vercel

The easiest option — Vercel serves static sites for free.

1. Push this folder to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "LivingSpring — initial site"
   git branch -M main
   git remote add origin https://github.com/jamesjnr1/livingspring.git
   git push -u origin main
   ```

2. Go to [vercel.com/new](https://vercel.com/new), import the repo. Vercel detects it as a static site — no config needed. Click **Deploy**.

3. Your site is live at `livingspring.vercel.app` (and you can add a custom domain).

---

## What to customize

The site is intentionally simple to update. Everything lives in three HTML files, one CSS file, and one JS file.

### Photos
Currently uses Unsplash placeholders. Replace the `src` attributes in `index.html`, `gallery.html`, and `book.html` with your own photo URLs (upload to `images/` locally, or use a CDN like Cloudinary).

### Contact details
Search for these placeholders across all three HTML files and update:
- `hello@livingspring.gh` (email)
- `+233 00 000 0000` (phone)
- WhatsApp link

### Copy
- Homepage headline, description, feature list: `index.html`
- Gallery caption: `gallery.html`

### Colors
Design tokens are at the top of `css/styles.css` in the `:root` block. The main accent is `--accent: #2d6a4f` (forest green).

---

## Making the form actually send emails

The `book.html` form currently just shows a success modal. To wire it up to real email delivery, use one of:

**Formspree** (easiest) — sign up at [formspree.io](https://formspree.io), get a form endpoint, then change `book.html`:
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```
And remove the JS handler.

**Netlify Forms** — if you deploy to Netlify instead of Vercel, add `netlify` attribute to the form.

**EmailJS** — client-side email service, drop-in via JS.

---

## Project structure

```
livingspring/
├── index.html
├── gallery.html
├── book.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/           (empty — add your own)
├── vercel.json       (optional Vercel config)
├── .gitignore
└── README.md
```

---

## Credits

- **Font:** Poppins (Google Fonts)
- **Photos:** Unsplash (placeholders — replace with real photography before launch)
- **Design & build:** made with care in Ghana
