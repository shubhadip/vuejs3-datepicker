import { createApp } from 'vue';
import App from './App.vue';
import clickOutside from '@/directives/click-outside'
import codeHighlight from '@/directives/code-highlight'

const app = createApp(App)

app.directive('clickoutside', clickOutside);
app.directive('codehigh', codeHighlight);

app.mount('#app');
