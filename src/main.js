import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import browserDetect from "vue-browser-detect-plugin";
Vue.use(browserDetect);
import socialSharing from "vue-social-sharing";
Vue.use(socialSharing);
import VueGtag from "vue-gtag";
Vue.use(VueGtag, {
  config: { id: "UA-136690661-2" }
}, router);

import './assets/css/global.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
