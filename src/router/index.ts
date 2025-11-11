import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('@/views/HomeView.vue')
const PricingView = () => import('@/views/PricingView.vue')
const DocsView = () => import('@/views/DocsView.vue')
const PrivacyView = () => import('@/views/PrivacyView.vue')
const StatusView = () => import('@/views/StatusView.vue')
const DemoView = () => import('@/views/DemoView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/demo', name: 'demo', component: DemoView },
    { path: '/pricing', name: 'pricing', component: PricingView },
    { path: '/docs', name: 'docs', component: DocsView },
    { path: '/privacy', name: 'privacy', component: PrivacyView },
    { path: '/status', name: 'status', component: StatusView }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router


