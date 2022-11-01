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
const editId = ref(null)

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
    editId.value = task.id
};

const disableEditing = () => {
    newTitle.value = ''
    editId.value = null
};

const saveEdit = async (task) => {
    task.title = newTitle.value
    await taskStore.updateTasks(newTitle.value.toString(), task.id, task.is_complete)
    editId.value = null
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
                <div v-if="editId === task.id">
                    <input v-model="newTitle" class="input" />
                    <button @click="disableEditing"> Cancel </button>
                    <button @click="saveEdit(task)"> Save </button>


                </div>
                <div v-else>
                    <span @click="enableEditing(task)">{{task.title}}</span>
                    <button @click="deleteTasks(task)">Delete</button>
                    <p v-if="task.is_complete">esta completa</p>
                    <p v-else>esta incompleta</p>
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


<style scoped>
#task-list {
    width: 100%;
    height: 50%;

    width: 30%;
    height: auto;
    text-align: center;
    justify-content: center;
    margin: 0 auto;


}
li {
    color: #343A40;
    text-align: left;
    list-style: none;
}

span {
    color: #343A40;
    text-align: left;
    list-style: none;
}

input {
    color: #343A40;
    background-color: rgba(black, .1);
    border-bottom: #efeae3;

}

body {
    margin: none;
    background-color: #abc;
}

h1 {
    font-family: 'Nunito', sans-serif;
    color: #ffffff1e;
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
