<template>
  <div ref="siteShell" class="site-shell">
    <!-- TODO: Remove this construction notice before the public beta launch. -->
    <aside
      v-if="showConstructionToast"
      class="construction-toast"
      aria-label="Project status notice"
    >
      <button
        class="construction-toast-close"
        type="button"
        aria-label="Dismiss construction notice"
        @click="dismissConstructionToast"
      >
        <span aria-hidden="true">×</span>
      </button>
      <p class="eyebrow">Under construction</p>
      <strong>Kaze web and mobile are still evolving.</strong>
      <p>
        Some flows, visuals, and technical architecture may change before the beta release.
      </p>
    </aside>

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
      <section class="onboarding-shell hero-shell scroll-reveal reveal-section" aria-labelledby="hero-title">
        <AmbientPattern />

        <div class="hero-visual motion-stage phone-focus-stage" data-parallax="0.12">
          <PageHero page="0" />
          <DeviceShot screen="/app-screens/framed/kaze-home-framed.png" label="Kaze home and pass app screenshot" />
        </div>

        <div class="hero-copy scroll-reveal reveal-copy">
          <p class="eyebrow">Kaze Rwanda</p>
          <h1 id="hero-title">Events and guest access in one app.</h1>
          <p>
            Kaze helps hotels, venues, and organizers run events, confirm guests, manage access,
            offer services, and support guests from one mobile-first app built for Rwanda.
          </p>

          <div class="feature-list scroll-reveal reveal-stagger" aria-label="Kaze highlights">
            <FeatureRow icon="explore" title="Events, schedules, and guest details in one place" />
            <FeatureRow icon="service" title="Services, requests, and venue help without extra calls" />
            <FeatureRow icon="support" title="Built for hotels, conferences, and private events in Rwanda" />
          </div>

          <div class="hero-actions">
            <a class="primary-button" href="#events">See how Kaze works</a>
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

      <section id="stay" class="onboarding-shell split-shell scroll-reveal reveal-section">
        <AmbientPattern />
        <div class="section-copy scroll-reveal reveal-copy">
          <p class="eyebrow">Hotel experience</p>
          <h2>Give guests their stay details, access, and services without sending them back to the front desk.</h2>
          <p>
            Guests can keep room details, hotel services, event access, and practical directions in
            one calm experience during the stay.
          </p>
        </div>

        <div class="app-card-stack scroll-reveal reveal-stagger">
          <InfoCard
            eyebrow="Stay details"
            title="Everything important stays close"
            body="Guests can open stay details, event access, venue info, and useful next steps without jumping between calls or desks."
          />
          <InfoCard
            eyebrow="Guest support"
            title="Requests stay simple"
            body="Dining, late checkout, towels, venue help, and other guest requests can move through one structured mobile flow."
          />
        </div>
      </section>

      <section id="events" class="onboarding-shell flow-shell scroll-reveal reveal-section">
        <AmbientPattern />
        <div class="section-copy scroll-reveal reveal-copy">
          <p class="eyebrow">Map and events</p>
          <h2>Help guests find the right event, room, floor, and service faster.</h2>
          <p>
            Kaze is built around the real event journey: who is invited, where they should go,
            what they can access, and which services support the event before and during the day.
          </p>
        </div>

        <div class="screen-showcase motion-stage phone-focus-stage" data-parallax="0.16" aria-label="Kaze app screenshots">
          <DeviceShot screen="/app-screens/framed/kaze-wedding-framed.png" label="Kaze wedding event screen with invitation details" />
          <DeviceShot screen="/app-screens/framed/kaze-events-framed.png" label="Kaze event schedule screen with offline concierge" />
          <DeviceShot screen="/app-screens/framed/kaze-invitations-framed.png" label="Kaze invitations screen with Smart RSVP assistant" />
        </div>

        <div class="showcase-notes scroll-reveal reveal-stagger" aria-label="Event flow highlights">
          <InfoCard
            eyebrow="Arrival"
            title="Start from the guest view"
            body="Guests can open one mobile home for their pass, invitation status, quick directions, and the next action they need."
          />
          <InfoCard
            eyebrow="During the event"
            title="Keep schedule and access close"
            body="Sessions, maps, room changes, service moments, and low-connectivity help stay together instead of living in separate tools."
          />
          <InfoCard
            eyebrow="For organizers"
            title="Manage the event, not just the invite"
            body="Guest lists, RSVP, approvals, event updates, and venue-linked access can stay connected to the place people actually need to reach."
          />
        </div>

        <div class="map-stage scroll-reveal reveal-section" aria-label="Hotel map across two floors with amenity cards">
          <div class="map-stage-copy scroll-reveal reveal-copy">
            <p class="eyebrow">Hotel maps</p>
            <h3>Help guests find the right room, floor, and venue service faster.</h3>
            <p>
              Hotels and conference venues can guide guests from arrival to lobby, ballroom,
              registration, quieter spaces, and venue services without extra calls or confusion.
            </p>

            <div class="map-stage-notes" aria-label="Map highlights">
              <InfoCard
                eyebrow="Ground floor"
                title="Arrival, reception, expo, and main entry"
                body="Show the first moments clearly so guests know where to check in, where to queue, and how to reach the event route from the entrance."
              />
              <InfoCard
                eyebrow="Upper floor"
                title="Ballrooms, breakout rooms, and quieter amenities"
                body="Once guests are inside, Kaze can guide them toward sessions, lounges, bars, pool areas, and other venue-linked services."
              />
            </div>
          </div>

          <div class="map-stage-visual motion-stage phone-focus-stage" data-parallax="0.14">
            <DeviceShot screen="/app-screens/maps/kaze-map-ground-framed.png" label="Kaze hotel map on ground floor" />
            <DeviceShot screen="/app-screens/maps/kaze-map-first-framed.png" label="Kaze hotel map on first floor" />
            <img class="floating-fragment fragment-pool" src="/app-fragments/kaze-amenity-pool.png" alt="Kaze amenity card for infinity pool quiet hours" />
            <img class="floating-fragment fragment-jazz" src="/app-fragments/kaze-amenity-jazz.png" alt="Kaze amenity card for evening jazz set" />
          </div>
        </div>

        <div class="flow-grid scroll-reveal reveal-stagger">
          <InfoCard
            v-for="item in eventPillars"
            :key="item.title"
            :eyebrow="item.kicker"
            :title="item.title"
            :body="item.text"
          />
        </div>
      </section>

      <section id="requests" class="onboarding-shell request-shell scroll-reveal reveal-section">
        <AmbientPattern />
        <div class="request-visual motion-stage phone-focus-stage" data-parallax="0.18">
          <PageHero page="2" />
          <DeviceShot screen="/app-screens/framed/kaze-events-framed.png" label="Kaze events screen with offline AI support" />
          <DeviceShot screen="/app-screens/framed/kaze-invitations-framed.png" label="Kaze invitations screen with Smart RSVP assistant" />
        </div>

        <div class="section-copy scroll-reveal reveal-copy">
          <p class="eyebrow">Requests and access</p>
          <h2>Handle guest requests, access, and on-site help from the same app.</h2>
          <p>
            Guests can request services, keep one digital pass ready, and use practical on-device
            AI for low-connectivity environments: event questions, access rules, voice notes,
            translations, and quick support.
          </p>
        </div>

        <div class="ai-grid scroll-reveal reveal-stagger">
          <InfoCard
            v-for="feature in aiFeatures"
            :key="feature.title"
            :eyebrow="feature.kicker"
            :title="feature.title"
            :body="feature.text"
          />
        </div>
      </section>

      <section class="wedding-stage scroll-reveal reveal-section" aria-label="Wedding events on Kaze">
        <div class="wedding-copy scroll-reveal reveal-copy">
          <p class="eyebrow">Wedding events</p>
          <h3>Private celebrations can stay beautiful without becoming confusing.</h3>
          <p>
            Kaze can support weddings and family events with invitation details, venue timing,
            guest guidance, and access moments that stay elegant instead of technical.
          </p>

          <div class="wedding-points" aria-label="Wedding event highlights">
            <span>Invitation details close at hand</span>
            <span>Venue, date, and access in one place</span>
            <span>Made for weddings and private celebrations</span>
          </div>
        </div>

        <div class="wedding-visual motion-stage phone-focus-stage" data-parallax="0.12">
          <span class="wedding-heart heart-a" aria-hidden="true">♥</span>
          <span class="wedding-heart heart-b" aria-hidden="true">♥</span>
          <span class="wedding-heart heart-c" aria-hidden="true">♥</span>
          <DeviceShot screen="/app-screens/framed/kaze-wedding-framed.png" label="Kaze wedding invitation and event screen" />
          <div class="wedding-note note-a">
            <p>Wedding day</p>
            <strong>Guests can stay oriented without the day feeling rigid.</strong>
          </div>
          <div class="wedding-note note-b">
            <p>Garden vows</p>
            <strong>Romantic events can still have clear place, timing, and guest flow.</strong>
          </div>
        </div>
      </section>

      <section id="partners" class="partner-panel scroll-reveal reveal-section">
        <div class="scroll-reveal reveal-copy">
          <p class="eyebrow">For venues and operators</p>
          <h2>Make your space easier to book, serve, and control.</h2>
          <p>
            Kaze is for hotels, conference rooms, wedding venues, apartments, event organizers,
            catering teams, decor services, media teams, transport teams, cleaners, and insurers in
            Rwanda.
          </p>
        </div>
        <div class="partner-actions scroll-reveal reveal-stagger">
          <a class="primary-button" href="mailto:dev@kazerwanda.com">Contact Kaze</a>
          <a class="secondary-button download-link" href="https://kazerwanda.com/download">Download app</a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <span>Kaze Rwanda by GABO</span>
      <a href="mailto:dev@kazerwanda.com">dev@kazerwanda.com</a>
      <a href="https://kazerwanda.com">kazerwanda.com</a>
      <a href="https://github.com/OresteGabo/kazerwanda-web" rel="me">GitHub</a>
    </footer>
  </div>
