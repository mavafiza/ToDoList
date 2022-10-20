<template>
  <section>
    <NavBar />
    <router-view class="app-main" />
    <!-- your routes will load inside of these tags -->
  </section>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
// import { useRouter } from 'vue-router' //dd Marc lo boró
import { useUserStore } from './stores/user.js'

// const router = useRouter()  //dd Marc lo borró
const userStore = useUserStore()
const { user } = storeToRefs(userStore)

onMounted(async () => { //video Marc
  console.log("Bienvenido a mi App") // lo coloqué con Cristian
  try {
    await userStore.fetchUser() // here we call fetch user
    if (!user.value) {
      console.log('aun no estas logueado'); // video Marc

      await userStore.signUp("mavafiza@gmail.com", "password"); // dd aqui es donde se introduce los datos en la tabla de Supabase 
      //dd en la linea 25, Marc dijo que dentro de los parentesis, es donde entraran los datos de los usuarios del ToDoList para registrarse en Supabase

      console.log(user.value);     // video Marc: él elimino este console.log  
      router.push({ path: '/about' }); //originalmente es /auth , Cristian me dijo que usara /about para probar, pero Marc no tiene esto
      // redirect them to logout if the user is not there
    } else {
      console.log('estás logeado, ya eres de los nuestros!'); //video Marc
      console.log(user.value);       // continue to dashboard
      router.push({ path: '/' }); // lo coloqué con Cristian, aunque Marc no tiene esta linea
    }
  } catch (e) {
    // console.log(e)  // video Marc
  }
})
</script> 