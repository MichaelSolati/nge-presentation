import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import 'nge-slides';

Vue.config.productionTip = false;

Vue.config.ignoredElements = [
  'nge-slides-wrapper',
  'nge-slide',
  'nge-slides-progress-bar',
];

new Vue({
  render: (h) => h(App),
}).$mount('#app');
