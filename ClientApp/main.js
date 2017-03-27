import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './views/Home.vue';
import Products from './views/Products.vue';
import Counter from './views/Counter.vue';
import FetchData from './views/FetchData.vue';
import About from './views/About.vue';


Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/counter', component: Counter },
    { path: '/fetchdata', component: FetchData },
    { path: '/about', component: About }
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(App)
});
