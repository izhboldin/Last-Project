<template>
    <form>
        <div class="form-group mb-2">
            <label for="email">Email:</label>
            <input type="email" class="form-control" placeholder="Enter your email" v-model="email">
            <span class="text-danger">{{ messageEmail }}</span>
        </div>
        <div class="form-group mb-2">
            <label for="password">Пароль:</label>
            <input type="password" class="form-control" placeholder="Enter your password" v-model="password">
            <span class="text-danger">{{ messagePassword }}</span>

        </div>
        <button type="button" class="btn btn-primary" @click="request(email, password)">Войти</button>
        <button type="button" class="btn btn-secondary ms-3" @click="router.go(-1)">Назад</button>
        <button type="button" class="btn btn-secondary ms-3" @click="qwe()">button</button>
    </form>
</template>


<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router'
import { useAlertsStore } from '@/stores/store.js';
import { validationMixin } from '@/services/mixins/validationMixin';

const router = useRouter()
const { login, getDataUser } = useAlertsStore();

const email = ref('');
const password = ref('');

const messageEmail = ref(null);
const messagePassword = ref(null);

watch(email, newValue => {
    return messageEmail.value = validationMixin.validEmail(newValue)
})
watch(password, newValue => {
    return messagePassword.value = validationMixin.validPassword(newValue)
})

const qwe = () =>{
    getDataUser().then(() => {
        router.push({ name: 'register' })
    })
}


const request = (email, pass) => {
    if (email === '' || pass === '' || messageEmail.value !== null || messagePassword.value !== null) {
        console.log(email === '');
        console.log(pass === '');
        console.log(messageEmail.value !== null);
        console.log(messagePassword.value !== null);
        console.log(messagePassword.value);
        return
    }

    const data = {
        'email': email,
        'password': pass,
    }
    login(data)
}
</script>
<style lang="">
</style>