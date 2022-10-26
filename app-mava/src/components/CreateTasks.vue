<script setup>
import { useTaskStore } from "../stores/task"
import { ref } from "vue"
import { useRouter } from 'vue-router'
import { useUserStore } from "../stores/user"
import { storeToRefs } from "pinia"

const router = useRouter()
const title = ref('');
const is_complete = ref(false);
const taskStore = useTaskStore();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const { tasks } = storeToRefs(taskStore);

const handleSubmit = async () => {
    await taskStore.createTasks(title.value, is_complete.value, user._object.user.id,)
    console.log(title.value, is_complete.value)
    title.value = ""
    is_complete.value = false
    await taskStore.fetchTasks();
};

// const eraseTask = async () => {
//     await taskStore.deleteTasks(eliminate_task.value, user._object.user.id,)
//     console.log("Task deleted")
//     eliminate_task.value = true
//     await taskStore.fetchTasks();
};
</script>

<template id="task-list">
    <h1>
        Tasks
    </h1>
    <form class="tasks__new input-group" method="post" @submit.prevent="handleSubmit">
        <input type="text" class="input-group-field" v-model="title" placeholder="New task">
        <input type="checkbox" v-model="is_complete">
        <span class="input-group-button">
            <button class="button" type="submit">
                <i class="fa fa-plus"></i> Add </button>
            <button @click="eraseTask(ìd)">Delete</button>
        </span>
    </form>
    <div>
        <ul>

            <li v-for="task in tasks">{{task.title}}</li>

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
