<template>
  <section class="not-found-shell" aria-labelledby="not-found-title">
    <div class="watermark watermark-a" aria-hidden="true">
      <img src="../assets/k_logo.svg" alt="" />
    </div>
    <div class="watermark watermark-b" aria-hidden="true">
      <img src="../assets/k_logo.svg" alt="" />
    </div>
    <div class="watermark watermark-c" aria-hidden="true">
      <img src="../assets/k_logo.svg" alt="" />
    </div>

    <div class="not-found-card">
      <a class="brand-lockup" href="/" aria-label="Go to Kaze home">
        <img class="brand-mark" src="../assets/k_logo.svg" alt="Kaze mark" />
        <span>
          <strong>Kaze</strong>
          <small>by GABO</small>
        </span>
      </a>

      <p class="eyebrow">404 error</p>
      <h1 id="not-found-title">That page could not be found.</h1>
      <p class="lead">
        The link may be incomplete, expired, or no longer active. Let’s get you back to a working
        page.
      </p>

      <div class="not-found-actions">
        <a class="primary-button" href="/">Go home</a>
        <a class="secondary-button" href="mailto:dev@kazerwanda.com">Contact support</a>
      </div>

      <div class="not-found-links" aria-label="Helpful links">
        <a href="/#events">Events</a>
        <a href="/#partners">For venues</a>
        <a href="https://kazerwanda.com/download">Download app</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.not-found-shell {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 100vh;
  padding: 24px;
  overflow: hidden;
  background:
    radial-gradient(circle at 20% 18%, rgba(199, 154, 82, 0.1), transparent 22%),
    radial-gradient(circle at 82% 78%, rgba(58, 107, 115, 0.1), transparent 24%),
    linear-gradient(180deg, #fbf8f2, #fffdf8 46%, #f4f7ef 100%);
}

.not-found-card {
  position: relative;
  z-index: 1;
  width: min(680px, 100%);
  padding: 44px;
  text-align: center;
  border: 1px solid rgba(140, 107, 79, 0.14);
  border-radius: 28px;
  background: rgba(255, 253, 248, 0.8);
  box-shadow: 0 28px 80px rgba(58, 49, 38, 0.08);
  backdrop-filter: blur(16px);
}

.watermark {
  position: absolute;
  pointer-events: none;
  opacity: 0.06;
}

.watermark img {
  display: block;
  width: 100%;
  height: auto;
}

.watermark-a {
  top: 8%;
  left: -40px;
  width: 220px;
  transform: rotate(-12deg);
}

.watermark-b {
  right: -20px;
  bottom: 12%;
  width: 260px;
  transform: rotate(18deg);
}

.watermark-c {
  top: 22%;
  right: 18%;
  width: 120px;
  opacity: 0.04;
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
  text-align: left;
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
  margin: 28px 0 0;
  color: #3a6b73;
  font-size: 0.78rem;
  font-weight: 860;
  text-transform: uppercase;
}

.not-found-card h1 {
  margin: 12px 0 0;
  color: #1a1712;
  font-size: clamp(2.6rem, 5vw, 4.5rem);
  line-height: 0.98;
}

.lead {
  max-width: 48ch;
  margin: 18px auto 0;
  color: rgba(26, 23, 18, 0.72);
  font-size: 1.04rem;
  line-height: 1.7;
}

.not-found-actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
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
  background: rgba(240, 234, 224, 0.56);
}

.not-found-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 22px;
}

.not-found-links a {
  color: rgba(26, 23, 18, 0.66);
  font-size: 0.92rem;
  font-weight: 760;
  text-decoration: none;
}

.not-found-links a:hover,
.brand-lockup:hover,
.primary-button:hover,
.secondary-button:hover {
  opacity: 0.9;
}

@media (max-width: 720px) {
  .not-found-shell {
    padding: 16px;
  }

  .not-found-card {
    padding: 30px 22px;
    border-radius: 22px;
  }

  .not-found-actions {
    flex-direction: column;
  }

  .primary-button,
  .secondary-button {
    width: 100%;
  }

  .watermark-a {
    width: 160px;
    left: -34px;
  }

  .watermark-b {
    width: 180px;
    right: -26px;
  }

  .watermark-c {
    width: 90px;
    right: 8%;
  }
}
</style>
