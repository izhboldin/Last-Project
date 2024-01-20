<template>
    <div class="background">
        <div class="container" style=" padding-top: 28vh">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-6">
                    <div class="card">
                        <div class=" w-100 d-flex">
                            <router-link v-bind:class="{ 'fw-bolder border-dark': route.name !== 'register' }" class="py-3 border-bottom fs-4 text-decoration-none text-dark w-50 text-center" to="/auth/login">Войти </router-link>
                            <router-link v-bind:class="{ 'fw-bolder border-dark': route.name !== 'login' }" class="py-3 border-bottom fs-4 text-decoration-none text-dark w-50 text-center" to="/auth/register">Зарегистрироваться</router-link>
                        </div>
                        <div class="card-body">
                            <RouterView />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- text-decoration-line-through -->
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView, useRouter, useRoute} from 'vue-router'

const route = useRoute();
const router = useRouter()
const condition = ref(true);

</script>
<style>
.background {
    background-color: var(--bs-primary);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
}
</style>