import AuthModule from './AuthModule.vue'
import LoginView from './views/LoginView.vue'

export const AuthRoutes = [
  {
    path: '/auth',
    name: 'auth',
    redirect: '/auth/login',
    component: AuthModule,
    children: [
      {
        path: '/auth/login',
        name: 'login',
        component: LoginView
      }
    ]
  }
]