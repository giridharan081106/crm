# CRM Dashboard

A simple, front-end only CRM (Customer Relationship Management) dashboard built with plain HTML, CSS, and JavaScript. It includes a login screen, an admin dashboard with charts, a customer manager, an order manager, and a settings page with dark mode.

No backend or database is required — customer and order data are stored in JS arrays (seeded from `customers.json` / `orders.json`), and user preferences (theme, remembered email, saved profile) are stored in the browser's `localStorage`.

## Features

- **Login page** — email/password validation, show/hide password, "Remember Me" (saves email to `localStorage`)
- **Dashboard** — KPI cards with count-up animation, revenue line chart and customer distribution pie chart (via Chart.js), recent activity feed, time-based greeting
- **Customers** — searchable, filterable, sortable, paginated customer table with delete action
- **Orders** — searchable, filterable order table with inline status updates and delete action
- **Settings** — editable profile form (name, email, phone, company) persisted to `localStorage`, with a reset option, plus a dark mode toggle that applies site-wide
- **Responsive design** — sidebar collapses to icons on tablets and to a bottom nav bar on mobile

## Project Structure

```
├── index.html          # Login page
├── dashboard.html       # Main dashboard
├── customers.html        # Customer management
├── orders.html           # Order management
├── settings.html          # Account & theme settings
│
├── css/
│   ├── style.css         # Login page styling
│   ├── dashboard.css     # Sidebar, topbar, KPI cards, charts, base responsive rules
│   ├── tables.css        # Shared table/controls/pagination styling
│   ├── order.css         # Orders page specific tweaks (status dropdown, columns)
│   ├── settings.css      # Settings form, buttons, theme switch, dark mode
│   └── responsive.css    # Additional global breakpoints
│
├── js/
│   ├── login.js          # Login form validation, remember me, show/hide password
│   ├── dashboard.js      # Charts, KPI count-up animation, greeting
│   ├── customers.js      # Customer table render/search/filter/sort/paginate/delete
│   ├── orders.js         # Order table render/search/filter/status update/delete
│   ├── settings.js       # Profile form save/load/reset (localStorage)
│   ├── theme.js          # Dark mode toggle, shared across pages
│   └── data.js           # Reusable helpers: fetch JSON, localStorage get/set/remove, currency formatting, ID generation
│
├── customers.json        # Sample customer records
└── orders.json            # Sample order records
```

## Getting Started

This is a static site — no build step or server-side code is needed.

1. Download/clone all files, keeping the folder structure above (`css/` and `js/` subfolders).
2. Open `index.html` in a browser, **or** serve the folder with a simple local server (recommended, since some browsers restrict `fetch()` on `file://` URLs):
   ```bash
   npx serve .
   # or
   python3 -m http.server
   ```
3. Log in with any syntactically valid email and a password of 6+ characters — authentication is simulated (no real backend), so any matching input logs you in and redirects to the dashboard.

## Notes / Fixes Applied

- `settings.html` referenced `js/settings.js`, which didn't exist in the original upload — it's included here, handling saving/loading the profile form and the reset button.
- `settings.html` only linked `js/settings.js` but its Dark Mode toggle depends on `theme.js` — added `<script src="js/theme.js"></script>` before `settings.js` so the toggle works on that page too.
- `customers.js` and `orders.js` currently hardcode the same data found in `customers.json`/`orders.json`. If you'd rather load from the JSON files instead of the hardcoded arrays, use the `loadData()` helper already provided in `data.js`, e.g.:
  ```js
  let customers = [];
  loadData("customers.json").then(data => {
      customers = data;
      filteredCustomers = [...customers];
      displayCustomers();
  });
  ```

## Tech Stack

- HTML5 / CSS3 (Flexbox, Grid, media queries)
- Vanilla JavaScript (no framework)
- [Chart.js](https://www.chartjs.org/) for dashboard charts
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts – Poppins](https://fonts.google.com/specimen/Poppins)