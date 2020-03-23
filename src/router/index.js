import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Petugas_Tatib from '../views/Petugas_Tatib.vue'
import Data_Siswa from '../views/Data_Siswa.vue' 
import Pelanggaran from '../views/Pelanggaran.vue'
import Input_Pelanggaran from '../views/Input_Pelanggaran.vue'
import Poin_Siswa from '../views/Poin_Siswa.vue'
import Login from '../views/Login.vue'
import Navbar from '../views/layouts/Navbar.vue'
import Footer from '../views/layouts/Footer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    components: {default: Login, footer: Footer}
  },
  {
    path: '/',
    name: 'home',
    components: {default: Home, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/petugastatib',
    name: 'petugastatib',
    components: {default: Petugas_Tatib, header: Navbar, footer: Footer}
  },
  {
    path: '/datasiswa',
    name: 'datasiswa',
    components: {default: Data_Siswa, header: Navbar, footer: Footer}
  },
  {
    path: '/datapelanggaran',
    name: 'datapelanggaran',
    components: {default: Pelanggaran, header: Navbar, footer: Footer}
  },
  {
    path: '/inputpelanggaran',
    name: 'inputpelanggaran',
    components: {default: Input_Pelanggaran, header: Navbar, footer: Footer}
  },
  {
    path: '/poinsiswa',
    name: 'poinsiswa',
    components: {default: Poin_Siswa, header: Navbar, footer: Footer}
  },
  {
    path: '/profile',
    name: 'profile',
    components: {default: Profile, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router
