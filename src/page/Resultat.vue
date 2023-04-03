<template>
  <div class="mx-auto w-4/5">
    <h1 class="text-xl font-medium">Result of Registration</h1>
    <h2>Username: {{ personne?.user_name }}</h2>
    <h2>Firstname: {{ personne?.first_name }}</h2>
    <h2>Email:{{ personne?.email }}</h2>
    <h2>Date:{{ personne?.date }}</h2>
    <h2>Contact:{{ personne?.contact }}</h2>
    <h2>Cours:{{ personne?.cours }}</h2>
  </div>
</template>

<script script >
import { usePersonneStore } from '../stores/personne';

const personneStore = usePersonneStore();

const personne = personneStore.getPersonne

console.log(personne);;
</script>