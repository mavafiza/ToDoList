

<template>

    <body class="bodyHome">

        <div class="input-group">
            <div class="input-group-text">
                    <input type="checkbox" aria-label="Checkbox for following text input">
                </div>
            <input type="text" class="form-control" placeholder="Recipient's username"
                aria-label="Recipient's username with two button addons" aria-describedby="button-addon4">
            <div class="input-group-append" id="button-addon4">
                <button class="btn btn-outline-secondary" type="button">Button</button>
                <button class="btn btn-outline-secondary" type="button">Button</button>
            </div>
        </div>

    </body>

</template>

<!-- Estas clases NO son de boostrap -->

<style scoped>
.bodyHome {
    width: 100%;
    height: 326px;
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