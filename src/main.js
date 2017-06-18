// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'
import Layout from './components/Layout.vue'
import IndexPage from './pages/indexPage.vue'
import DetailPage from './pages/DetailPage.vue'
import Analysis from './pages/detail/Analysis.vue'
import Count from './pages/detail/Count.vue'
import Forecast from './pages/detail/forecast.vue'
import Publish from './pages/detail/publish.vue'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.productionTip = false;

var router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect:'/detail/analysis',
      children:[
        {
          path: 'analysis',
          component: Analysis
        },
        {
          path: 'count',
          component: Count
        },
        {
          path: 'forecast',
          component: Forecast
        },
        {
          path: 'publish',
          component: Publish
        }
      ]
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: {Layout}
});

