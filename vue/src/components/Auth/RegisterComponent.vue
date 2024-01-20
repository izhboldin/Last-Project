<template >
  <form>
    <div class="form-group mb-2">
      <label for="name">Имя (Логин):</label>
      <input type="text" class="form-control" placeholder="Enter your name" v-model="name">
      <span class="text-danger">{{ messageName }}</span>
    </div>
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
    <div class="form-group mb-3">
      <label for="confirmPassword">Повторите пароль:</label>
      <input type="password" class="form-control" placeholder="Confirm your password" v-model="passwordConf">
      <span class="text-danger">{{ messagePasswordConf }}</span>
    </div>
    <button type="button" class="btn btn-primary" @click="request(name, email, password)">Отправить</button>
    <button type="button" class="btn btn-secondary ms-3" @click="router.go(-1)">Назад</button>
  </form>
  {{ getUser }}
  {{ getToken }}
</template>
<script setup>
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useAlertsStore } from '@/stores/store.js';
import { validationMixin } from '@/services/mixins/validationMixin';

const { getUser, getToken } = storeToRefs(useAlertsStore());
const { register } = useAlertsStore();
const router = useRouter()

const name = ref('');
const email = ref('');
const password = ref('');
const passwordConf = ref('');

const messageName = ref(null);
const messageEmail = ref(null);
const messagePassword = ref(null);
const messagePasswordConf = ref(null);


watch(name, newValue => {
  return messageName.value = validationMixin.validLogin(newValue)
})
watch(email, newValue => {
  return messageEmail.value = validationMixin.validEmail(newValue)
})
watch(password, newValue => {
  return messagePassword.value = validationMixin.validPassword(newValue)
})
watch(passwordConf, newValue => {
  if (validationMixin.isEmpty(newValue)) {
    return 'Заполните поле'
  }
  else if (password.value !== newValue) {
    return messagePasswordConf.value = 'Пароли не совпадают'
  } else {
    return messagePasswordConf.value = ''
  }
})


const request = (name, email, pass) => {
//   if (name === '' || email === '' || pass === '' || messageName.value !== null || messageEmail.value !== null || messagePassword.value !== null || messagePasswordConf.value !== null) {
//     return
//   }

  const data = {
    'name': name,
    'email': email,
    'password': pass,
    'role': 'user'
  }
  register(data);
}

</script>
<style lang="">
    
</style>