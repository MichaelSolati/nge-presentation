import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-date-picker';
import 'nge-slides';
import 'typeform-elements/dist/embed';

Vue.config.productionTip = false;

Vue.config.ignoredElements = [
  'nge-slides-wrapper',
  'nge-slide',
  'nge-slides-progress-bar',
];

new Vue({
  render: (h) => h(App),
}).$mount('#app');
