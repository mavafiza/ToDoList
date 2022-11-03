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
    <div class="about">
        <h1 class="display-5">The ToDo or Not ToDo List</h1>
        <h1 class="display-5">ToDo ok ok ok</h1>

    </div>
    <nav>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <div v-if="user">
                <li class="nav-item">
                    <RouterLink :to="{name:'home'}" class="nav-link text-info">Home</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink :to="{name:'home'}" v-on:click="logout" class="nav-link text-info">LogOut todo ok
                    </RouterLink>
                </li>
            </div>
            <div v-else>
                <li class="nav-item">
                    <RouterLink :to="{name:'home'}" class="nav-link text-info">Home</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink :to="{name:'register'}" class="nav-link text-info">SignUp</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink :to="{name:'login'}" class="nav-link text-info">LogIn</RouterLink>
                </li>
            </div>

        </ul>

        <!-- <ul id="example-2">
            <li v-for="(item, index) in items">
                {{ parentMessage }} - {{ index }} - {{ item.message }}
            </li>
        </ul> -->

        <!-- <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
            <div class="tab-pane fade" id="logout" role="tabpanel" aria-labelledby="contact-tab">
            </div>

        </div> -->

    </nav>

</template>

<!-- Estas clases SI son de boostrap -->

<style scoped>
h1 {
    color: #343A40;
    text-align: center;
    padding-top: 3%;
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