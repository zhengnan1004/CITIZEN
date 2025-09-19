import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './components/MainPage.vue'
import Nid from './components/Nid.vue'
import Branch from './components/Branch.vue'
import Application from './components/Application.vue'
import Contact from './components/Contact.vue'
import Faq from './components/Faq.vue'

const routes = [
  { path: '/', name: 'home', component: MainPage },
  { path: '/nid', name: 'nid', component: Nid },
  { path: '/branch', name: 'branch', component: Branch },
  { path: '/application', name: 'application', component: Application },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/faq', name: 'faq', component: Faq }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router


