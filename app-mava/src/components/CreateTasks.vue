<script setup>
import { useTaskStore } from "../stores/task"
import { ref } from "vue"
import { useRouter } from 'vue-router'
// import { title } from "process";

const router = useRouter()
const title = ref('');
const is_complete = ref('');
const taskStore = useTaskStore();
const tasks = []
const addTask = () => {
    if (newTask) {
        this.tasks.push({
            title: this.newTask,
            completed: false
        });
        this.newTask = '';
    } else {
        console.log("error")
    }
};
const handleSubmit = async () => {
    await taskStore.createTasks(title.value, is_complete.value)
    console.log(title.value, is_complete.value)
    router.push({ path: '/CreateTasks' });
};
</script>

<template id="task-list">
    <h1>
        Tasks
    </h1>
    <div class="tasks__new input-group" method="post" @submit.prevent="handleSubmit">
        <input type="text" class="input-group-field" v-model="newTask" placeholder="New task">
        <span class="input-group-button">
            <!-- crear la funcion para add tasks que añada el input a la lista ul -->
            <button @click="addTask" class="button">
                <i class="fa fa-plus"></i> Add </button>
        </span>
    </div>
    <div>
        <ul>
            <!-- v-if y v-for -->
            <li v-for="task in tasks" v-if="!tasks.is_complete">{{title}}</li>

        </ul>

    </div>



    <!-- <div class="tasks__clear button-group pull-right">
            <button class="button warning small"
                @click="clearCompleted"
            >
            <i class="fa fa-check"></i> Clear Completed
            </button>
            <button class="button alert small"
                @click="clearAll"
            >
            <i class="fa fa-trash"></i> Clear All
            </button>
        </div> -->


</template>


<style>
body {
    background-color: #abc;
}

*,
h1,
button {
    font-family: 'Nunito', sans-serif;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}

.tasks {
    width: 100%;
    max-width: 45rem;
    padding: 1em;
    margin: 1em auto;
    overflow: auto;
    background-color: white;
    box-shadow: 0px .25rem 1rem rgba(black, .25);
}

.tasks__list {
    clear: both;
}

.tasks__item {
    margin-bottom: .5em;
    position: relative;
}

.tasks__item__toggle {
    cursor: pointer;
    width: 100%;
    text-align: left;
    padding: .85em 2.25em .85em 1em;
    background-color: rgba(black, .05);
    border: 1px solid rgba(black, .1);
}

.tasks__item__toggle:hover {
    background-color: rgba(black, .1);
    border-color: rgba(black, .15);
}

.tasks__item__toggle--completed {
    text-decoration: line-through;
    background-color: rgba(green, .15);
    border-color: rgba(green, .2);
}

.tasks__item__toggle--completed:hover {
    background-color: rgba(green, .25);
    border-color: rgba(green, .3);
}

.tasks__item__remove {
    position: absolute;
    height: 100%;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
}

.tasks__item__remove i {
    vertical-align: middle;
}
</style>
