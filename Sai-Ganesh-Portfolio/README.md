# Mudu Ganesh — Portfolio Website (Designer & Developer)

A high-performance, dark-mode portfolio website created directly from the visual design reference. Features a cinematic black-and-orange theme, glowing portrait highlights, custom cards, interactive category filtering, and subtle GSAP animations.

---

## 🚀 Live Demo & Preview
The project is built with standard web technologies and runs seamlessly using **VS Code Live Server** or any static web hosting platform (GitHub Pages, Netlify, Vercel).

---

## 📁 Project Structure

```
Sai-Ganesh-Portfolio/
│
├── index.html          # Home Page (Hero, Featured Work, About & Stats, Services, Testimonials, Contact)
├── portfolio.html      # Portfolio Gallery (12 projects, search bar, category filters, lightbox modal)
├── services.html       # Services Page (Graphic Design, Development & Tech, AI & Analytics, Freelancing)
├── pricing.html        # FAQ Page (Frequently Asked Questions accordion & project consultation CTA)
├── about.html          # About Me Page (VNRVJIET B.Tech Data Science, Design Head, NullClass intern, skills)
├── contact.html        # Contact Page (Full inquiry form, direct contact cards, WhatsApp CTA)
│
├── css/
│   ├── variables.css   # Color palette tokens, typography, dark/light theme definitions
│   ├── animations.css  # Rotating aura, floating badges, pulse glow, smooth transitions
│   ├── style.css       # Core styling, navbar, rounded panels, cards, footer, lightbox
│   └── responsive.css  # Breakpoints for 320px, 375px, 768px, 1024px, 1440px
│
├── js/
│   ├── main.js         # Navigation, dark/light theme switcher, scroll states, FAQ accordion, service tabs
│   ├── animations.js   # GSAP hero staggers, ScrollTrigger panel reveals, stat counter animations
│   ├── portfolio.js    # Live category tabs, real-time search filtering, lightbox modal handler
│   ├── contact.js      # Form validation with transparent feedback simulation
│   └── cursor.js       # Magnetic custom cursor with orange glow and hover states
│
├── assets/
│   ├── images/         # Real cut-out profile photo, project images, clients, art, favicon
│   ├── icons/          # Vector icons and symbol assets
│   ├── fonts/          # Custom font assets
│   └── videos/         # Video media storage
│
├── README.md           # Documentation and setup instructions
└── LICENSE             # MIT License
```

---

## 🎨 Design System

- **Main Background:** Almost black (`#050505`)
- **Panel Background:** Dark charcoal (`#0B0B0B`)
- **Card Background:** Deep grey (`#121212`)
- **Primary Accent Orange:** `#FF7900`
- **Secondary Orange:** `#FF9A35`
- **Border Color:** Subtle bronze-brown (`#302820`)
- **Glow Color:** `rgba(255, 121, 0, 0.35)`
- **Typography:**
  - Headings & Body: [Poppins](https://fonts.google.com/specimen/Poppins)
  - Signature & Script: [Dancing Script](https://fonts.google.com/specimen/Dancing+Script)

---

## ⚡ How to Run with VS Code Live Server

1. Open the project folder `Sai-Ganesh-Portfolio` in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey) from the VS Code Marketplace if not already installed.
3. Right-click on `index.html` in the file explorer.
4. Select **"Open with Live Server"** (or click **Go Live** on the bottom status bar).
5. The website will open in your default browser at `http://127.0.0.1:5500/index.html`.

---

## 🛠️ How to Customize

### 1. Replacing Images
All graphic assets are located in `assets/images/`:
- **Designer Portrait:** Replace `assets/images/profile.png` and `assets/images/about-profile.png` with your own PNG (recommended transparent background).
- **Portfolio Projects:** Replace `project-1.jpg` through `project-12.jpg` (recommended size: `600x500` or `1:1` square aspect ratio).
- **Client Testimonial Avatars:** Replace `client-1.jpg`, `client-2.jpg`, and `client-3.jpg`.
- **Decorative Ganesha Art:** Replace `contact-art.png`.

### 2. Updating Contact Information
Search and update the following placeholders across the HTML files:
- **Phone Number:** `+91 9912262559`
- **Email Address:** `muduganesh49@gmail.com`
- **WhatsApp Chat:** Search for `wa.me/919912262559` and replace with your phone number with country code.
- **Location:** `South Jakarta, Indonesia`

### 3. Updating the CV Download Link
In `index.html` and `about.html`, replace the `href` attribute on the **Download CV** button with your resume PDF path (e.g., `assets/Sai_Ganesh_Resume.pdf`).

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
