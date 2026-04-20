<template>
  <div class="site-shell">
    <header class="app-bar" aria-label="Kaze Rwanda navigation">
      <a class="brand-lockup" href="#top" aria-label="Kaze Rwanda home">
        <img class="brand-mark" src="./assets/k_logo.svg" alt="Kaze mark" />
        <span>
          <strong>Kaze</strong>
          <small><img src="./assets/gabo_mark.svg" alt="" /> by GABO</small>
        </span>
      </a>

      <nav aria-label="Main navigation">
        <a href="#stay">Stay</a>
        <a href="#events">Events</a>
        <a href="#requests">Requests</a>
        <a href="#partners">Partners</a>
      </nav>

      <a class="ghost-link" href="mailto:dev@kazerwanda.com">Contact</a>
    </header>

    <main id="top">
      <section class="onboarding-shell hero-shell" aria-labelledby="hero-title">
        <AmbientPattern />

        <div class="hero-visual">
          <PageHero page="0" />
          <DeviceShot screen="/app-screens/framed/kaze-home-framed.png" label="Kaze home and pass app screenshot" />
        </div>

        <div class="hero-copy">
          <p class="eyebrow">Welcome to Kaze</p>
          <h1 id="hero-title">Your hotel, event, and guest access in one app.</h1>
          <p>
            Kaze helps venues and organizers create invitations, confirm guests, attach services,
            collect payments, and issue Kaze Pass access from one mobile-first flow.
          </p>

          <div class="feature-list" aria-label="Kaze highlights">
            <FeatureRow icon="explore" title="Stay and event details in one place" />
            <FeatureRow icon="service" title="Hotel services without calling" />
            <FeatureRow icon="support" title="Less front-desk and event-day friction" />
          </div>

          <div class="hero-actions">
            <a class="primary-button" href="#events">Explore the flow</a>
            <a class="secondary-button" href="mailto:dev@kazerwanda.com">Partner with Kaze</a>
          </div>

          <div class="download-card" aria-label="Download Kaze app">
            <img src="/kaze-download-qr.svg" alt="QR code to download the Kaze app" />
            <div>
              <p class="eyebrow">Download app</p>
              <strong>Scan to open Kaze on your phone.</strong>
              <a href="https://kazerwanda.com/download">Open download page</a>
            </div>
          </div>
        </div>
      </section>

      <section id="stay" class="onboarding-shell split-shell">
        <AmbientPattern />
        <div class="section-copy">
          <p class="eyebrow">Hotel experience</p>
          <h2>See your stay, services, and property details without waiting at the front desk.</h2>
          <p>
            Keep room details, directions, hotel services, and guest support in one calm mobile
            experience during the stay.
          </p>
        </div>

        <div class="app-card-stack">
          <InfoCard
            eyebrow="Stay details"
            title="Everything stays close"
            body="Guests can find stay details, practical service options, and venue information without jumping between calls."
          />
          <InfoCard
            eyebrow="Guest support"
            title="Quieter service requests"
            body="Requests like dining, late checkout, towels, or help can move through one structured flow."
          />
        </div>
      </section>

      <section id="events" class="onboarding-shell flow-shell">
        <AmbientPattern />
        <div class="section-copy">
          <p class="eyebrow">Map and events</p>
          <h2>Find rooms, amenities, and event spaces fast.</h2>
          <p>
            Kaze is built around the event journey: who is invited, what they can access, which
            services are attached, and what needs to happen before guests arrive.
          </p>
        </div>

        <div class="screen-showcase" aria-label="Kaze app screenshots">
          <DeviceShot screen="/app-screens/framed/kaze-home-framed.png" label="Kaze home screen with pass and quick actions" />
          <DeviceShot screen="/app-screens/framed/kaze-events-framed.png" label="Kaze event schedule screen with offline concierge" />
          <DeviceShot screen="/app-screens/framed/kaze-invitations-framed.png" label="Kaze invitations screen with Smart RSVP assistant" />
        </div>

        <div class="flow-grid">
          <InfoCard
            v-for="item in eventPillars"
            :key="item.title"
            :eyebrow="item.kicker"
            :title="item.title"
            :body="item.text"
          />
        </div>
      </section>

      <section id="requests" class="onboarding-shell request-shell">
        <AmbientPattern />
        <div class="request-visual">
          <PageHero page="2" />
          <DeviceShot screen="/app-screens/framed/kaze-events-framed.png" label="Kaze events screen with offline AI support" />
          <DeviceShot screen="/app-screens/framed/kaze-invitations-framed.png" label="Kaze invitations screen with Smart RSVP assistant" />
        </div>

        <div class="section-copy">
          <p class="eyebrow">Requests and access</p>
          <h2>Request services with less back and forth.</h2>
          <p>
            Ask for services, keep one digital pass for access, and use on-device AI for
            low-connectivity environments: voice notes, event FAQs, access rules, receipt
            summaries, translations, and privacy-safe media.
          </p>
        </div>

        <div class="ai-grid">
          <InfoCard
            v-for="feature in aiFeatures"
            :key="feature.title"
            :eyebrow="feature.kicker"
            :title="feature.title"
            :body="feature.text"
          />
        </div>
      </section>

      <section id="partners" class="partner-panel">
        <div>
          <p class="eyebrow">For venues and operators</p>
          <h2>Make your space easier to book, serve, and control.</h2>
          <p>
            Kaze is for hotels, conference rooms, wedding venues, apartments, event organizers,
            catering teams, decor services, media teams, transport teams, cleaners, and insurers in
            Rwanda.
          </p>
        </div>
        <div class="partner-actions">
          <a class="primary-button" href="mailto:dev@kazerwanda.com">Contact Kaze</a>
          <a class="secondary-button download-link" href="https://kazerwanda.com/download">Download app</a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <span>Kaze Rwanda by GABO</span>
      <a href="mailto:dev@kazerwanda.com">dev@kazerwanda.com</a>
      <a href="https://kazerwanda.com">kazerwanda.com</a>
    </footer>
  </div>
