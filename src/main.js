import { compile, createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrivacyPolicy from './components/PrivacyPolicy.vue'
import Home from './components/Home.vue'
import DeleteAccount from './components/DeleteAccount.vue'

import WhoAreYou from './components/WhoAreYou.vue'
import Contact from './components/Contact.vue'
import {createRouter, createWebHistory} from 'vue-router'


import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const routes = [
    {path: '/privacypolicy', component: PrivacyPolicy},
    {path: '/whoareyou', component: WhoAreYou},
    {path: '/contact', component: Contact},
    {path: '/deleteaccount', component: DeleteAccount},
    {path: '/', component: Home}
  ]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

const app = createApp(App)
app.use(router)
app.mount('#app')
