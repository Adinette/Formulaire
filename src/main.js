import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import { createPinia } from "pinia";
import './style.css';
const pinia = createPinia();
import{useStore} from 'vuex';
import{computed} from 'vue';
import authModules from './store/Modules/Auth/index.js';
const store =useStore({
    Modules:{
        auth:authModules
    },
});

const app = createApp(App);
app.use(pinia)
    .use(store)
    .use(router)
    .mount("#app");