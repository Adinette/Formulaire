<template>
  <header>
    <div class="head">
        <ul>
       <li> <router-link class="button" to="/hello-word">Sign up to Registration</router-link></li>
        <li><router-link class="button" to="/resultat"> Consult my Registration</router-link></li>
        <li><router-link class="button" to="/acceuil"> Acceuil</router-link></li>
    </ul>
    </div>
    
  </header>
</template>

<script>
export default {
}
</script>

<style>
head{
    border-color: rgb(224, 244, 224);;
}
header{
    background-color:rgb(195, 195, 243);
    padding: 70px;
}
 li{
    text-decoration: none;
    list-style: none;
    padding: 15px;
    font: inherit;
   border: 1px solid #6caded;
   background-color:  white;
   color: rgb(11, 10, 10);
   cursor: pointer;
   padding: 0.75rem 2rem;
   border-radius: 30px;
   text-align: center;
   
}
li:hover,
li:active {
  border-color: #002350;
  background-color: #7ca7df;
} 
ul{
    display: flex;
    justify-content:space-between ;
}
</style>