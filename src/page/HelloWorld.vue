<script script>
import { ref } from "vue";

const personne = ref({
  user_name: "",
  first_name: "",
  sexe: "",
  date: "",
  email: "",
  contact: "",
  cours: "",
  salade: "",
});

const submitForm = () => {
  console.log("personne is :", personne.value);
};
</script>

<template>
  <form @submit.prevent>
    <h1>Registration Form</h1>
    <div class="form-control">
      <label for="user_name">Username</label>
      <input
        id="user_name"
        name="user_name"
        type="text"
        v-model="personne.user_name"
      />
      <p>Please enter a valid name!</p>
    </div>
    <div class="form-control">
      <label for="first_name">Firstname</label>
      <input
        id="first_name"
        name="first_name"
        type="text"
        v-model.trim="personne.first_name"
      />
      <p>Please enter a valid firstname!</p>
    </div>
    <div class="form-control">
      <label for="sexe">Sexe</label><br />
      <label for="F">Feminin</label>
      <input id="feminin" name="sexe" type="checkbox" v-model="personne.sexe" />
      <label for="M">Masculin</label>
      <input
        id="masculin"
        name="sexe"
        type="checkbox"
        v-model="personne.sexe"
      />
    </div>
    <div class="form-control">
      <label for="date">Date</label>
      <input id="date" name="date" type="date" v-model="personne.date" />
    </div>

    <div class="form-control">
      <label for="email">Email</label>
      <input id="email" name="email" type="email" v-model="personne.email" />
      <p>Please enter a valid email with @gmail.com!</p>
    </div>
    <div class="form-control">
      <label for="contact">Contact</label>
      <input
        id="contact"
        name="contact"
        type="tel"
        v-model="personne.contact"
      />
    </div>
    <div class="form-control">
      <label for="cours">Choisissez votre cours</label>
      <label for="cours">HTML</label>
      <input id="cours" name="cours" type="text" v-model="personne.cours" />
      <label for="cours">JAVASCRIPT</label>
      <input id="cours" name="cours" type="text" v-model="personne.cours" />
      <label for="cours">CSS</label>
      <input id="cours" name="cours" type="text" v-model="personne.cours" />
      <label for="cours">PHP</label>
      <input id="cours" name="cours" type="text" v-model="personne.cours" />
      <label for="cours">LARAVEL</label>
      <input id="cours" name="cours" type="text" v-model="personne.cours" />
      <label for="cours">VUE</label>
      <input id="cours" name="cours" type="text" v-model="personne.cours" />
      <label for="cours">ANGULAR</label>
      <input id="cours" name="cours" type="text" v-model="personne.cours" />
    </div>
    <div class="form-control">
      <input type="checkbox" id="confirm-terms" name="confirm-terms" />
      <label for="confirm-term">Agree to terms of use?</label>
    </div>

    <button @click="submitForm" class="p-2 rounded bg-blue-400">SUBMIT</button>
  </form>
</template>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: rgb(195, 195, 243);
}

.form-control {
  margin: 0.5rem 0;
}

.form-control.invalid input {
  border-color: red;
}

.form-control.invalid label {
  color: red;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

h1 {
  font-size: 2rem;
  text-align: center;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type="checkbox"],
input[type="radio"] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type="checkbox"] + label,
input[type="radio"] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #6ba6e1;
  background-color: rgb(237, 254, 237);
  color: rgb(11, 10, 10);
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  text-align: center;
  justify-content: space-between;
}

p {
  text-align: center;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #7ca7df;
}
</style>
