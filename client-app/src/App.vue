<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <UserData msg="Welcome to Your Vue.js App"/>
</template>

<script>
import UserData from './components/UserData.vue'

export default {
  name: 'App',
  components: {
    UserData
  }
}
</script>

<style>
@font-face {
    font-family: "Merienda";
    src: local("Merienda"), url(https://fonts.googleapis.com/css2?family=Merienda&display=swap) format("truetype");
}
html{
  background-color: #d4e3ca;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  background-image: url('./assets/backgfound-img-blure.jpg');
  background-size: contain;
}
</style>
