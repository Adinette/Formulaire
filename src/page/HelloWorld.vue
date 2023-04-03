<script setup>
import { ref } from "vue";
import { usePersonneStore } from "../stores/personne";

const personneStore = usePersonneStore()

const personne = ref({
  user_name: '',
  first_name: '',
  date: '',
  email: '',
  contact: '',
  cours: '',
});

const submitForm = () => {
  personneStore.setPersonne(personne.value)
  console.log("personne is :", personne.value);
};
</script>

<template>
  <form @submit.prevent class="w-3/4 mx-auto p-2">
    <h1 class="text-center text-xl font-medium">Registration Form</h1>
    <div class="grid grid-cols-2 gap-6">
      <div class="col-span-1 flex flex-col space-y-2">
        <label class="font-medium" for="user_name">Username</label>
        <input class="p-2 bg-white border-blue-500 border rounded" id="user_name" name="user_name" type="text"
          v-model="personne.user_name" />
      </div>
      <div class="col-span-1 flex flex-col space-y-2">
        <label class="font-medium" for="user_name">Firstname</label>
        <input class="p-2 bg-white border-blue-500 border rounded" id="user_name" name="user_name" type="text"
          v-model="personne.first_name" />
      </div>
      <div class="col-span-1 flex flex-col space-y-2">
        <label class="font-medium" for="user_name">Date</label>
        <input class="p-2 bg-white border-blue-500 border rounded" id="user_name" name="user_name" type="date"
          v-model="personne.date" />
      </div>
      <div class="col-span-1 flex flex-col space-y-2">
        <label class="font-medium" for="user_name">Email</label>
        <input class="p-2 bg-white border-blue-500 border rounded" id="user_name" name="user_name" type="email"
          v-model="personne.email" />
      </div>
      <div class="col-span-1 flex flex-col space-y-2">
        <label class="font-medium" for="user_name">Contact</label>
        <input class="p-2 bg-white border-blue-500 border rounded" id="user_name" name="user_name" type="text"
          v-model="personne.contact" />
      </div>
      <div class="col-span-1 flex flex-col space-y-2">
        <label class="font-medium" for="user_name">Choisissez votre cours</label>
        <select class="p-2 bg-white border-blue-500 border rounded" name="" id="" v-model="personne.cours">
          <option disabled selected value>Choisissez votre cours</option>
          <option value="html">HTML</option>
          <option value="javascript">Javascript</option>
          <option value="css">Css</option>
          <option value="laravel">Laravel</option>
          <option value="angular">Angular</option>
        </select>
      </div>
      <button @click="submitForm" class="p-2 bg-blue-500 font-medium rounded text-white">SUBMIT</button>
    </div>
  </form>
</template>

<style></style>