// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'
import Layout from './components/Layout.vue'
import IndexPage from './pages/indexPage.vue'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.productionTip = false

var router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: IndexPage
        },
    ]
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<Layout/>',
    components: {Layout}
});

