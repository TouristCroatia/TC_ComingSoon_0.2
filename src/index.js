const SITE = {
  name: "Tourist Croatia",
  tagline: "Curated Croatia travel, launching soon.",
  description:
    "Tourist Croatia is a refined travel guide for Croatia with destination guides, boutique stays, curated activities, island itineraries and practical travel inspiration.",
  contactEmail: "info@touristcroatia.com",
};

const IMAGES = {
  hero:
    "https://images.unsplash.com/photo-1414862625453-d87604a607e4?auto=format&fit=crop&w=1800&q=78",
  beach:
    "https://images.unsplash.com/photo-1659552400126-b3c833adf1dc?auto=format&fit=crop&w=900&q=78",
  coast:
    "https://images.unsplash.com/photo-1570135430923-39edc22a2ffa?auto=format&fit=crop&w=900&q=78",
  cove:
    "https://images.unsplash.com/photo-1602752489125-eff3ea8a2750?auto=format&fit=crop&w=900&q=78",
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderImage(src, alt, className = "") {
  return `<img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" class="${escapeHtml(
    className
  )}" loading="lazy" decoding="async" />`;
}

function renderPage(requestUrl) {
  const url = new URL(requestUrl);
  const canonicalUrl = `${url.origin}/`;
  const currentYear = new Date().getUTCFullYear();

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(SITE.name)} | Premium Croatia Travel Guide Coming Soon</title>
  <meta name="description" content="${escapeHtml(SITE.description)}" />
  <meta name="robots" content="noindex, nofollow" />
  <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
  <link rel="preconnect" href="https://images.unsplash.com" crossorigin />

  <meta property="og:type" content="website" />
  <meta property="og:title" content="${escapeHtml(SITE.name)} | Coming Soon" />
  <meta property="og:description" content="${escapeHtml(SITE.description)}" />
  <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
  <meta property="og:site_name" content="${escapeHtml(SITE.name)}" />
  <meta property="og:image" content="${escapeHtml(IMAGES.hero)}" />
  <meta name="theme-color" content="#081826" />

  <style>
    :root {
      --ink: #081826;
      --ink-2: #10293d;
      --paper: #f7f1e8;
      --paper-2: #fffaf1;
      --champagne: #d8b46a;
      --champagne-2: #f0d99c;
      --blue: #0a6f85;
      --blue-2: #77d1d9;
      --muted: #667684;
      --white: #ffffff;
      --line: rgba(255, 255, 255, 0.18);
      --dark-line: rgba(8, 24, 38, 0.12);
      --shadow: 0 36px 110px rgba(0, 0, 0, 0.38);
      --soft-shadow: 0 28px 70px rgba(8, 24, 38, 0.17);
      --radius-xl: 34px;
      --radius-lg: 26px;
      --radius-md: 18px;
      --ease: cubic-bezier(.2,.8,.2,1);
    }

    * {
      box-sizing: border-box;
    }

    html {
      min-height: 100%;
      scroll-behavior: smooth;
      background: var(--ink);
    }

    body {
      min-height: 100vh;
      margin: 0;
      color: var(--paper-2);
      background:
        radial-gradient(circle at 12% 8%, rgba(216, 180, 106, 0.24), transparent 28rem),
        radial-gradient(circle at 84% 16%, rgba(10, 111, 133, 0.30), transparent 28rem),
        linear-gradient(135deg, #06111d 0%, #081826 48%, #10293d 100%);
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      overflow-x: hidden;
    }

    body::before {
      content: "";
      position: fixed;
      inset: 0;
      pointer-events: none;
      background:
        linear-gradient(rgba(255,255,255,0.026) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.024) 1px, transparent 1px);
      background-size: 56px 56px;
      mask-image: radial-gradient(circle at center, black, transparent 74%);
    }

    a {
      color: inherit;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    .page {
      position: relative;
      width: min(1360px, calc(100% - 44px));
      min-height: 100vh;
      margin: 0 auto;
      padding: 30px 0;
    }

    .nav {
      position: relative;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding: 18px 20px;
      border: 1px solid rgba(255,255,255,0.11);
      border-radius: 999px;
      background: rgba(5, 15, 26, 0.52);
      backdrop-filter: blur(22px);
      box-shadow: 0 18px 50px rgba(0, 0, 0, 0.2);
    }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
      font-weight: 800;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }

    .brand-mark {
      position: relative;
      display: grid;
      width: 42px;
      height: 42px;
      flex: 0 0 auto;
      place-items: center;
      border: 1px solid rgba(255,255,255,0.26);
      border-radius: 50%;
      color: var(--ink);
      background: linear-gradient(135deg, var(--champagne-2), var(--champagne));
      box-shadow: 0 16px 34px rgba(216, 180, 106, 0.2);
    }

    .brand-mark::before {
      content: "";
      width: 16px;
      height: 16px;
      border: 2px solid currentColor;
      border-left-color: transparent;
      border-bottom-color: transparent;
      transform: rotate(-12deg);
    }

    .nav-note {
      color: rgba(255, 250, 241, 0.68);
      font-size: 14px;
      letter-spacing: 0.02em;
    }

    .nav-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 42px;
      padding: 0 18px;
      border: 1px solid rgba(216, 180, 106, 0.42);
      border-radius: 999px;
      color: var(--paper-2);
      text-decoration: none;
      font-size: 14px;
      font-weight: 800;
      transition: transform 220ms var(--ease), border-color 220ms var(--ease), background 220ms var(--ease);
    }

    .nav-link:hover {
      transform: translateY(-1px);
      border-color: rgba(216, 180, 106, 0.86);
      background: rgba(216, 180, 106, 0.09);
    }

    .hero {
      position: relative;
      display: grid;
      grid-template-columns: minmax(0, 1.03fr) minmax(420px, 0.97fr);
      gap: 28px;
      align-items: stretch;
      min-height: calc(100vh - 120px);
      padding: 28px 0 0;
    }

    .copy-panel {
      position: relative;
      z-index: 2;
      display: flex;
      min-height: 720px;
      flex-direction: column;
      justify-content: space-between;
      padding: clamp(34px, 5vw, 70px);
      border: 1px solid rgba(255,255,255,0.14);
      border-radius: var(--radius-xl);
      background:
        linear-gradient(145deg, rgba(8, 24, 38, 0.88), rgba(8, 24, 38, 0.58)),
        radial-gradient(circle at 14% 18%, rgba(216, 180, 106, 0.22), transparent 18rem);
      box-shadow: var(--shadow);
      overflow: hidden;
    }

    .copy-panel::before,
    .copy-panel::after {
      content: "";
      position: absolute;
      pointer-events: none;
      border-radius: 50%;
    }

    .copy-panel::before {
      right: -100px;
      top: -110px;
      width: 320px;
      height: 320px;
      border: 1px solid rgba(216, 180, 106, 0.22);
    }

    .copy-panel::after {
      right: 8%;
      bottom: 11%;
      width: 96px;
      height: 96px;
      background: radial-gradient(circle, rgba(216, 180, 106, 0.18), transparent 68%);
      filter: blur(2px);
    }

    .eyebrow {
      display: inline-flex;
      width: fit-content;
      align-items: center;
      gap: 10px;
      margin-bottom: 24px;
      padding: 10px 14px;
      border: 1px solid rgba(216, 180, 106, 0.34);
      border-radius: 999px;
      color: var(--champagne-2);
      background: rgba(216, 180, 106, 0.08);
      font-size: 12px;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
    }

    .eyebrow span {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--champagne);
      box-shadow: 0 0 0 7px rgba(216, 180, 106, 0.14);
    }

    h1,
    h2,
    h3,
    p {
      margin-top: 0;
    }

    h1 {
      max-width: 780px;
      margin-bottom: 28px;
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(58px, 8vw, 118px);
      font-weight: 500;
      line-height: 0.88;
      letter-spacing: -0.065em;
    }

    .accent {
      color: var(--champagne-2);
      font-style: italic;
    }

    .lead {
      max-width: 670px;
      margin-bottom: 0;
      color: rgba(255, 250, 241, 0.74);
      font-size: clamp(18px, 1.7vw, 22px);
      line-height: 1.75;
    }

    .cta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      align-items: center;
      margin-top: 36px;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 52px;
      padding: 0 22px;
      border: 0;
      border-radius: 999px;
      color: #06111d;
      background: linear-gradient(135deg, var(--champagne-2), var(--champagne));
      box-shadow: 0 18px 38px rgba(216, 180, 106, 0.24);
      cursor: pointer;
      font: inherit;
      font-weight: 900;
      text-decoration: none;
      transition: transform 220ms var(--ease), box-shadow 220ms var(--ease);
      white-space: nowrap;
    }

    .button:hover {
      transform: translateY(-2px);
      box-shadow: 0 22px 46px rgba(216, 180, 106, 0.32);
    }

    .text-link {
      display: inline-flex;
      align-items: center;
      min-height: 52px;
      padding: 0 4px;
      color: rgba(255, 250, 241, 0.72);
      font-size: 14px;
      font-weight: 800;
      text-decoration: none;
    }

    .text-link:hover {
      color: var(--champagne-2);
    }

    .promise-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
      margin-top: 54px;
    }

    .promise {
      padding: 18px;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.055);
      backdrop-filter: blur(18px);
    }

    .promise strong {
      display: block;
      margin-bottom: 8px;
      color: var(--paper-2);
      font-size: 14px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .promise small {
      color: rgba(255, 250, 241, 0.62);
      font-size: 13px;
      line-height: 1.45;
    }

    .visual-panel {
      position: relative;
      min-height: 720px;
      border-radius: var(--radius-xl);
      overflow: hidden;
      box-shadow: var(--shadow);
      isolation: isolate;
    }

    .visual-panel::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 1;
      background:
        linear-gradient(180deg, rgba(6, 17, 29, 0.16), rgba(6, 17, 29, 0.76)),
        radial-gradient(circle at 74% 12%, rgba(216, 180, 106, 0.24), transparent 20rem);
      pointer-events: none;
    }

    .hero-photo {
      width: 100%;
      height: 100%;
      min-height: 720px;
      object-fit: cover;
      transform: scale(1.02);
    }

    .floating-card {
      position: absolute;
      left: 26px;
      right: 26px;
      bottom: 26px;
      z-index: 2;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 20px;
      align-items: end;
      padding: 24px;
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 26px;
      background: rgba(6, 17, 29, 0.58);
      backdrop-filter: blur(24px);
    }

    .floating-card h2 {
      margin-bottom: 8px;
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(26px, 3vw, 38px);
      font-weight: 500;
      letter-spacing: -0.04em;
    }

    .floating-card p {
      margin-bottom: 0;
      color: rgba(255, 250, 241, 0.68);
      line-height: 1.65;
    }

    .launch-pill {
      display: grid;
      min-width: 118px;
      min-height: 118px;
      place-items: center;
      border: 1px solid rgba(216, 180, 106, 0.42);
      border-radius: 50%;
      color: var(--champagne-2);
      text-align: center;
      font-size: 12px;
      font-weight: 900;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }

    .below {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: minmax(0, 0.94fr) minmax(360px, 0.56fr);
      gap: 28px;
      padding: 28px 0 12px;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
    }

    .card {
      position: relative;
      min-height: 300px;
      border: 1px solid rgba(255,255,255,0.13);
      border-radius: var(--radius-lg);
      overflow: hidden;
      background: rgba(255,255,255,0.06);
      box-shadow: 0 22px 58px rgba(0, 0, 0, 0.24);
      isolation: isolate;
    }

    .card img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 600ms var(--ease), filter 600ms var(--ease);
    }

    .card::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 1;
      background: linear-gradient(180deg, rgba(6,17,29,0.04), rgba(6,17,29,0.78));
    }

    .card:hover img {
      transform: scale(1.055);
      filter: saturate(1.05) contrast(1.02);
    }

    .card-copy {
      position: absolute;
      left: 20px;
      right: 20px;
      bottom: 20px;
      z-index: 2;
    }

    .card-copy span {
      display: inline-flex;
      margin-bottom: 10px;
      padding: 8px 10px;
      border: 1px solid rgba(216, 180, 106, 0.42);
      border-radius: 999px;
      color: var(--champagne-2);
      background: rgba(6, 17, 29, 0.28);
      font-size: 11px;
      font-weight: 900;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }

    .card-copy h3 {
      margin-bottom: 8px;
      font-family: Georgia, "Times New Roman", serif;
      font-size: 30px;
      font-weight: 500;
      line-height: 1;
      letter-spacing: -0.04em;
    }

    .card-copy p {
      margin-bottom: 0;
      color: rgba(255, 250, 241, 0.72);
      font-size: 14px;
      line-height: 1.55;
    }

    .signup {
      display: flex;
      min-height: 300px;
      flex-direction: column;
      justify-content: space-between;
      padding: clamp(24px, 4vw, 34px);
      border: 1px solid rgba(8, 24, 38, 0.12);
      border-radius: var(--radius-lg);
      color: var(--ink);
      background:
        linear-gradient(145deg, rgba(255,250,241,0.98), rgba(247,241,232,0.92)),
        radial-gradient(circle at top right, rgba(216,180,106,0.26), transparent 15rem);
      box-shadow: var(--soft-shadow);
    }

    .signup-label {
      display: inline-flex;
      width: fit-content;
      margin-bottom: 18px;
      padding: 8px 10px;
      border: 1px solid rgba(216, 180, 106, 0.46);
      border-radius: 999px;
      color: #87641e;
      background: rgba(216, 180, 106, 0.16);
      font-size: 11px;
      font-weight: 900;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }

    .signup h2 {
      margin-bottom: 14px;
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(34px, 4vw, 48px);
      font-weight: 500;
      line-height: 0.98;
      letter-spacing: -0.05em;
    }

    .signup p {
      color: var(--muted);
      line-height: 1.7;
    }

    .field {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 10px;
      padding: 8px;
      border: 1px solid var(--dark-line);
      border-radius: 999px;
      background: var(--white);
      box-shadow: inset 0 0 0 1px rgba(255,255,255,0.6);
    }

    input,
    button {
      font: inherit;
    }

    input {
      width: 100%;
      min-width: 0;
      border: 0;
      outline: 0;
      padding: 0 12px;
      color: var(--ink);
      background: transparent;
      font-size: 15px;
    }

    input::placeholder {
      color: rgba(102, 118, 132, 0.72);
    }

    .form-note {
      min-height: 22px;
      margin: 12px 0 0;
      color: var(--muted);
      font-size: 13px;
      line-height: 1.5;
    }

    .footer {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      padding: 22px 4px 0;
      color: rgba(255, 250, 241, 0.5);
      font-size: 14px;
    }

    .footer a {
      color: rgba(255, 250, 241, 0.72);
      font-weight: 800;
      text-decoration: none;
    }

    .footer a:hover {
      color: var(--champagne-2);
    }

    @media (max-width: 1120px) {
      .hero,
      .below {
        grid-template-columns: 1fr;
      }

      .copy-panel,
      .visual-panel,
      .hero-photo {
        min-height: auto;
      }

      .visual-panel {
        height: min(72vw, 680px);
      }

      .hero-photo {
        height: 100%;
      }
    }

    @media (max-width: 840px) {
      .page {
        width: min(100% - 26px, 740px);
        padding-top: 18px;
      }

      .nav {
        align-items: flex-start;
        border-radius: 26px;
      }

      .nav-note {
        display: none;
      }

      .copy-panel {
        padding: 34px;
      }

      .promise-grid,
      .cards {
        grid-template-columns: 1fr;
      }

      .card {
        min-height: 260px;
      }

      .floating-card {
        grid-template-columns: 1fr;
      }

      .launch-pill {
        width: 96px;
        min-width: 96px;
        min-height: 96px;
      }
    }

    @media (max-width: 560px) {
      .page {
        width: min(100% - 20px, 500px);
      }

      .nav {
        padding: 13px;
      }

      .brand span:last-child {
        max-width: 148px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .nav-link {
        padding: 0 14px;
      }

      .copy-panel,
      .visual-panel,
      .signup,
      .card {
        border-radius: 24px;
      }

      .copy-panel {
        padding: 28px;
      }

      h1 {
        font-size: clamp(52px, 16vw, 76px);
      }

      .floating-card {
        left: 14px;
        right: 14px;
        bottom: 14px;
        padding: 18px;
      }

      .field {
        grid-template-columns: 1fr;
        border-radius: 22px;
      }

      input {
        min-height: 48px;
      }

      .button {
        width: 100%;
      }

      .footer {
        padding-bottom: 6px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        scroll-behavior: auto !important;
        transition: none !important;
      }
    }
  </style>
</head>
<body>
  <main class="page">
    <nav class="nav" aria-label="Primary navigation">
      <a class="brand" href="/" aria-label="Tourist Croatia home">
        <span class="brand-mark" aria-hidden="true"></span>
        <span>${escapeHtml(SITE.name)}</span>
      </a>
      <span class="nav-note">Refined travel guides, stays and experiences</span>
      <a class="nav-link" href="mailto:${escapeHtml(SITE.contactEmail)}">Contact</a>
    </nav>

    <section class="hero" aria-label="Tourist Croatia coming soon">
      <div class="copy-panel">
        <div>
          <div class="eyebrow"><span aria-hidden="true"></span> Coming Soon</div>
          <h1>A refined way to discover <span class="accent">Croatia.</span></h1>
          <p class="lead">
            Tourist Croatia is being crafted as a premium travel guide for the Adriatic: elegant destination guides, carefully selected accommodations, experience-led itineraries, local insight and practical advice for unforgettable stays.
          </p>
          <div class="cta-row">
            <a class="button" href="#preview-list">Join the preview list</a>
            <a class="text-link" href="mailto:${escapeHtml(SITE.contactEmail)}">Partnership enquiries</a>
          </div>
        </div>

        <div class="promise-grid" aria-label="What Tourist Croatia will feature">
          <div class="promise">
            <strong>Curated stays</strong>
            <small>Boutique hotels, private villas and memorable places to stay across the coast and islands.</small>
          </div>
          <div class="promise">
            <strong>Local guides</strong>
            <small>Elegant city, island and region guides designed for smarter trip planning.</small>
          </div>
          <div class="promise">
            <strong>Experiences</strong>
            <small>Sailing, beaches, national parks, food, wine and cultural highlights worth planning around.</small>
          </div>
        </div>
      </div>

      <div class="visual-panel" aria-label="Croatian coastline image">
        ${renderImage(IMAGES.hero, "Dubrovnik old town and the Adriatic Sea", "hero-photo")}
        <div class="floating-card">
          <div>
            <h2>For considered Croatian travel.</h2>
            <p>From Dubrovnik and Split to Istria, Hvar, Zadar and hidden coastal escapes, the new guide is on its way.</p>
          </div>
          <span class="launch-pill">Launch<br />Soon</span>
        </div>
      </div>
    </section>

    <section class="below" aria-label="Coming content and sign-up form">
      <div class="cards">
        <article class="card">
          ${renderImage(IMAGES.beach, "Clear turquoise Croatian beach with boats", "")}
          <div class="card-copy">
            <span>Stay</span>
            <h3>Boutique stays</h3>
            <p>Handpicked hotels, villas and apartments selected for location, character and comfort.</p>
          </div>
        </article>

        <article class="card">
          ${renderImage(IMAGES.coast, "Croatian coastline with cliffs and clear water", "")}
          <div class="card-copy">
            <span>Explore</span>
            <h3>Island guides</h3>
            <p>Polished itineraries for island hopping, coastal towns, beaches and scenic road trips.</p>
          </div>
        </article>

        <article class="card">
          ${renderImage(IMAGES.cove, "Quiet Adriatic cove surrounded by pine trees", "")}
          <div class="card-copy">
            <span>Experience</span>
            <h3>Private moments</h3>
            <p>Sailing days, national parks, wine routes, local restaurants and premium activities.</p>
          </div>
        </article>
      </div>

      <aside class="signup" id="preview-list">
        <div>
          <span class="signup-label">Private preview</span>
          <h2>Be first to know.</h2>
          <p>
            Join the early list and receive a note when Tourist Croatia opens its first destination guides and curated accommodation picks.
          </p>
        </div>

        <form data-notify-form>
          <div class="field">
            <label class="sr-only" for="email">Email address</label>
            <input id="email" name="email" type="email" inputmode="email" autocomplete="email" placeholder="your@email.com" aria-describedby="form-note" required />
            <button class="button" type="submit">Notify me</button>
          </div>
          <p class="form-note" id="form-note">This opens your email app. No email addresses are stored by this temporary page yet.</p>
        </form>
      </aside>
    </section>

    <footer class="footer">
      <span>&copy; ${currentYear} ${escapeHtml(SITE.name)}. Crafted for the Adriatic traveller.</span>
      <a href="mailto:${escapeHtml(SITE.contactEmail)}">${escapeHtml(SITE.contactEmail)}</a>
    </footer>
  </main>

  <script>
    const form = document.querySelector('[data-notify-form]');
    const email = document.querySelector('#email');
    const note = document.querySelector('#form-note');
    const contactEmail = ${JSON.stringify(SITE.contactEmail)};

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const value = email.value.trim();

      if (!value || !email.checkValidity()) {
        note.textContent = 'Please enter a valid email address.';
        email.focus();
        return;
      }

      const subject = encodeURIComponent('Preview list - Tourist Croatia');
      const body = encodeURIComponent([
        'Hello Tourist Croatia,',
        '',
        'Please keep me updated at: ' + value,
        '',
        'Best regards,'
      ].join("\\n"));

      window.location.href = 'mailto:' + contactEmail + '?subject=' + subject + '&body=' + body;
      note.textContent = 'Your email app is opening. Thank you for joining the preview list.';
    });
  </script>
</body>
</html>`;
}

function securityHeaders(contentType) {
  return {
    "Content-Type": contentType,
    "Cache-Control": "public, max-age=300, stale-while-revalidate=86400",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
    "Content-Security-Policy":
      "default-src 'self'; img-src 'self' data: https://images.unsplash.com; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; connect-src 'self' https://images.unsplash.com; base-uri 'self'; form-action 'self' mailto:; frame-ancestors 'none'; object-src 'none'; upgrade-insecure-requests;",
  };
}

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method Not Allowed", {
        status: 405,
        headers: {
          Allow: "GET, HEAD",
          ...securityHeaders("text/plain; charset=utf-8"),
        },
      });
    }

    if (url.pathname === "/robots.txt") {
      return new Response("User-agent: *\nDisallow: /\n", {
        headers: securityHeaders("text/plain; charset=utf-8"),
      });
    }

    if (url.pathname === "/sitemap.xml") {
      return new Response(
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${url.origin}/</loc></url>\n</urlset>`,
        { headers: securityHeaders("application/xml; charset=utf-8") }
      );
    }

    return new Response(request.method === "HEAD" ? null : renderPage(request.url), {
      status: 200,
      headers: securityHeaders("text/html; charset=utf-8"),
    });
  },
};
