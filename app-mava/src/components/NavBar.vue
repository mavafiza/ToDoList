<script>
// import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="about">
        <h1>MavApp</h1>
    </div>
    <nav>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
            <RouterLink :to="{name:'home'}" class="nav-link">Home</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink :to="{name:'register'}" class="nav-link">Register</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink :to="{name:'login'}" class="nav-link">Login</RouterLink>
        </li>
    </ul>
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
    </div>
</nav>



</template>

<!-- Estas clases SI son de boostrap -->

<style>

@media (min-width: 1024px) {

ul li {
    color: #b3c4ce;
}

.about {
    min-height: 10vh;
    display: flex;
    align-items: center;
    gap: 10px;
    }

button {
    height: 50px;
    border-color: rgb(44, 219, 10);
    }
}
</style>