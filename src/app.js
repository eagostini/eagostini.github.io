import './style.css';
import { createApp } from 'vue';
import App from './App.vue';

document
    .body
    .insertAdjacentHTML('beforeend', `<div class="min-h-dvh" id="app" />`);

createApp(App).mount('#app');
