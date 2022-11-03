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

    <!-- <h2>
        Tasks List (hasta aqui todo funciona bello!!! )
        Vamos a empezar con el form
    </h2>

    <form class="tasks__new input-group newTask" method="post" @submit.prevent="handleSubmit">
        <input type="text" class="button form-control" v-model="title" placeholder="New task">
        <input type="checkbox" v-model="is_complete">
        <span class="input-group-button">
            <button class="button btn btn-outline-secondary" type="submit"> Add </button>
        </span>
    </form>

    <div>

        <ul class="toDoList">

            <li v-for="task in tasks" class="input toDoLi">

                <div v-if="editId === task.id">
                    <input v-model="newTitle" class="input" />
                    <button @click="disableEditing"> Cancel </button>
                    <button @click="saveEdit(task)"> Save </button>
                </div>

                <div v-else>
                    <span @click="enableEditing(task)">{{task.title}}</span>
                    <button @click="deleteTasks(task)">Delete</button>
                    <p v-if="task.is_complete">está completa</p>
                    <p v-else>está incompleta</p>
                </div>
            </li>
        </ul>

    </div> -->

    <!--                          prueba                          -->

    <!-- <div>
        <h2>Tasks List iniciando form y todo bien</h2>
    </div> -->

    <div>
        <form class="tasks__new input-group newTask" method="post" @submit.prevent="handleSubmit">
            <input type="text" class="button input form-control" v-model="title" placeholder="New task"  
            aria-describedby="button-addon4">
            <div>
                <button class="btn btn-outline-secondary button" type="submit">Add</button>
                    
            </div>
        </form>
    </div>

    <div>
        <ul class="toDoList list-group list-group-flush">
            <li v-for="task in tasks" class="input list-group-item toDoLi">

                <div v-if="editId === task.id" class="input-group">
                    <!-- <div class="input-group-text">
                        <input type="checkbox" v-model="is_complete" aria-label="Checkbox for following text input">
                    </div> -->
                    <input v-model="newTitle" type="text" class="input form-control" placeholder="edit mode"
                        aria-label="Recipient's username with two button addons" aria-describedby="button-addon4">
                    <div class="input-group-append" id="button-addon4">
                        <!-- <input type="checkbox" v-model="is_complete"> -->
                        <button @click="disableEditing" class="btn btn-outline-secondary" type="button">Cancel</button>
                        <button @click="saveEdit(task)" class="btn btn-outline-secondary" type="button">Save</button>
                    </div>
                </div>

                <div v-else>
                    <!-- <div>
                        <input type="checkbox" v-model="is_complete">
                    </div> -->

                    <span @click="enableEditing(task)">{{task.title}}</span>

                    <div>
                        <button @click="deleteTasks(task)" class="btn btn-outline-secondary"
                            type="button">Delete</button>
                    </div>
                    <div>
                        <p v-if="task.is_complete"><del>{{task.title}}</del></p>
                        <p v-else></p>
                    </div>
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
.registro {
    width: 30%;
    height: auto;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
}

.newTask {
    width: 60%;
    margin: 0 auto;
}
.toDoList {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
}

.toDoLi {
    display: flex;
    width: 100%;
    margin: 0 auto;
}

/* 
#task-list {
    width: 100%;
    height: 50%;

    width: 80%;
    height: auto;
    text-align: center;
    justify-content: center;
    margin: 0 auto;


} */

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
