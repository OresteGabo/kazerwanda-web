<template>
  <div class="site-shell">
    <header class="topbar" aria-label="Kaze Rwanda navigation">
      <a class="brand" href="#top" aria-label="Kaze Rwanda home">
        <span class="brand-lockup">
          <img class="kaze-wordmark" src="./assets/k_logo.svg" alt="Kaze" />
          <span class="by-gabo">
            <span>by</span>
            <img src="./assets/gabo_logo.svg" alt="GABO" />
          </span>
        </span>
      </a>

      <nav class="nav-links" aria-label="Main navigation">
        <a href="#venues">Venues</a>
        <a href="#platform">Platform</a>
        <a href="#business">For hotels</a>
        <a href="#contact">Contact</a>
      </nav>

      <a class="nav-cta" href="mailto:orestegabo@icloud.com">Partner with Kaze</a>
    </header>

    <main id="top">
      <section class="hero-section">
        <div class="hero-copy">
          <p class="eyebrow">Hospitality, events, and guest access in Rwanda</p>
          <h1>Book spaces, create invitations, and guide guests from one elegant platform.</h1>
          <p class="hero-lede">
            Kaze connects wedding venues, conference rooms, local stays, hotel services, maps,
            payments, and digital guest passes into one experience built for Rwanda.
          </p>

          <div class="hero-actions">
            <a class="primary-action" href="#venues">Explore the vision</a>
            <a class="secondary-action" href="#business">For venue owners</a>
          </div>

          <div class="trust-row" aria-label="Kaze platform highlights">
            <span>Venue discovery</span>
            <span>Invitations</span>
            <span>Kaze Pass</span>
          </div>
        </div>

        <div class="hero-visual" aria-label="Kaze product preview">
          <div class="phone-card">
            <div class="phone-status">
              <span>9:41</span>
              <span class="status-pill"></span>
              <span>5G</span>
            </div>
            <div class="phone-brand">
              <img src="./assets/k_logo.svg" alt="Kaze" />
              <span>Rwanda</span>
            </div>
            <div class="phone-top">
              <span>Venue selected</span>
              <strong>Kigali Garden Pavilion</strong>
              <small>Wedding venue · 300 guests · Nyarutarama</small>
            </div>
            <div class="map-preview">
              <img class="map-watermark kaze-watermark" src="./assets/k_mark.svg" alt="" />
              <img class="map-watermark gabo-watermark" src="./assets/gabo_mark.svg" alt="" />
              <span class="map-line line-one"></span>
              <span class="map-line line-two"></span>
              <span class="map-line line-three"></span>
              <span class="map-dot"></span>
            </div>
            <div class="reservation-card">
              <div>
                <span>Reservation draft</span>
                <strong>300 guests · Wedding venue</strong>
                <small>Invitation and Kaze Pass ready after approval</small>
              </div>
              <img src="./assets/gabo_mark.svg" alt="" />
            </div>
            <div class="phone-tabs" aria-hidden="true">
              <span class="tab-active">Home</span>
              <span>Venues</span>
              <span>Invites</span>
            </div>
          </div>
          <div class="floating-note note-one">Code: KZ84P</div>
          <div class="floating-note note-two">MoMo · Cash · Card</div>
        </div>
      </section>

      <section id="venues" class="section-block">
        <div class="section-heading">
          <p class="eyebrow">Start with discovery</p>
          <h2>Find the right place before the event becomes complicated.</h2>
          <p>
            Kaze can help guests and organizers compare venues, apartments, services, and practical
            access details without jumping between many separate tools.
          </p>
        </div>

        <div class="service-grid">
          <article v-for="service in services" :key="service.title" class="service-card">
            <span class="service-icon">{{ service.icon }}</span>
            <h3>{{ service.title }}</h3>
            <p>{{ service.text }}</p>
          </article>
        </div>
      </section>

      <section id="platform" class="split-section">
        <div class="panel dark-panel">
          <p class="eyebrow">One product flow</p>
          <h2>Reservation, invitation, map, and access should feel connected.</h2>
          <p>
            A venue reservation can become an event, an invitation code, a Kaze Pass, and a mapped
            guest journey. The goal is less confusion for guests and more control for organizers.
          </p>
        </div>

        <div class="feature-list">
          <article v-for="feature in features" :key="feature.title">
            <span>{{ feature.step }}</span>
            <div>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.text }}</p>
            </div>
          </article>
        </div>
      </section>

      <section id="business" class="business-section">
        <div>
          <p class="eyebrow">For hotels, venues, and service providers</p>
          <h2>Make your space easier to understand, reserve, and manage.</h2>
          <p>
            Kaze is designed for hospitality businesses that want a modern guest experience: venue
            pages, indoor maps, service requests, event add-ons, payments, and invite-based access.
          </p>
        </div>

        <div class="business-card">
          <h3>Early partner conversations are open.</h3>
          <p>
            If you manage a hotel, wedding venue, conference room, apartment, catering team, decor
            service, media team, or transport service in Rwanda, let’s talk.
          </p>
          <a class="primary-action" href="mailto:orestegabo@icloud.com">Contact Kaze</a>
        </div>
      </section>
    </main>

    <footer id="contact" class="footer">
      <div>
        <strong>Kaze Rwanda</strong>
        <p>Hospitality and event access platform by GABO.</p>
      </div>
      <div class="footer-links">
        <a href="mailto:orestegabo@icloud.com">orestegabo@icloud.com</a>
        <a href="https://kazerwanda.com">kazerwanda.com</a>
      </div>
    </footer>
  </div>
</template>

<script setup>
const services = [
  {
    icon: '✦',
    title: 'Wedding venues',
    text: 'Compare capacity, reception style, guest access, decor options, and reservation needs.',
  },
  {
    icon: '◆',
    title: 'Conference rooms',
    text: 'Find boardrooms, training suites, launch spaces, and layouts for professional events.',
  },
  {
    icon: '⌂',
    title: 'Apartments and stays',
    text: 'Suggest local stays for families, organizers, speakers, and guests near event venues.',
  },
  {
    icon: '●',
    title: 'Event services',
    text: 'Attach catering, styling, photo, video, livestreaming, transport, cleaning, and insurance.',
  },
]

const features = [
  {
    step: '01',
    title: 'Reserve the space',
    text: 'Start with a draft reservation request: date, guest count, package, add-ons, and payment preference.',
  },
  {
    step: '02',
    title: 'Create invitations',
    text: 'Turn a reservation into a themed invitation with a short event code for WhatsApp or SMS sharing.',
  },
  {
    step: '03',
    title: 'Guide the guest',
    text: 'Use maps, digital passes, event updates, and service requests to reduce calls and confusion.',
  },
]
</script>
