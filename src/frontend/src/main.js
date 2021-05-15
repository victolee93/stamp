import { createApp } from 'vue'
import App from './App.vue'

// Vue Router
import VueRouter from "./router.js"
// external script import lib
import LoadScript from "vue-plugin-load-script";

const app = createApp(App)
    .use(VueRouter)
    .use(LoadScript);
app.mount('#app');
