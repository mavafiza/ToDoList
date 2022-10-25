// /store/task.js

import { defineStore } from 'pinia';
import { supabase } from '../supabase';

export const useTaskStore = defineStore('tasks', {
    state: () => ({
        tasks: null
    }),

    actions: {
        async fetchTasks() {
            const { data: tasks } = await supabase
                .from('tasks')
                .select('*')
                .order('id', { ascending: false });
            this.tasks = tasks;
        },
        async createTasks(title, is_complete) {
            const { data, error } = await supabase
                .from('tasks')
                .insert([
                    { 
                        tittle: title, 
                        is_complete: is_complete,
                    },
                ])
        },
    }
});

// tarea 

