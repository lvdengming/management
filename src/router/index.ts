import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import Home from 'views/home/Home.vue';
import History from 'views/history/History.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/history',
        name: 'history',
        component: History
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/home'
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
