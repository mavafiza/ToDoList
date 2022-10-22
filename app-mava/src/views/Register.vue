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
        <p class="texto">Registro</p>
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


                <!-- <div class="form-group">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                    <input name="confirmpassword" maxlength="16" placeholder="Confirm Password" class="form-control" type="password">
                </div>
        </div>        -->

                <div class="alert alert-success" role="alert" style=" display: none;" id="registration_success">
                    Registration Successfully Completed.</div>

                <div class="form-group">
                    <label class=" control-label"></label>
                    <!-- <button type="submit" class="btn btn-primary login-button Registro">Register</button> -->
                    <button type="submit" title="Registra tu cuenta">Register</button>

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
body {
    background: #1b1e24;
    background-image: -webkit-linear-gradient(right, #1b1e24, #1b1e24 50%, #1b1e24);
    background-image: -moz-linear-gradient(right, #1b1e24, #1b1e24 50%, #1b1e24);
    background-image: -o-linear-gradient(right, #1b1e24, #1b1e24 50%, #1b1e24);
    background-image: -ms-linear-gradient(right, #1b1e24, #1b1e24 50%, #1b1e24);
    background-image: linear-gradient(to left, #1b1e24, #1b1e24 50%, #1b1e24);
    text-align: center;
    font-family: Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5em;
}

[class*="fontawesome-"]:before {
    font-family: 'FontAwesome', sans-serif;
}

input {
    font-size: 1em;
    line-height: 1.5em;
    margin: 0;
    padding: 0;
    --webkit-appearance: none;
}

button {
    font-size: 1em;
    line-height: 1.5em;
    margin: 0;
    padding: 0;
    --webkit-appearance: none;
}

.Registro {
    margin: 50px auto;
    width: 242px;
}

.form-group {
    margin-bottom: 0;
}

.Registro span {
    color: hsl(5, 50%, 57%);
    display: block;
    height: 48px;
    line-height: 48px;
    position: absolute;
    text-align: center;
    width: 36px;
}

.Registro input {
    border: none;
    height: 48px;
    outline: none;
}

.Registro input[type="text"] {
    background-color: #fff;
    border-top: 2px solid #2c90c6;
    border-right: 1px solid #000;
    border-left: 1px solid #000;
    border-radius: 5px 5px 0 0;
    -moz-border-radius: 5px 5px 0 0;
    -webkit-border-radius: 5px 5px 0 0;
    -o-border-radius: 5px 5px 0 0;
    -ms-border-radius: 5px 5px 0 0;
    color: #363636;
    padding-left: 36px;
    width: 204px;
}

.Registro input[type="password"] {
    background-color: #fff;
    border-top: 2px solid #2c90c6;
    border-right: 1px solid #000;
    border-bottom: 2px solid #2c90c6;
    border-left: 1px solid #000;
    border-radius: 0 0 5px 5px;
    -moz-border-radius: 0 0 5px 5px;
    -webkit-border-radius: 0 0 5px 5px;
    -o-border-radius: 0 0 5px 5px;
    -ms-border-radius: 0 0 5px 5px;
    color: #363636;
    margin-bottom: 20px;
    padding-left: 36px;
    width: 204px;
}

.Registro input[type="submit"] {
    background-color: #2c90c6;
    border: 1px solid #2c90c6;
    border-radius: 15px;
    -moz-border-radius: 15px;
    -webkit-border-radius: 15px;
    -ms-border-radius: 15px;
    -o-border-radius: 15px;
    color: #fff;
    font-weight: bold;
    line-height: 48px;
    text-align: center;
    text-transform: uppercase;
    width: 240px;
}

.Registro input[type="submit"]:hover {
    background-color: #2c70c6;
    box-shadow: 2px 2px 20px #2c90c6, #fff 0 -1px 2px;
}

.texto {
    color: #2c90c6;
    font-size: 40px;
    margin: 2% auto;
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-shadow: 1px 2px 1px rgba(0, 0, 0, .5);
    padding-top: 40px;
}

p:hover {
    text-shadow: 2px 2px 20px #2c90c6, #fff 0 -1px 2px;
}


@media (min-width: 1024px) {
    .formIn {
        display: grid;
        border-color: black solid;
        border-width: 3px;
    }

    .about {
        min-height: 10vh;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    button {
        border-radius: 10px;
        width: 80px;
        height: 50px;
        border-color: rgb(44, 219, 10);
    }
}
</style>
