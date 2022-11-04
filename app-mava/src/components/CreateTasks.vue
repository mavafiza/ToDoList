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
const completeId = ref(false)


const taskStore = useTaskStore();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const { tasks } = storeToRefs(taskStore);

const handleSubmit = async () => {
    await taskStore.createTasks(title.value, is_complete.value, user._object.user.id,)
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
    await taskStore.fetchTasks();
};

const enableEditing = (task) => {
    newTitle.value = task.title
    editId.value = task.id
};

const disableEditing = () => {
    newTitle.value = ''
    editId.value = null
};

const saveEdit = async (task) => {
    task.title = newTitle.value
    await taskStore.updateTitle(newTitle.value, task.id)
    editId.value = null
    await taskStore.fetchTasks();
};

const changeIsComplete = async (task) => {
    task.is_complete = !task.is_complete
        await taskStore.updateIsComplete(task.is_complete, task.id)
        await taskStore.fetchTasks();

};

</script>

<template id="task-list">

    <!--                          prueba                          -->

    <div>
        <div class="newTask">
            <h4>Tasks</h4>
        </div>

        <div>
            <form class="tasks__new input-group newTask" method="post" @submit.prevent="handleSubmit">
                <input type="text" class="button input form-control border border-5" v-model="title"
                    placeholder="New task" aria-describedby="button-addon4">
                <div>
                    <button class="btn btn-outline-info button me-sm-3 fw-bold" type="submit">Add</button>
                      
                </div>
            </form>
        </div>

        <div class="newTask">
            <ul class="toDoList list-group list-group-flush">
                <li v-for="task in tasks" class="input list-group-item toDoLi">

                    <div v-if="editId === task.id" class="input-group">

                        <input v-model="newTitle" type="text" class="input form-control" placeholder="edit mode"
                            aria-label="Recipient's username with two button addons" aria-describedby="button-addon4">
                        <div class="input-group-append" id="button-addon4">
                            <button @click="disableEditing" class="btn btn-outline-secondary"
                                type="button">Cancel</button>
                            <button @click="saveEdit(task)" class="btn btn-outline-secondary"
                                type="button">Save</button>
                        </div>
                    </div>

                    <div v-else class="order">
                        <div class="input-group">
                            <input @click="changeIsComplete(task)" type="checkbox" v-model="task.is_complete">
                        </div>

                        <div>
                            <span v-if="task.is_complete" @click="enableEditing(task)"><del>{{task.title}}</del></span>
                            <span v-else @click="enableEditing(task)">{{task.title}}</span>
                        </div>
                        <div>
                            <button @click="deleteTasks(task)" class="btn btn-outline-secondary"
                                type="button">Delete</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>

</template>


<style scoped>
.registro {
    width: 30%;
    height: auto;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
}

.order {
    display: flex;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
}

.newTask {
    width: 40%;
    margin: 0 auto;
}

.toDoList {
    display: flex;
    flex-direction: column;
    width: 100%;
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
h4 {
    text-align: left;
    margin-top: 15%;
    margin-bottom: 5%;
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
