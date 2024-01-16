<template >
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h2 class="mb-4">Форма регистрации</h2>
        <form>
          <div class="form-group mb-2">
            <label for="name">Имя (Логин):</label>
            <input type="text" class="form-control" placeholder="Enter your name" v-model="name">
          </div>
          <div class="form-group mb-2">
            <label for="email">Email:</label>
            <input type="email" class="form-control" placeholder="Enter your email" v-model="email">
          </div>
          <div class="form-group mb-2">
            <label for="password">Пароль:</label>
            <input type="password" class="form-control" placeholder="Enter your password" v-model="password">
          </div>
          <div class="form-group mb-3">
            <label for="confirmPassword">Повторите пароль:</label>
            <input type="password" class="form-control" placeholder="Confirm your password" v-model="password_conf">
          </div>
          <button type="button" class="btn btn-primary" @click="req(name, email, password)">Отправить</button>
          <button type="button" class="btn btn-secondary ms-3" @click="router.go(-1)">Назад</button>
          <span class="ms-3">Если вы уже зарегистрированны, то вы можете <router-link
              to="/register">войти</router-link></span>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { useAlertsStore } from '@/stores/store.js';

const { getDate } = useAlertsStore();
const router = useRouter()
const name = ref('');
const email = ref('');
const password = ref('');
const password_conf = ref('');

const req = (name, email, password) => {
  const data = {
    'name': name,
    'email': email,
    'password': password
  }
  getDate(data);
}

</script>
<style lang="">
    
</style>