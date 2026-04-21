<template>
  <section class="not-found-shell" aria-labelledby="not-found-title">
    <div class="not-found-card">
      <div class="ambient-pattern" aria-hidden="true">
        <span class="ambient-line line-a"></span>
        <span class="ambient-line line-b"></span>
        <span class="ambient-circle circle-a"></span>
        <span class="ambient-circle circle-b"></span>
      </div>

      <div class="not-found-copy">
        <a class="brand-lockup" href="/" aria-label="Go to Kaze home">
          <img class="brand-mark" src="../assets/k_logo.svg" alt="Kaze mark" />
          <span>
            <strong>Kaze</strong>
            <small>by GABO</small>
          </span>
        </a>

        <p class="eyebrow">Page not found</p>
        <h1 id="not-found-title">This page is not part of the guest journey.</h1>
        <p class="lead">
          The link may be old, incomplete, or no longer active. You can go back to Kaze home,
          open the app download page, or contact us if you expected this page to exist.
        </p>

        <div class="not-found-actions">
          <a class="primary-button" href="/">Go home</a>
          <a class="secondary-button" href="https://kazerwanda.com/download">Download app</a>
        </div>

        <div class="help-grid" aria-label="Helpful links">
          <a class="info-card" href="/#events">
            <p class="eyebrow">Explore</p>
            <h2>See events and invitations</h2>
            <p>Start from the product overview and jump back into venues, maps, and guest access.</p>
          </a>

          <a class="info-card" href="mailto:dev@kazerwanda.com">
            <p class="eyebrow">Support</p>
            <h2>Ask Kaze for help</h2>
            <p>Tell us which link failed and we can point you to the right page or partner flow.</p>
          </a>
        </div>
      </div>

      <div class="not-found-visual" aria-hidden="true">
        <div class="visual-panel">
          <p class="visual-code">404</p>
          <div class="visual-route">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="status-card status-card-main">
            <p>Destination unavailable</p>
            <strong>Return to Kaze home</strong>
          </div>
          <div class="status-card status-card-side">
            <p>Need a working path?</p>
            <strong>dev@kazerwanda.com</strong>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.not-found-shell {
  min-height: 100vh;
  padding: 28px 22px;
  background:
    linear-gradient(120deg, rgba(58, 107, 115, 0.1) 0 14%, transparent 14% 100%),
    radial-gradient(circle at 86% 9%, rgba(58, 107, 115, 0.1), transparent 27%),
    radial-gradient(circle at 12% 32%, rgba(199, 154, 82, 0.16), transparent 26%),
    linear-gradient(180deg, #fbf8f2, #fffdf8 42%, #f4f7ef 100%);
}

.not-found-card {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(300px, 0.72fr);
  gap: 40px;
  align-items: center;
  width: min(1160px, 100%);
  min-height: calc(100vh - 56px);
  margin: 0 auto;
  padding: 42px;
  overflow: hidden;
  border: 1px solid rgba(140, 107, 79, 0.14);
  border-radius: 28px;
  background: linear-gradient(135deg, rgba(255, 253, 248, 0.9), rgba(255, 253, 248, 0.62));
  box-shadow: 0 32px 100px rgba(58, 49, 38, 0.08);
  backdrop-filter: blur(18px);
}

.ambient-pattern {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.ambient-line,
.ambient-circle {
  position: absolute;
  display: block;
}

.ambient-line {
  height: 3px;
  border-radius: 8px;
  background: rgba(58, 107, 115, 0.13);
}

.line-a {
  top: 11%;
  left: 8%;
  width: 28%;
}

.line-b {
  right: 16%;
  bottom: 18%;
  width: 34%;
  background: rgba(154, 122, 98, 0.1);
}

.ambient-circle {
  border: 3px solid rgba(58, 107, 115, 0.075);
  border-radius: 50%;
}

.circle-a {
  right: -90px;
  top: -70px;
  width: 260px;
  height: 260px;
}

.circle-b {
  left: -120px;
  bottom: -140px;
  width: 320px;
  height: 320px;
  border-color: rgba(199, 154, 82, 0.1);
}

.not-found-copy,
.not-found-visual {
  position: relative;
  z-index: 1;
}

.brand-lockup {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #1a1712;
  text-decoration: none;
}

.brand-mark {
  width: 38px;
  height: 38px;
}

.brand-lockup span {
  display: grid;
  gap: 2px;
}

.brand-lockup strong {
  font-size: 1.06rem;
  font-weight: 860;
}

.brand-lockup small {
  color: rgba(26, 23, 18, 0.58);
  font-size: 0.8rem;
  font-weight: 760;
}

.eyebrow {
  margin: 24px 0 0;
  color: #3a6b73;
  font-size: 0.78rem;
  font-weight: 860;
  text-transform: uppercase;
}

.not-found-copy h1 {
  max-width: 12ch;
  margin: 12px 0 0;
  color: #1a1712;
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 0.96;
}

.lead {
  max-width: 600px;
  margin: 18px 0 0;
  color: rgba(26, 23, 18, 0.76);
  font-size: 1.06rem;
  line-height: 1.75;
}

.not-found-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 26px;
}

.primary-button,
.secondary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0 18px;
  border-radius: 18px;
  font-size: 0.95rem;
  font-weight: 820;
  text-decoration: none;
}

