<script setup lang="ts">
import { RouterView } from 'vue-router'
import Toaster from './components/ui/toast/Toaster.vue';
import MeteoComponent from './components/MeteoComponent.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="flex list-none justify-center [&_li]:m-8">
        <li>
          <RouterLink to="/">Rechercher des films</RouterLink>
        </li>
        <li>
          <RouterLink to="/favories">Liste des favories</RouterLink>
        </li>
      </nav>
      <MeteoComponent />
    </div>
  </header>

  <RouterView />
  <Toaster />
</template>
