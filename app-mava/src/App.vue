<template>
  <section>
    <NavBar />
    <router-view class="app-main" />
    <Footer />
    <!-- your routes will load inside of these tags -->
  </section>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

// import { onMounted } from 'vue'
// import { storeToRefs } from 'pinia'
// import { useRouter } from 'vue-router' //dd Marc lo boró
// import { useUserStore } from './stores/user.js'
// import Footer from './components/Footer.vue'
// const router = useRouter()  //dd Marc lo borró
// const userStore = useUserStore()
// const { user } = storeToRefs(userStore)

// onMounted(async () => { //video Marc
//   console.log("Bienvenido a mi App") // lo coloqué con Cristian
//   try {
//     await userStore.fetchUser() // here we call fetch user
//     if (!user.value) {
//       console.log('aun no estas logueado'); // video Marc

//       console.log(user.value);     // video Marc: él elimino este console.log  
//       router.push({ path: '/register' }); //originalmente es /auth , Cristian me dijo que usara /about para probar, pero Marc no tiene esto
//       // redirect them to logout if the user is not there
//     } else {
//       console.log('estás logeado, ya eres de los nuestros!'); //video Marc
//       console.log(user.value);       // continue to dashboard
//       router.push({ path: '/' }); // lo coloqué con Cristian, aunque Marc no tiene esta linea
//     }
//   } catch (e) {
//     // console.log(e)  // video Marc
//   }
// });
</script> 