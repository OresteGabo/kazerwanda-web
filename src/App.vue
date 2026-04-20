<template>
  <div class="site-shell">
    <header class="topbar" aria-label="Kaze Rwanda navigation">
      <a class="brand" href="#top" aria-label="Kaze Rwanda home">
        <img src="./assets/k_logo.svg" alt="Kaze Rwanda" />
        <span>Kaze Rwanda</span>
      </a>

      <nav class="nav-strip" aria-label="Main navigation">
        <a href="#events">Events</a>
        <a href="#services">Services</a>
        <a href="#ai">AI</a>
        <a href="#partners">Partners</a>
      </nav>

      <a class="contact-link" href="mailto:dev@kazerwanda.com">dev@kazerwanda.com</a>
    </header>

    <main id="top">
      <section class="hero" aria-labelledby="hero-title">
        <EventScene />

        <div class="hero-copy">
          <p class="eyebrow">Hospitality, events, and guest access in Rwanda</p>
          <h1 id="hero-title">Run the event before the day starts.</h1>
          <p>
            Kaze helps venues and organizers create invitations, confirm guests, attach services,
            collect payments, and issue Kaze Pass access from one mobile-first flow.
          </p>
          <div class="hero-actions" aria-label="Primary actions">
            <a href="#events">See the event flow</a>
            <a href="mailto:dev@kazerwanda.com">Start a pilot</a>
          </div>
        </div>

        <div class="hero-phones" aria-label="Kaze app previews">
          <PhonePreview
            class="phone-a"
            screen="/phone-screens/kaze-home.svg"
            label="Kaze event dashboard screen"
          />
          <PhonePreview
            class="phone-b"
            screen="/phone-screens/kaze-invite.svg"
            label="Kaze invitation code screen"
          />
          <PhonePreview
            class="phone-c"
            screen="/phone-screens/kaze-ai.svg"
            label="Kaze offline AI screen"
          />
        </div>

        <div class="event-ribbon" aria-label="Live event summary">
          <span>Live event</span>
          <strong>East Africa Finance Summit</strong>
          <small>Invites, passes, services, and AI support ready for guests.</small>
        </div>
      </section>

      <section id="events" class="flow-section">
        <div class="section-heading">
          <span>01 / Event flow</span>
          <h2>Built for conferences, weddings, and private-event access.</h2>
          <p>
            The first version focuses on the event journey: who is invited, what they can access,
            which services are attached, and what needs to happen before guests arrive.
          </p>
        </div>

        <div class="flow-track">
          <article v-for="item in eventPillars" :key="item.title">
            <span>{{ item.kicker }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </section>

      <section id="services" class="market-section">
        <div class="market-intro">
          <span>02 / Service marketplace</span>
          <h2>Every event needs more than a venue.</h2>
          <p>
            Kaze turns add-ons into a clean buying flow instead of scattered calls. Services can be
            attached to reservations, invitations, deposits, balances, and guest access rules.
          </p>
        </div>

        <div class="service-board">
          <article v-for="service in serviceStack" :key="service.title">
            <span>{{ service.code }}</span>
            <h3>{{ service.title }}</h3>
            <p>{{ service.text }}</p>
          </article>
        </div>
      </section>

      <section id="ai" class="ai-section">
        <div class="ai-copy">
          <span>03 / On-device AI</span>
          <h2>AI that keeps private event work on the device.</h2>
          <p>
            Kaze can use on-device AI for low-connectivity environments: organizer voice notes,
            event FAQs, access rules, receipt summaries, translations, and privacy-safe media.
          </p>
        </div>

        <div class="ai-lanes">
          <article v-for="feature in aiFeatures" :key="feature.title">
            <span>{{ feature.kicker }}</span>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.text }}</p>
          </article>
        </div>
      </section>

      <section id="partners" class="partner-section">
        <span>For venues and operators</span>
        <h2>Make your space easier to book, serve, and control.</h2>
        <p>
          Kaze is for hotels, conference rooms, wedding venues, apartments, event organizers,
          catering teams, decor services, media teams, transport teams, cleaners, and insurers in
          Rwanda.
        </p>
        <a href="mailto:dev@kazerwanda.com">Contact Kaze</a>
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
import { defineComponent, h, onBeforeUnmount, onMounted, ref } from 'vue'

