import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import NotFound from './components/NotFound.vue'

const normalizedPath = (() => {
  const pathname = window.location.pathname || '/'
  if (pathname === '' || pathname === '/') return '/'
  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
})()

const knownPaths = new Set([
  '/',
  '/index.html',
])

const RootComponent = knownPaths.has(normalizedPath) ? App : NotFound

if (RootComponent === NotFound) {
  document.title = 'Page Not Found | Kaze Rwanda'
}

createApp(RootComponent).mount('#app')
