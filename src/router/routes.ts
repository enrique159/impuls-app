import { RouteRecordRaw } from 'vue-router'
// Modules
import { AuthRoutes } from '@/views/auth/routes'
import { MainRoutes } from '@/views/main/routes'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main',
  },
  ...AuthRoutes,
  ...MainRoutes,
]