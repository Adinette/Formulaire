<template>
  <Dashbord />
</template>

<script>
/**
 * Decidement, je constate que tu est retourner a option API,
 * pas grave, tu ne me diras pas que je ne t'ai pas prevenue
 * poursuivons avec dans ce cas.
 */
import Dashbord from "./layout/Dashbord.vue";
export default {

  components: {
    Dashbord
  }
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
