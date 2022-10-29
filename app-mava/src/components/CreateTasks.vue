<script setup>
import { useTaskStore } from "../stores/task"
import { ref } from "vue"
import { useRouter } from 'vue-router'
import { useUserStore } from "../stores/user"
import { storeToRefs } from "pinia"

const router = useRouter()
const title = ref('');
const is_complete = ref(false);
const newTitle = ref('')
const editing = ref(false)

const taskStore = useTaskStore();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const { tasks } = storeToRefs(taskStore);
console.log(tasks);

const handleSubmit = async () => {
    await taskStore.createTasks(title.value, is_complete.value, user._object.user.id,)
    console.log(title.value, is_complete.value)
    title.value = ""
    is_complete.value = false
    await taskStore.fetchTasks();
};

const fetchTasks = async () => {
    await taskStore.fetchTasks();
}
fetchTasks();

const deleteTasks = async (task) => {
    await taskStore.deleteTasks(task.id)
    console.log("Task deleted")
    await taskStore.fetchTasks();
};

const enableEditing = (task) => {
    newTitle.value = task.title
    console.log("task", task)
    console.log("newtitle", newTitle.value)
    console.log("id", task.id)
    editing.value = true
};

const disableEditing = () => {
    newTitle.value = ''
    editing.value = false
};

const saveEdit = async (task) => {
    task.title = newTitle.value
    await taskStore.updateTasks(newTitle.value.toString(), task.id, task.is_complete)
    editing.value = false
    console.log("Task edited")
    await taskStore.fetchTasks();
};
</script>

<template id="task-list">
    <h1>
        Tasks
    </h1>
    <form class="tasks__new input-group" method="post" @submit.prevent="handleSubmit">
        <input type="text" class="button" v-model="title" placeholder="New task">
        <input type="checkbox" v-model="is_complete">
        <span class="input-group-button">
            <button class="button" type="submit">
                <i class="btn btn-outline-secondary"></i> Add </button>

        </span>
    </form>
    <div>

        <ul>

            <li v-for="task in tasks" class="input">
                <div v-if="!editing">
                    <span @click="enableEditing(task)">{{task.title}}</span>
                    <button @click="deleteTasks(task)">Delete</button>
                    <p v-if="task.is_complete">esta completa</p>
                    <p v-else>esta incompleta</p>

                </div>
                <div v-if="editing">
                    <input v-model="newTitle" class="input" />
                    <button @click="disableEditing"> Cancel </button>
                    <button @click="saveEdit(task)"> Save </button>
                </div>
            </li>


        </ul>


        <!-- <ul>
            <span v-for="task in tasks">{{task.title}}
                <p v-if="task.is_complete">esta completa</p>
                <p v-else>esta incompleta</p>
                <button @click="deleteTasks(task)">Delete</button>
                <button @input="editTask(title)">Edit</button>
            </span>
        </ul> -->

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
li {
    color: #ffffff;
    text-align: left;
    list-style: none;
}

span {
    color: #ffffff;
    text-align: left;
    list-style: none;
}

input {
    color: red;
    background-color: rgba(black, .1);
    border-bottom: #efeae3;

}

body {
    background-color: #abc;
}

*,
h1 {
    font-family: 'Nunito', sans-serif;
    color: #ffffff1e;
}

button {
    background-color: rgba(0, 0, 0, 0);
    width: 200px;
    padding: 10px;
    border-radius: 10px;
    border: #f3f1ee2a solid 5px;
    color: #efeae3;
    cursor: pointer;
    user-select: none;
    transition: .25s ease-in-out all;
}

.button {

    text-align: center;
    border-radius: 5px;
    width: auto;
    height: 35px;
}

/* div:hover {
    background-color: #ff9800;
    color: white;
} */

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