</template>

<script setup>
import { defineComponent, h } from 'vue'
import kLogo from './assets/k_logo.svg'

const AmbientPattern = defineComponent({
  setup() {
    return () =>
      h('div', { class: 'ambient-pattern', 'aria-hidden': 'true' }, [
        h('span', { class: 'ambient-line line-a' }),
        h('span', { class: 'ambient-line line-b' }),
        h('span', { class: 'ambient-circle circle-a' }),
        h('span', { class: 'ambient-circle circle-b' }),
      ])
  },
})

const PageHero = defineComponent({
  props: {
    page: {
      type: String,
      default: '0',
    },
  },
  setup(props) {
    return () =>
      h('div', { class: ['page-hero', `page-hero-${props.page}`], 'aria-hidden': 'true' }, [
        h('span', { class: 'hero-line hero-line-a' }),
        h('span', { class: 'hero-line hero-line-b' }),
        h('span', { class: 'hero-route' }),
        h('span', { class: 'hero-mark' }, [h('img', { src: kLogo, alt: '' })]),
      ])
  },
})

const PhonePreview = defineComponent({
  props: {
    screen: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return () =>
      h('figure', { class: 'phone-preview' }, [
        h('span', { class: 'phone-camera', 'aria-hidden': 'true' }),
        h('img', { src: props.screen, alt: props.label }),
      ])
  },
})

const DeviceShot = defineComponent({
  props: {
    screen: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return () =>
      h('figure', { class: 'device-shot' }, [
        h('img', { src: props.screen, alt: props.label }),
      ])
  },
})

const FeatureRow = defineComponent({
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return () =>
      h('div', { class: 'feature-row' }, [
        h('span', { class: ['feature-icon', `icon-${props.icon}`], 'aria-hidden': 'true' }),
        h('strong', props.title),
      ])
  },
})

const InfoCard = defineComponent({
  props: {
    eyebrow: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return () =>
      h('article', { class: 'info-card' }, [
        h('p', { class: 'eyebrow' }, props.eyebrow),
        h('h3', props.title),
        h('p', props.body),
      ])
  },
})

const eventPillars = [
  {
    kicker: 'Reservation',
    title: 'Book the space',
    text: 'Compare capacity, package, payment preference, guest count, and service needs before the event is confirmed.',
  },
  {
    kicker: 'Invitation',
    title: 'Send the access path',
    text: 'Create themed invitations with short codes for WhatsApp, SMS, printed cards, posters, or staff instructions.',
  },
  {
    kicker: 'Kaze Pass',
    title: 'Confirm who can enter',
    text: 'Connect guest approval, payment state, service package, and event rules into one pass.',
  },
  {
    kicker: 'Updates',
    title: 'Reduce event-day confusion',
    text: 'Keep schedule changes, service notes, RSVP state, and guest instructions in the same place.',
  },
]

const aiFeatures = [
  {
    kicker: 'Smart RSVP',
    title: 'Voice notes into guest data',
    text: 'Turn organizer or staff voice notes into reviewed RSVP records, seat counts, meal notes, and phone numbers.',
  },
  {
    kicker: 'Offline concierge',
    title: 'Answers from cached event data',
    text: 'Guests can ask about schedules, access, service rules, and FAQs even when indoor connectivity is weak.',
  },
  {
    kicker: 'Privacy shield',
    title: 'Safer event media',
    text: 'Detect faces, blur non-consenting guests, and remove blurry or duplicate photos before upload.',
  },
  {
    kicker: 'Low-data tools',
    title: 'Translations and receipts',
    text: 'Translate practical event messages and summarize deposits or service receipts locally before sync.',
  },
]
</script>
