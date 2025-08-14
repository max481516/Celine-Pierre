# Celine & Pierre – Wedding Website

Welcome! This repository contains the source code for the trilingual (🇬🇧/🇫🇷/🇷🇺) wedding website of **Céline & Pierre**.  
The site lets guests RSVP, view schedules, find local information, and explore a shared photo album where everyone can upload their photos and videos and leave reactions and comments.

## ✨ Features
* **Multi-page React SPA** with smooth routing.
* **Internationalisation** via `i18next` (English, French & Russian).
* Responsive **styled-components** design.
* Three-step **RSVP flow** with reCAPTCHA & Formspree.
* Photo **gallery / lightbox** powered by `yet-another-react-lightbox`.
* Lightweight **global state** using `zustand`.
* Firebase integration ready (analytics / hosting / Firestore).

## 🛠️ Tech Stack
| Purpose | Package |
|---------|---------|
| Build / Dev Server | `vite` |
| UI Library | `react`, `react-dom` |
| Styling | `styled-components` |
| Routing | `react-router-dom` v6 |
| State | `zustand` |
| i18n | `i18next`, `react-i18next` |
| Backend-as-a-Service | `firebase` |
| Forms | `@formspree/react` + `react-google-recaptcha` |


## 📂 Project Structure (key paths)
```
├── public/            # Static assets copied as-is
├── src/
│   ├── App.jsx        # Route definitions & layout wrapper
│   ├── components/    # Reusable UI (Navbar, Footer…)
│   ├── pages/         # Top-level screens (Home, RSVP, Album…)
│   ├── hooks/         # Custom React hooks
│   ├── stores/        # Zustand stores
│   ├── i18n/          # i18next setup & locale files
│   └── media/         # Images and icons
└── vite.config.js     # Vite + plugin configuration
```












