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
        async createTasks(title, is_complete, user_id) {
            const { data, error } = await supabase
                .from('tasks')
                .insert([
                    {
                        title: title,
                        is_complete: is_complete,
                        user_id: user_id,
                    },
                ])
        },
        async deleteTasks(task_id) {
            const { data, error } = await supabase
                .from('tasks')
                .delete()
                .match({id: task_id 
                    }
                );
        },
        async updateTitle(title, task_id) {
            const { data, error } = await supabase
                .from('tasks')
                .update({ title: title})
                .match({  id: task_id })
        },
        async updateIsComplete(is_complete, task_id) {
            const { data, error } = await supabase
                .from('tasks')
                .update({ is_complete:is_complete })
                .match({  id: task_id })
        },

    }
});
