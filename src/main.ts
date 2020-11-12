import { createApp } from 'vue';
import App from './App.vue';
import clickOutside from '@/directives/click-outside'

const app = createApp(App)

app.directive('clickoutside', clickOutside);

app.mount('#app');
