import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './views/HomePage.vue'
import DetailPage from './views/DetailPage.vue'

Vue.use(VueRouter)

const routes = [
    { path: "/", name: "homePage", component: HomePage },
    { path: "/parlamentar/:id", name: "detailPage", component: DetailPage }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;