<template>
  <div class="nam">
    <ul>
      <li><router-link class="butt" to="/resultat"> Consult my Registration</router-link></li>
      <li><router-link class="butt" to="/course"> Start my course</router-link></li>
    </ul>
    <form @submit.prevent="login" class="label">
      <div>
        <label for="email">E-Mail : </label>
        <input type="email" class="input" id="email" v-model.trim="email" required>
      </div>
      <div>
        <label for="password"> Password : </label>
        <input type="password" id="password" class="input" v-model.trim="password" required>
      </div>
      <button class="submit" @click="submit">Login</button>
      <button mode="flat" class="submit" @click="authMode">Sign up instead</button>
    </form>

  </div>
</template>

<script setup>
import { ref } from 'vue';


/**
 * Ici tu es encore repartie sur composition API, tu m'embrouilles !
 * Bref, quand tu utilises composition API, considere que tu ecris du javascript pure.
 * Donc dans le cas des variables que tu as declarer plus bas, tu doit le faire comme en Javascript
 * let user = { email: 'example@example.com' };
console.log(user.email);

 login() {
      // Envoyer la requête de connexion à votre serveur avec les données du formulaire
      console.log('Email: ' + this.email);
      console.log('Password: ' + this.password);
      // Réinitialiser le formulaire
      this.email = '';
      this.password = '';
    }
 */

const email = ref(''); //email:'' J'ai commenter ce que tu as fait et je te montre comment on fait.
//Ce sera pareil pour les autres donc pas besoins de commenter
const password = ref(''); //password: ''
const mode = ref('login'); //mode: 'login'

//Ici tu veux declarer une fonction asynchrone, regarde coment on fait

const login = async () => {
  if (email.value === '' || !email.value.includes('@')
    || password.value.lenght < 6) {
    return;
  }
  console.log('Email: ' + email.value);
  console.log('Password: ' + password.value);
  email.value = '';
  password.value = '';
  //actionPayload = () =>{
  //email:this.email;
  //password:this.password
}
/**
 * Tu utilises this.$store.dispatch, je ne sais pas ce que c'est
 * mais je suis sur que ca vient de VueX, donc il va falloir changer.
 * Prochainement, des que tu veux faire un truc, tu me dis et si je suis libre,
 * je te cherche une video ou un article en francais qui te permettra de le faire.
 * N'oublie pas de rester focus quand tu suis la video
 * Je commente tout ca donc.
 */

/* try {
  if (this.mode === 'login') {
    await this.$store.dispatch('login',)
  }
  else {
    await this.$store.dispatch('signup', {
      email: this.email,
      password: this.password
    })
  }
} catch (err) {
  this.error = err.message || 'Failed to authentificate,try later!';

}

const authMode = () => {
  if (this.mode === 'login') {
    this.mode = 'signup';
  }
  else {
    this.mode.dispatch = 'login';
  }
}
 */

//const switchModeButtonCaption=()=>{
 // if (this.mode==='login'){
   // return 'Login'
 // }
//}


</script>

<style>
.butt {
  font-size: x-large;
  color: black;
}

li {
  font-size: x-large;
  color: black;
}

.input {

  background-color: white;
  padding: 0.75rem;
  border-color: rgb(186, 186, 243);
  border-radius: 0.25rem;
  margin: auto;
  top: 20%;

}

.nam {
  height: 40%;
  padding: 4rem;
  margin-top: -4rem;
  width: 50rem;
  position: absolute;
  left: 10%;
  right: 10%;
  background-color: rgb(246, 240, 240);
}

.label {
  padding: 6rem;
  /*C'est a cause de cette partie, l'element qui a pour classe label cachait les bouttons meme si tu ne remarque pas.
  Donc fait attention a ce genre de details aussi*/
  /*margin-top: -4rem; C'EST A CAUSE DU MARGIN TOP*/
  width: 50rem;
  height: auto;
  position: absolute;
  left: 10%;
  right: 10%;

}
</style>