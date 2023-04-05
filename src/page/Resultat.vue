<template>
  
  <div class="result">
    <h1 class="text-xl font-medium">Result of Registration</h1>
    <h2>Username: {{ personne?.user_name }}</h2>
    <h2>Firstname: {{ personne?.first_name }}</h2>
    <h2>Date of birth:{{ personne?.date }}</h2>
    <h2>Class:{{ personne?.classe }}</h2>
    <h2>Email:{{ personne?.email }}</h2>
    <h2>Contact:{{ personne?.contact }}</h2>
    <h2>course:{{ personne?.cours }}</h2>
  </div>
  <div>
    <p>You are now registered!</p>
  </div>
</template>

<script setup>

import { usePersonneStore } from "../stores/personne";

const personneStore = usePersonneStore()

const personne = personneStore.getPersonne;

console.log(personne);;
</script>
<style>
h2{
  text-align: center;
}
p{
  text-align: center;
  font-size: large;
}
.result{
  padding: 3rem ;
  margin-top: -4rem;
  width: 50rem;
  height: auto;
  position: absolute;
  left: 10%;
  right: 10%;
  background-color: rgb(246, 240, 240);
}

</style>