.primary-button {
  color: #fffaf1;
  background: linear-gradient(90deg, #3a6b73, #c79a52);
}

.secondary-button {
  color: #1a1712;
  border: 1.4px solid rgba(58, 107, 115, 0.34);
  background: rgba(240, 234, 224, 0.52);
}

.help-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-top: 28px;
}

.info-card {
  display: block;
  padding: 18px;
  border: 1px solid rgba(140, 107, 79, 0.14);
  border-radius: 24px;
  color: inherit;
  text-decoration: none;
  background: rgba(255, 253, 248, 0.72);
  box-shadow: 0 18px 40px rgba(58, 49, 38, 0.05);
}

.info-card h2 {
  margin: 8px 0 0;
  font-size: 1.28rem;
  line-height: 1.08;
}

.info-card p:last-child {
  margin: 10px 0 0;
  color: rgba(26, 23, 18, 0.7);
  line-height: 1.6;
}

.not-found-visual {
  min-height: 520px;
}

.visual-panel {
  position: relative;
  height: 100%;
  min-height: 520px;
  border-radius: 28px;
  background:
    linear-gradient(135deg, rgba(199, 154, 82, 0.22), rgba(58, 107, 115, 0.13), rgba(255, 253, 248, 0.72));
  box-shadow: inset 0 0 0 1px rgba(140, 107, 79, 0.1);
  overflow: hidden;
}

.visual-code {
  position: absolute;
  left: 26px;
  top: 20px;
  margin: 0;
  color: rgba(26, 23, 18, 0.18);
  font-size: clamp(5rem, 14vw, 8rem);
  font-weight: 860;
  line-height: 1;
}

.visual-route {
  position: absolute;
  inset: 110px 40px auto 40px;
  display: grid;
  gap: 16px;
}

.visual-route span {
  display: block;
  height: 12px;
  border-radius: 999px;
}

.visual-route span:nth-child(1) {
  width: 78%;
  background: rgba(199, 154, 82, 0.36);
}

.visual-route span:nth-child(2) {
  width: 92%;
  background: rgba(58, 107, 115, 0.18);
}

.visual-route span:nth-child(3) {
  width: 60%;
  background: rgba(58, 107, 115, 0.1);
}

.status-card {
  position: absolute;
  max-width: 280px;
  padding: 18px;
  border: 1px solid rgba(140, 107, 79, 0.14);
  border-radius: 24px;
  background: rgba(255, 253, 248, 0.88);
  box-shadow: 0 24px 54px rgba(58, 49, 38, 0.08);
}

.status-card p {
  margin: 0;
  color: rgba(26, 23, 18, 0.6);
  font-size: 0.78rem;
  font-weight: 760;
  text-transform: uppercase;
}

.status-card strong {
  display: block;
  margin-top: 8px;
  color: #1a1712;
  font-size: 1.22rem;
  line-height: 1.2;
}

.status-card-main {
  left: 34px;
  bottom: 42px;
}

.status-card-side {
  right: 28px;
  top: 220px;
}

@media (prefers-reduced-motion: no-preference) {
  .status-card-main {
    animation: float-soft 7s ease-in-out infinite;
  }

  .status-card-side {
    animation: float-soft-alt 8s ease-in-out infinite;
  }
}

@keyframes float-soft {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

@keyframes float-soft-alt {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(10px);
  }
}

@media (max-width: 980px) {
  .not-found-card {
    grid-template-columns: 1fr;
    padding: 28px;
  }

  .not-found-copy h1 {
    max-width: 11ch;
  }

  .not-found-visual {
    min-height: 360px;
  }

  .visual-panel {
    min-height: 360px;
  }

  .status-card-side {
    right: 20px;
    top: 164px;
  }
}

@media (max-width: 680px) {
  .not-found-shell {
    padding: 16px;
  }

  .not-found-card {
    min-height: auto;
    padding: 22px;
    border-radius: 22px;
  }

  .lead {
    font-size: 1rem;
  }

  .not-found-actions {
    flex-direction: column;
  }

  .primary-button,
  .secondary-button {
    width: 100%;
  }

  .help-grid {
    grid-template-columns: 1fr;
  }

  .not-found-visual,
  .visual-panel {
    min-height: 300px;
  }

  .visual-code {
    left: 18px;
    top: 16px;
  }

  .visual-route {
    inset: 88px 20px auto 20px;
  }

  .status-card {
    max-width: 220px;
    padding: 14px;
  }

  .status-card strong {
    font-size: 1rem;
  }

  .status-card-main {
    left: 18px;
    bottom: 18px;
  }

  .status-card-side {
    right: 16px;
    top: 156px;
  }
}
</style>
