<template>
  <div>
    <h1>Result of Registration</h1>
    <h2>Username: {{ userName }}</h2>
    <h2>Firstname: {{ firstName }}</h2>
    <h2>sexe: {{ sexe }}</h2>
    <h2>Email:{{ email }}</h2>
    <h2>Date:{{ date }}</h2>
    <h2>Contact:{{ contact }}</h2>
    <h2>Cours:{{ cours }}</h2>
  </div>
</template>

<script >
export default {
 
  name: 'Resultat',
  props: {
    user_name: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    sexe: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    cours: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
