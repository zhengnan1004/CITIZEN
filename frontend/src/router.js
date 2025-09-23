import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './components/MainPage.vue'
import Nid from './components/Nid.vue'
import Branch from './components/Branch.vue'
import Application from './components/Application.vue'
import Contact from './components/Contact.vue'
import Faq from './components/Faq.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Zhuce from './components/Zhuce.vue'
import Question1 from './components/Question1.vue'
import Forget from './components/Forget.vue'
import Inquiry from './components/Inquiry.vue'
import Privacy from './components/Privacy.vue'

const routes = [
  { path: '/', name: 'home', component: MainPage },
  { path: '/nid', name: 'nid', component: Nid },
  { path: '/branch', name: 'branch', component: Branch },
  { path: '/application', name: 'application', component: Application },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/faq', name: 'faq', component: Faq },
  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  { path: '/zhuce', name: 'zhuce', component: Zhuce },
  { path: '/question1', name: 'question1', component: Question1 },
  { path: '/forget', name: 'forget', component: Forget },
  { path: '/inquiry', name: 'inquiry', component: Inquiry }
  ,{ path: '/privacy', name: 'privacy', component: Privacy }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router


