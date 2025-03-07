<script setup lang="ts">
import MovieCardComponent from '@/components/movieDisplay/MovieCardComponent.vue';
import { ref } from 'vue';

const favoritesMovies = ref([]);
const update = () => {
    const jsonMovies = localStorage.getItem("movies");
    if (jsonMovies) {
        favoritesMovies.value = JSON.parse(jsonMovies);
    }
}
update();

</script>

<template>
    <MovieCardComponent v-for="movie in favoritesMovies" :movie="movie" :removeFavorie="true"
        @updateFavoriteMovies="update" />
</template>