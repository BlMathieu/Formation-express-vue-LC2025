<script setup lang="ts">
import GeolocalizeComponent from '@/components/movieResearch/GeolocalizeComponent.vue';
import InputCityComponent from '@/components/movieResearch/InputCityComponent.vue';
import MovieCardComponent from '@/components/movieDisplay/MovieCardComponent.vue';
import { useMovieStore } from '@/stores/MovieStore';
const movieStore = useMovieStore();
</script>

<template>
  <main>
    <section class="flex items-center justify-center">
      <InputCityComponent />
      <GeolocalizeComponent />
    </section>
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <MovieCardComponent v-for="movie in movieStore.fetchedMovies.data.movies" :movie="movie" :addFavorie="true" />
    </section>
  </main>
</template>
