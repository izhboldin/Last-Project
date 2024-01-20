import { defineStore } from 'pinia';
import { computed, ref } from 'vue'
import axiosInstance from '@/services/axios.js';
import { useRouter } from 'vue-router'
import Cookies from 'js-cookie';


export const useAlertsStore = defineStore('alerts', () => {
    const user = ref(null);
    const token = ref(null);

    const getUser = computed(() => user.value)
    const getToken = computed(() => token.value)

    const register = async (date) => {
        try {
            let result = await axiosInstance.post('/api/register', date);

            console.log(result);
            if (result.data.user && result.data.token) {
                user.value = result.data.user;
                token.value = result.data.token;
                Cookies.set('token', token.value);
            }
        } catch (error) {
            console.error("Произошла ошибка при выполнении запроса:", error);
        }
    }

    const login = async (date) => {
        try {
            let result = await axiosInstance.post('/api/login', date);

            // if(result.data.user && result.data.token){
            //   user.value = result.data.user;
            //   token.value = result.data.token;
            // }
            console.log(result);
        } catch (error) {
            console.error("Произошла ошибка при выполнении запроса:", error);
        }
    }
    const getDataUser = async () => {
        try {
            if (!Cookies.get('token')) {
                return
            }
            if (user === null) {
                return
            }
            token.value = Cookies.get('token');
            let result = await axiosInstance.get('/api/user',
                {
                    headers: {
                        'Authorization': `Bearer ${token.value}`,
                    },
                });
            user.value = result.data;
            // if(result.data.user && result.data.token){
            //   user.value = result.data.user;
            //   token.value = result.data.token;
            // }
            console.log(result.data);
            console.log(user.value);
            // const router = useRouter();
        } catch (error) {
            console.error("Произошла ошибка при выполнении запроса:", error);
        }
    }

    return {
        register,
        login,
        getUser,
        getToken,
        getDataUser
    }
})