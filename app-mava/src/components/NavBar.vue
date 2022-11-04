<script setup>
import { useRouter } from 'vue-router'

import { useUserStore } from '@/stores/user';
import { storeToRefs } from "pinia"

const router = useRouter()
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const logout = () => {
    user.value = null
    router.push({ name: 'home' })
};

</script>

<template>
    <div class="fixed-top container-color">
        <div class="about">
            <h1 class="display-5">The ToDo or Not ToDo List</h1>
        </div>
        <nav>
            <ul class="nav nav-tabs fixed" id="myTab" role="tablist">
                <div v-if="user" class="nav-order">
                    <!-- <li class="nav-item">
                        <RouterLink :to="{name:'home'}" class="nav-link grey-text">Home</RouterLink>
                    </li> -->
                    <li class="nav-item">
                        <RouterLink :to="{name:'home'}" v-on:click="logout" class="nav-link grey-text">LogOut
                        </RouterLink>
                    </li>
                </div>
                <div v-else class="nav-order">
                    <li class="nav-item">
                        <RouterLink :to="{name:'home'}" class="nav-link grey-text">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink :to="{name:'register'}" class="nav-link grey-text">SignUp</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink :to="{name:'login'}" class="nav-link grey-text">LogIn</RouterLink>
                    </li>
                </div>

            </ul>
        </nav>
    </div>
</template>

<!-- Estas clases SI son de boostrap -->
<!-- color info #17a2b8 -->
<style scoped>
h1 {
    /* color: #343A40; */
    color: white;
    text-align: center;
    padding-top: 1%;
}

.grey-text {
    /* color: #343A40; */
    color: white;
}

.container-color {
    background-color: #17a2b8;
}
.nav-order {
    display: flex
}

nav ul li {
    font-size: 120%;
    font-weight: 450;

}

@media (min-width: 1024px) {

    /* .about {
    min-height: 10vh;
    display: flex;
    align-items: center;
    gap: 10px;
    } */


}
</style>