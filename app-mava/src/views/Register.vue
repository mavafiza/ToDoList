<script setup>
import { useUserStore } from "../stores/user"
import { ref } from "vue"
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('');
const password = ref('');
const phone = ref('');
const userStore = useUserStore();
const handleSubmit = async () => {
    await userStore.signUp(email.value, password.value, phone.value)
    console.log(email.value, password.value)
    router.push({ path: '/login' });
};

</script>

<template>

    <div class="registro">
        <h4 class="texto">SignUp</h4>
        <form class="well form-horizontal" method="post" @submit.prevent="handleSubmit" id="registration_form">
            <fieldset>

                <div class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                        <input name="email" maxlength="30" placeholder="E-Mail" v-model="email" class="form-control"
                            type="text">
                    </div>
                </div>

                <div class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                        <input name="Phone-Number" maxlength="15" placeholder="Phone-Number" v-model="phone"
                            class="form-control" type="text">
                    </div>
                </div>

                <div class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                        <input name="password" maxlength="16" placeholder="Password" v-model="password"
                            class="form-control" type="password">
                    </div>
                </div>

                <div class="alert alert-success" role="alert" style=" display: none;" id="registration_success">
                    Registration Successfully Completed.</div>

                <div class="form-group">
                    <label class=" control-label"></label>
                    <!-- <button type="submit" class="btn btn-primary login-button Registro">Register</button> -->
                    <button class="buttonHome btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" type="submit" title="Registra tu cuenta">SignUp</button>

                </div>
            </fieldset>
            <RouterLink :to="{name:'login'}" class="nav-link grey-text">LogIn ?</RouterLink>

        </form>
    </div>



</template>

<style scoped>
.grey-text {

    color: rgb(87, 84, 84);
    text-decoration: underline;
    text-decoration: underline;
    /* margin-top: -15px; */
}
.texto {
    padding: 5%;
}
.registro {
    width: 30%;
    height: auto;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
    padding-top: 150px;

}

@media (max-width: 400px) {
.registro {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 37rem;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
    
}

form {
    width: 90%;
}

a {
    padding: 0;
    font-size: x-large;
}
.texto {
    padding-top: 30%;
    text-align: center;
    width: 55%;
    height: auto;
    box-sizing: border-box;
}


/* .bodyHome {
    width: 100%;
    height: 35rem;
    padding: 150px 0;
} */

/* h5 {
    width: 55%;
    box-sizing: border-box;
    padding-bottom: 5%;

} */



}

</style>