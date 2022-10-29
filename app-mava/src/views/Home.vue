

<template>
<div class="container">
    <div class="circle"></div>
    <div class="square"></div>
    <div class="triangle"></div>
</div>

<h1 class="wellcome">Wellcome to the Miracle App</h1>


</template>

<style scoped>
.wellcome {
    color: #ffffff;
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
    from { transform: translate(0, 0);     }
    to   { transform: translate(0, 200px); }
}

.square{
    animation: fly 2s;
    animation-direction: normal;
    animation-iteration-count: infinite;
}

@keyframes fly {
    0% {
        transform: translate(0, 0);    
    }
    100%{
        transform: translate(1200px, 0);
    }
}

.triangle{
    animation: zigzag 2s ;
    animation-direction: normal;
    animation-iteration-count: infinite;
}

@keyframes zigzag {
    0% {
        transform: translate(0, 0);    
    }
    /* 5% {
        transform: translate(10px, 10px);
    }

    10% {
        transform: translate(20px, 25px);
    }

    18% {
        transform: translate(35px, 50px);
    }

    30% {
        transform: translate(20px, 50px);
    }

    50% {
        transform: translate(20px, 50px);
    }

    75% {
        transform: translate(20px, 50px);
    } */

    100% {
        transform: translate(80px, 80px);
    }
}


</style>