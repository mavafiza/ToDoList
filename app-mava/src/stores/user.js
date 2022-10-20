// /store/user.js

import { defineStore } from 'pinia';
import { supabase } from '../supabase';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
    }),

    actions: {
        async fetchUser() {
            const user = await supabase.auth.user();
            // console.log(user) //dd esto lo borro Marc
            if (user) {  //dd esto lo agrego Marc   
                this.user = user
            }
        },
        async signUp(email, password) {
            const { user, error } = await supabase.auth.signUp({
                email: email,
                password: password,
            });
            console.log(user, error) //dd esto es diferente
            if (error) throw error;
        },
        async signIn(email, password) {
            const { user, error } = await supabase.auth.signIn({
                email: email,
                password: password,
            });
            console.log("iniciando",user, error) //dd esto es diferente
            if (error) throw error;
            if (user) this.user = user;
        },
    }, //dd esto lo agrego Marc

    persist: {
        enabled: true,
        strategies: [
            {
                key: 'user',
                storage: localStorage
            }
        ]
    },
});