
import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../page/HelloWorld.vue'
import Resultat from '../page/Resultat.vue'
import Acceuil from '../page/Acceuil.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        /**
         * path constitue la route de ta page par example pour helloworld. localhost:3000/hello-world
         * component represente la page qui va s'afficher dans l'example precedant, HelloWorld.
         */
        {
            path: '/hello-word', component: HelloWorld
        },
        {
            path: '/resultat', component: Resultat
        },
        {
            path: '/acceuil', component: Acceuil
        },
        ,
    ]
});

export default router;