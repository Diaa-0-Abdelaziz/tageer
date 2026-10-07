<div align="center">

<img src="public/zenith-icon.png" alt="ZENITH logo" width="110" />

# ZENITH

**A bilingual (Arabic / English) marketplace for renting cars, chauffeur services and yachts.**

[**🌐 Live Demo**](https://tajeer-v376.vercel.app/)

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-5-007FFF?logo=mui&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)
![i18next](https://img.shields.io/badge/i18n-AR%20%7C%20EN-26A69A)
![Node](https://img.shields.io/badge/Node-24.x-339933?logo=nodedotjs&logoColor=white)
![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)

</div>

---

## Overview

ZENITH lets users browse and compare rental cars, hire cars with a driver, discover yacht charters and explore rental companies, all in a responsive interface with full right-to-left (RTL) support.

## Features

- **Car rental**: browse by brand, model, category (luxury, sport, cheap) and monthly deals.
- **Chauffeur service**: rent a car with a driver, with dedicated detail pages.
- **Yachts**: yacht catalogue with detail pages and image galleries.
- **Rental companies and offers**: company listings and special deals.
- **Bilingual**: Arabic and English via `i18next`, with automatic RTL/LTR layout.
- **Authentication UI**: login, register, forgot/reset password and verification code flow.
- **User account area** and a **"List your cars"** page for owners.
- **Content pages**: About us, Contact us, Blog, FAQ, Privacy Policy and Terms & Conditions.
- **Polished UX**: loading screen, scroll-to-top button, mobile-friendly search, carousels and galleries.

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | React 18, Create React App (`react-scripts` 5) |
| Routing | React Router v6 |
| UI | MUI, Bootstrap 5, styled-components, Sass |
| Forms & validation | Formik, Yup, `react-international-phone`, `libphonenumber-js` |
| Carousels & media | Swiper, React Slick, React Image Gallery |
| i18n | i18next, react-i18next |
| Typography | Cairo (variable font) |

## Getting Started

### Prerequisites

- Node.js **24.x**
- npm

### Installation

```bash
git clone https://github.com/Diaa-0-Abdelaziz/tageer.git
cd tageer
npm install --legacy-peer-deps
```

> `--legacy-peer-deps` is required because of peer-dependency conflicts between some UI packages (this is also what the Vercel build uses).

### Run locally

```bash
npm start
```

The app opens at [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
```

The optimized bundle is written to the `build/` folder.

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the development server |
| `npm run build` | Create a production build |
| `npm test` | Run tests in watch mode |

## Project Structure

```text
tageer/
├── public/              # Static assets, index.html, manifest
├── scripts/             # Build helpers (e.g. copy-bootstrap.js)
└── src/
    ├── Authentication/  # Login, register, password reset flows
    ├── data/            # Catalogue data: cars, chauffeurs, companies, offers, yachts
    ├── i18n/            # i18next setup and ar/en locale files
    ├── pages/           # Route-level pages (Home, CarList, Yachts, Blog, FAQ, ...)
    ├── Layout/          # App layout wrapper
    ├── Navbar/          # Header and navigation
    ├── Footer/          # Site footer
    ├── Breadcrumb/      # Breadcrumb navigation
    └── App.jsx          # Routes and app root
```

## Internationalization

Translations live in `src/i18n/locales`. To add or edit text, update the matching key in both the Arabic and English files so the two languages stay in sync.

## Deployment

The project is live at [tajeer-v376.vercel.app](https://tajeer-v376.vercel.app/), deployed on **Vercel** (Node 24, install with `--legacy-peer-deps`). Any static host that can serve the `build/` folder will also work, as long as it rewrites unknown routes to `index.html` for client-side routing.

## Author

**Diaa Abdelaziz** · [@Diaa-0-Abdelaziz](https://github.com/Diaa-0-Abdelaziz)