</template>

<script setup>
import { defineComponent, h, onBeforeUnmount, onMounted, ref } from 'vue'
import kLogo from './assets/k_logo.svg'

const siteShell = ref(null)
const showConstructionToast = ref(true)

let revealObserver
let motionFrame = 0
let parallaxNodes = []
let phoneFocusNodes = []

function updateScrollMotion() {
  motionFrame = 0

  if (!siteShell.value) return

  const viewportHeight = window.innerHeight || 1

  for (const node of parallaxNodes) {
    const rect = node.getBoundingClientRect()
    const depth = Number(node.dataset.parallax || 0.14)
    const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2
    const normalized = Math.max(Math.min(centerOffset / viewportHeight, 1), -1)
    const translate = normalized * depth * -90
    const scale = 1 + (1 - Math.abs(normalized)) * depth * 0.08
    node.style.setProperty('--parallax-offset', `${translate.toFixed(2)}px`)
    node.style.setProperty('--parallax-scale', scale.toFixed(3))
  }

  for (const node of phoneFocusNodes) {
    const rect = node.getBoundingClientRect()
    const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2
    const distance = Math.abs(centerOffset)
    const focus = Math.max(0, 1 - Math.min(distance / (viewportHeight * 0.7), 1))
    node.style.setProperty('--focus-progress', focus.toFixed(3))
  }
}

