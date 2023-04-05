<script setup >
import { ref } from "vue";
import { usePersonneStore } from "../stores/personne";

const personneStore = usePersonneStore()

const personne = ref({
  user_name: '',
  first_name: '',
  date: '',
  email: '',
  classe:'',
  contact: '',
  cours: '',
});

const submitForm = () => {
  personneStore.setPersonne(personne.value)
  console.log("personne is :", personne.value);
};
</script>

<template>
  
  <form @submit.prevent class="form">
    <div class="name">
    <h1 class="h1">Registration Form</h1>
   
      <div class="attribut">
        <label class="font-medium" for="user_name">Username :</label>
        <input class="input" id="user_name" name="user_name" type="text"
          v-model="personne.user_name" />
      </div>
      <div class="attribut">
        <label class="font-medium" for="user_name">Firstname :</label>
        <input class="input" id="user_name" name="user_name" type="text"
          v-model="personne.first_name" />
      </div>
      <div class="attribut">
        <label class="font-medium" for="user_name">Date of birth :</label>
        <input class="input" id="user_name" name="user_name" type="date"
          v-model="personne.date" />
      </div>
      <div class="attribut">
        <label class="font-medium" for="classe">class :</label>
        <input class="input" id="classe" name="classe" type="text"
          v-model="personne.classe" />
      </div>
      <div class="attribut">
        <label class="font-medium" for="user_name">Email :</label>
        <input class="input" id="user_name" name="user_name" type="email"
          v-model="personne.email" />
      </div>
      <div class="attribut">
        <label class="font-medium" for="user_name">Contact :</label>
        <input class="input" id="user_name" name="user_name" type="text"
          v-model="personne.contact" />
      </div>
      <div class="attribut">
        <label class="font-medium" for="user_name">Choose your course:</label>
        <select class="input" name="" id="" v-model="personne.cours">
          <option disabled selected value>Choose your course</option>
          <option value="html">HTML</option>
          <option value="javascript">Javascript</option>
          <option value="css">Css</option>
          <option value="laravel">Laravel</option>
          <option value="angular">Angular</option>
        </select>
      </div>
      <div class="contain">
        <div class="but">
          <button @click="submitForm" class="submit">SUBMIT</button>
        </div> 
        <div class="but">
          <router-link to="acceuil"><button @click="quit" class="submit">Quit</button></router-link>
        </div>
      </div>
    </div>
  </form>
</template>

<style>
.contain>.but:not(:last-child){
  margin-bottom: 40px;
  justify-content: center;
  width: 50rem;
  height: auto;
  position: center;
  top: 5%;
  bottom: 5%;
}
.name{
  padding: 3rem ;
  margin-top: -4rem;
  width: 50rem;
  height: auto;
  position: absolute;
  left: 10%;
  right: 10%;
  background-color: rgb(246, 240, 240);
}
.input{
  background-color: white;
  padding: 1rem;
  border-color: rgb(186, 186, 243);
  border-radius: 0.25rem;
  margin: auto;
}
.attribut{
  display: flex;
  flex-direction: column;
  grid-column: span 1;
  justify-content: space-between;
  margin-top: calc 0.5rem 1 ;
  font-size: 1.75rem;
}
.h1{
  text-align: center;
  font-weight: 500;
  font-size: 3rem;
  line-height: 1.75rem; 
  text-decoration: underline;
   background-clip: text ;
}
.submit{
  justify-items: space-between;
  padding: 0.5rem;
  background-color: rgb(228, 228, 249);
  font-weight: 500;
  border-radius: 0.25rem;
  padding: 1rem;
  margin: auto;
  font-size: large ;
color: black
 
}
.form{
 padding: 4rem ;
margin: 0px;
}
</style>