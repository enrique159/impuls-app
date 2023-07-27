import { RouteRecordRaw } from 'vue-router'
// Loading Views
import LoadingAppView from '@/views/LoadingAppView.vue'
// Modules
import { AuthRoutes } from '@/views/auth/routes'
import { MainRoutes } from '@/views/main/routes'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/loading',
  },
  {
    path: '/loading',
    name: 'LoadingAppView',
    component: LoadingAppView,
  },
  ...AuthRoutes,
  ...MainRoutes,
]