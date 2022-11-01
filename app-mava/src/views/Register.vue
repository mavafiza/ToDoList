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

    <!-- <p class="texto">Registro</p>
    <div class="Registro">
        <form method="post" @submit.prevent="handleSubmit" action="https://getform.org/f/70415a77-d632-4883-bf07-2e15d3f557da">
            <span class="fontawesome-envelope-alt"></span>
            <input type="text" id="email" required placeholder="Correo" v-model="email" autocomplete="off">
            <span class="fontawesome-lock"></span>
            <input type="password" name="password" id="password" required placeholder="Contraseña" v-model="password" autocomplete="off">
            <input type="submit" value="Registrar" title="Registra tu cuenta">
        </form>
    </div> -->

    <div class="Registro">
        <h4 class="texto">Register</h4>
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
                    <button class="w-100 btn btn-lg btn-outline-secondary" type="submit" title="Registra tu cuenta">Register</button>


                    
                </div>
            </fieldset>
        </form>
    </div>

    <!-- <div class="container">

<form class="well form-horizontal" action="" method="post" id="registration_form">
    <fieldset>
        <legend>Register</legend>
        <div class="form-group">
            <label class="col-md-4 control-label">Name</label>
            <div class="col-md-4 ">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                    <input name="name" maxlength="30" placeholder="Name" class="form-control" type="text" onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)" >
                </div>
            </div>
        </div>
    
        <div class="form-group">
            <label class="col-md-4 control-label">E-Mail</label>
            <div class="col-md-4 ">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                    <input name="email" maxlength="30" placeholder="E-Mail" class="form-control" type="text">
                </div>
            </div>
        </div>

        <div class="form-group">
            <label class="col-md-4 control-label">Phone-Number</label>
            <div class="col-md-4 ">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                    <input name="Phone-Number" maxlength="15" placeholder="Phone-Number" class="form-control" type="text">
                </div>
            </div>
        </div>

        <div class="form-group">
            <label class="col-md-4 control-label">Password</label>
            <div class="col-md-4 ">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                    <input name="password" maxlength="16" placeholder="**********" class="form-control" type="password">
                </div>
            </div>
        </div>

        <div class="form-group">
            <label class="col-md-4 control-label">Confirm Password</label>
            <div class="col-md-4 ">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                    <input name="confirmpassword" maxlength="16" placeholder="**********" class="form-control" type="password">
                </div>
            </div>
        </div>       
        
        <div class="alert alert-success" role="alert" style=" display: none;" id="registration_success">Registration Successfully Completed.</div>
            
        <div class="form-group">
            <label class="col-md-4 control-label"></label>
            <div class="col-md-4">
                <button type="submit" class="btn btn-primary login-button">Register</button>
            </div>
        </div>
    </fieldset>
</form>
</div> -->

</template>

<style>
.Registro {
    width: 30%;
    height: auto;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
}
</style>