function queueScrollMotion() {
  if (motionFrame) return
  motionFrame = window.requestAnimationFrame(updateScrollMotion)
}

function dismissConstructionToast() {
  showConstructionToast.value = false
  window.localStorage.setItem('kaze-hide-construction-toast', '1')
}

onMounted(() => {
  showConstructionToast.value = window.localStorage.getItem('kaze-hide-construction-toast') !== '1'
  const revealNodes = [...document.querySelectorAll('.scroll-reveal')]
  parallaxNodes = [...document.querySelectorAll('[data-parallax]')]
  phoneFocusNodes = [...document.querySelectorAll('.phone-focus-stage')]

  revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-visible')
        revealObserver.unobserve(entry.target)
      }
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -10% 0px',
    },
  )

  for (const node of revealNodes) {
    revealObserver.observe(node)
  }

  updateScrollMotion()
  window.addEventListener('scroll', queueScrollMotion, { passive: true })
  window.addEventListener('resize', queueScrollMotion)
})

onBeforeUnmount(() => {
  if (revealObserver) revealObserver.disconnect()
  if (motionFrame) window.cancelAnimationFrame(motionFrame)
  window.removeEventListener('scroll', queueScrollMotion)
  window.removeEventListener('resize', queueScrollMotion)
})

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
