<script setup>
import { useUserStore } from "../stores/user"
import { ref } from "vue"
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('');
const password = ref('');
const userStore = useUserStore();
const handleSubmit = async () => {
    await userStore.signIn(email.value, password.value)
    console.log(email.value, password.value)
    router.push({ path: '/create-tasks' }); 
};

</script>

<template>

    <div class="registro">
        <h4 class="texto">LogIn</h4>
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
                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                        <input name="password" maxlength="16" placeholder="Password" v-model="password"
                            class="form-control" type="password">
                    </div>
                </div>

                <div class="form-group">
                    <label class=" control-label"></label>
                    <button class="w-100 btn btn-lg btn-outline-secondary" type="submit" title="Enter to your Account">LogIn</button>
                </div>
            </fieldset>
        </form>
    </div>

</template>

<style>
.texto {
    padding: 5%;
}

.registro {
    width: 30%;
    height: auto;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
    padding-bottom: 2%;
}

</style>
