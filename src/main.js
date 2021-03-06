import { createApp } from 'vue';
import store from './store';
import App from './App.vue';
import vueNativeSock from 'vue-native-websocket-vue3';

const app = createApp(App);

app.use(store);

app.use(vueNativeSock, 'ws://127.0.0.1:8899', {
    store,
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 3000,
    format: 'json'
})

app.mount('#app');

export default app;
