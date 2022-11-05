

<template>

    <body class="bodyHome">
        <div class="orderHome">
            <h3>Wellcome</h3>
            <h5>Need to remember what you have ToDo ?</h5>
            <!-- <button class="buttonHome btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Create your Tasks list here</button> -->

            <button class="buttonHome btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">
            <RouterLink :to="{name:'login'}" class="link-color">Create your Tasks list here</RouterLink></button>

        </div>
    </body>

</template>

<!-- Estas clases NO son de boostrap -->

<style scoped>
.bodyHome {
    width: 100%;
    height: auto;
    /* padding-top: 1000px; */
}

.link-color {
    text-decoration: none;
    color: #17a2b8;
}

.link-color:hover {
    color: white;
}
.orderHome {
    display: flex;
    margin: 0 auto;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    gap: 10%;
}

h3 {
    text-align: center;
    padding-top: 10%;
    margin: 1% auto;
    width: 100%;
    height: auto;
}

h5 {
    text-align: center;
    margin: 2% auto;
    width: 100%;
    height: auto;
}

.buttonHome {
    text-align: center;
    margin: 0 auto;
    height: auto;
}


/* mobile */

@media (max-width: 400px) {
    .bodyHome {
    width: 100%;
    height: 35rem;
    /* padding: 150px 0; */
}

h5 {
    width: 55%;
    box-sizing: border-box;
    padding-bottom: 5%;

}

h3 {
    width: 55%;
    padding-top: 55%;
    box-sizing: border-box;
    padding-bottom: 5%;

}

}


/* .wellcome {
    color: #7c151554;
    ;
    font-size: 1000%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.container {
    margin: 20px 0 0 20px;
    display: flex;
}

.circle {
    background: #456789;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    margin: 10px;
}

.square {
    background: #456789;
    height: 30px;
    width: 30px;
    margin: 10px;
}

.triangle {
    margin: 10px;
    border-style: solid;
    border-color: transparent transparent #456789 transparent;
    border-width: 0 20px 30px 20px;
}


.circle {
    animation: bounce 0.5s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
}

@keyframes bounce {
    from {
        transform: translate(0, 0);
    }

    to {
        transform: translate(0, 200px);
    }
}

.square {
    animation: fly 2s;
    animation-direction: normal;
    animation-iteration-count: infinite;
}

@keyframes fly {
    0% {
        transform: translate(0, 0);
    }

    100% {
        transform: translate(1200px, 0);
    }
}

.triangle {
    animation: zigzag 2s;
    animation-direction: normal;
    animation-iteration-count: infinite;
}

@keyframes zigzag {
    0% {
        transform: translate(0, 0);
    }

    100% {
        transform: translate(80px, 80px);
    }
} */
</style>