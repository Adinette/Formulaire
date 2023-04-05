import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import { createPinia } from "pinia";
import './style.css';
const pinia = createPinia();

/* 
* Je t'avais dit qu'il y a plusieurs gestionnaire d'etat dont Pinia et VueX
On a deja installe pinia, pourquoi t'es alle installe VueX ?
Si tu fais des recherches, fais en sur les choses dont je t'ai parle sinon,
si tu utilises des technologies que je n'ai jamais utiliser, je ne pourrai pas
t'aide s'il y a d'erreur parce que moi meme je ne saurai pas comment regler.

Du coup je commente toute cette partie. Ca fait 1 probleme de moins
import{useStore} from 'vuex';
import{computed} from 'vue';
import authModules from './store/Modules/Auth/index.js';
const store =useStore({
    Modules:{
        auth:authModules
    },
});
 */

const app = createApp(App);
app.use(pinia)
    //.use(store) je commente aussi l'appelation du store ici.
    .use(router)
    .mount("#app");