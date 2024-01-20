
<template>
  <section v-if="route.name !== 'register' && route.name !== 'login'">
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
          <a class="navbar-brand" href="#">buy-sale</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Categories</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sell</a>
              </li>
              <li class="nav-item">
                <router-link class="nav-link"
                :to="{ name: 'login' }">login</router-link>⠀
              </li>
              <li class="nav-item">
                <a class="nav-link btn btn-warning text-dark" href="#">Post a Free Ad</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </section>



  <RouterView />
</template>
<script setup>

import { ref } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useAlertsStore } from '@/stores/store.js';

const route = useRoute();
const name = ref(null)
const { getDate } = useAlertsStore();

</script>

<style scoped></style>
