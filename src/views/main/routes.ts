import MainModule from './MainModule.vue'
import ExamplePage from '@/views/main/views/ExamplePage.vue'
import DashboardView from '@/views/main/views/DashboardView.vue'

export const MainRoutes = [
  {
    path: '/main',
    name: 'main',
    redirect: '/main/Inbox',
    component: MainModule,
    children: [
      {
        path: '/main/:id',
        name: 'example-page',
        component: ExamplePage,
      },
      {
        path: '/main/dashboard',
        name: 'dashboard',
        component: DashboardView,
      },
    ],
  },
]