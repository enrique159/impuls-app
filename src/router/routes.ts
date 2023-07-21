import { RouteRecordRaw } from 'vue-router';
// Modules 
import { AuthRoutes } from '@/views/auth/routes'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/Inbox'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  },
  ...AuthRoutes
]