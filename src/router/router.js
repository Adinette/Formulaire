
import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../page/HelloWorld.vue'
import Resultat from '../page/Resultat.vue'
import Acceuil from '../page/Acceuil.vue'
import Course from '../page/Course.vue'
import HTML from '../page/HTML.vue'
import CSS from '../page/CSS.vue'
import JAVASCRIPT from '../page/JAVASCRIPT.vue'
import LARAVEL from '../page/LARAVEL.vue'
import ANGULAR from '../page/ANGULAR.vue'
import Login from '../page/Authentification/Login.vue'


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
        
        {
            path: '/course', component: Course
        },
        {
            path: '/HTML', component: HTML
        },
        {
            path: '/CSS', component: CSS
        },
        {
            path: '/JAVASCRIPT', component: JAVASCRIPT
        },
        {
            path: '/LARAVEL', component: LARAVEL
        },
        {
            path: '/ANGULAR', component: ANGULAR
        },
        {
            path: '/Login', component: Login
        },
        ,
    ]
});

export default router;