import { createApp } from 'vue'
import App from './App.vue'
import router from "./routes";
import Ziggeo from 'vue-ziggeo';
import "../node_modules/vue-ziggeo/dist/vue-ziggeo.css";

const app = createApp(App);
app.use(router);
app.use(Ziggeo);

app.mount('#app');
