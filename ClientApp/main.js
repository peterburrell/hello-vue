import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './views/Home.vue';
import Counter from './views/Counter.vue';
import FetchData from './views/FetchData.vue';


Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/counter', component: Counter },
    { path: '/fetchdata', component: FetchData }
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(App)
});
