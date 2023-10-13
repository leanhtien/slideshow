import Test from '@/views/Test.vue'

export const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', component: Test },
]