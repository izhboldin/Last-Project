<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h2 class="mb-4">Форма авторизации</h2>
                <form>
                    <div class="form-group mb-2">
                        <label for="email">Email:</label>
                        <input type="email" class="form-control" placeholder="Enter your email" v-model="email">
                    </div>
                    <div class="form-group mb-2">
                        <label for="password">Пароль:</label>
                        <input type="password" class="form-control" placeholder="Enter your password" v-model="password">
                    </div>
                    <button type="submit" class="btn btn-primary">Войти</button>
                    <button type="button" class="btn btn-secondary ms-3" @click="router.go(-1)">Назад</button>
                    <span class="ms-3">Если у вас нет аккаунта, то вы можете <router-link to="/login">зарегистрироваться</router-link>
                    </span>
                </form>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useRouter } from 'vue-router'
import { useAlertsStore } from '@/stores/store.js';

const router = useRouter()

</script>
<style lang="">
</style>