const EventScene = defineComponent({
  setup() {
    const canvasRef = ref(null)
    let renderer
    let scene
    let camera
    let group
    let frameId
    let THREE

    const pointer = { x: 0, y: 0 }

    const resize = () => {
      if (!renderer || !camera || !canvasRef.value) return
      const { clientWidth, clientHeight } = canvasRef.value
      renderer.setSize(clientWidth, clientHeight, false)
      camera.aspect = clientWidth / clientHeight
      camera.updateProjectionMatrix()
    }

    const handlePointer = (event) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 2
    }

    onMounted(async () => {
      THREE = await import('three')
      const canvas = canvasRef.value

      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100)
      camera.position.set(0.2, 0.1, 9)

      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
      })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.outputColorSpace = THREE.SRGBColorSpace

      scene.add(new THREE.AmbientLight(0xffffff, 2.2))

      const key = new THREE.DirectionalLight(0xffffff, 3.4)
      key.position.set(4, 6, 5)
      scene.add(key)

      const wash = new THREE.PointLight(0xffd447, 32, 20)
      wash.position.set(-4, -1.5, 4)
      scene.add(wash)

      group = new THREE.Group()
      scene.add(group)

      const materials = {
        ink: new THREE.MeshStandardMaterial({ color: 0x101010, roughness: 0.4, metalness: 0.1 }),
        yellow: new THREE.MeshStandardMaterial({ color: 0xffd447, roughness: 0.36, metalness: 0.2 }),
        green: new THREE.MeshStandardMaterial({ color: 0x00a86b, roughness: 0.42, metalness: 0.16 }),
        red: new THREE.MeshStandardMaterial({ color: 0xef3b35, roughness: 0.48, metalness: 0.12 }),
        white: new THREE.MeshStandardMaterial({ color: 0xf8fbff, roughness: 0.52, metalness: 0.06 }),
      }

      const ticketGeometry = new THREE.BoxGeometry(1.86, 0.72, 0.08)
      const chipGeometry = new THREE.BoxGeometry(0.62, 0.62, 0.12)

      ;[
        [-2.3, 0.95, -0.2, -0.42, materials.yellow],
        [-0.9, 1.35, 0.18, -0.13, materials.white],
        [0.62, 1.05, 0.05, 0.18, materials.green],
        [2.12, 0.42, -0.08, 0.46, materials.red],
        [-1.72, -0.42, 0.12, 0.28, materials.green],
        [0.1, -0.7, 0.28, -0.2, materials.ink],
        [1.95, -0.95, 0.02, 0.16, materials.yellow],
      ].forEach(([x, y, z, rotation, material]) => {
        const mesh = new THREE.Mesh(ticketGeometry, material)
        mesh.position.set(x, y, z)
        mesh.rotation.z = rotation
        mesh.rotation.y = rotation * 0.34
        group.add(mesh)
      })

      ;[
        [-2.95, -1.05, 0.55, materials.red],
        [-0.72, 0.22, 0.82, materials.yellow],
        [1.06, 1.72, 0.42, materials.ink],
        [2.96, -0.26, 0.6, materials.green],
      ].forEach(([x, y, z, material]) => {
        const chip = new THREE.Mesh(chipGeometry, material)
        chip.position.set(x, y, z)
        chip.rotation.x = 0.6
        chip.rotation.z = 0.8
        group.add(chip)
      })

      const curveMaterial = new THREE.LineBasicMaterial({
        color: 0x101010,
        transparent: true,
        opacity: 0.34,
      })
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-3.1, -1.08, 0.35),
        new THREE.Vector3(-1.2, 0.4, 0.45),
        new THREE.Vector3(0.8, 1.46, 0.4),
        new THREE.Vector3(3.05, -0.35, 0.38),
      ])
      group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(80)), curveMaterial))

      resize()
      window.addEventListener('resize', resize)
      window.addEventListener('pointermove', handlePointer)

      const animate = () => {
        frameId = requestAnimationFrame(animate)
        const time = performance.now() * 0.001
        group.rotation.y = Math.sin(time * 0.36) * 0.12 + pointer.x * 0.06
        group.rotation.x = Math.cos(time * 0.28) * 0.06 - pointer.y * 0.04
        group.position.y = Math.sin(time * 0.72) * 0.08
        renderer.render(scene, camera)
      }

      animate()
    })

    onBeforeUnmount(() => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', handlePointer)
      renderer?.dispose()
      scene?.traverse((object) => {
        object.geometry?.dispose?.()
        object.material?.dispose?.()
      })
    })

    return () => h('canvas', { ref: canvasRef, class: 'event-scene', 'aria-hidden': 'true' })
  },
})

const PhonePreview = defineComponent({
  inheritAttrs: false,
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
  setup(props, { attrs }) {
    const classes = ['phone-preview', attrs.class].filter(Boolean)
    return () =>
      h('figure', { class: classes }, [
        h('span', { class: 'phone-camera', 'aria-hidden': 'true' }),
        h('img', { src: props.screen, alt: props.label }),
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

const serviceStack = [
  {
    code: '01',
    title: 'Catering and drinks',
    text: 'Meals, vouchers, water stations, and dietary notes tied to the event.',
  },
  {
    code: '02',
    title: 'Styling and decor',
    text: 'Flowers, lighting, stage styling, backdrops, and table presentation.',
  },
  {
    code: '03',
    title: 'Photo, video, livestream',
    text: 'Media packages that can be quoted, approved, and attached to reservations.',
  },
  {
    code: '04',
    title: 'Transport and support',
    text: 'Guest pickups, cleaning, insurance, concierge help, and custom requests.',
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
