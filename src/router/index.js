import {createRouter, createWebHistory} from 'vue-router'


// const User = () => import('../views/User.vue')

const Login = () => import('../view/Login.vue')

const listRoutes = {
}

const routes = [
    listRoutes,
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router