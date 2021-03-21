import Vue from 'vue';
import { BootstrapVue, IconPlugins } from 'bootstrap-vue';
import CoolLightBox from 'vue-cool-lightbox';
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';
import emailjs from 'emailjs-com';
import App from './App.vue';
import router from './router';
import './scss/main.scss';

Vue.use(BootstrapVue, IconPlugins);
Vue.use(CoolLightBox);
Vue.use(emailjs);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
