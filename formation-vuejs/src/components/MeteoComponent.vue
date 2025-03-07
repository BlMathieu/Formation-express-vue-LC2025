<script setup lang="ts">
import { useGeolocalizeStore } from '@/stores/GeolocalizationStore';
import { useMovieStore } from '@/stores/MovieStore';

const movieStore = useMovieStore();
const geoStore = useGeolocalizeStore();
</script>

<template>
    <div class="absolute top-0 right-0 border-b-2 border-l-2 border-[black]">
        <p class="m-1" v-if="geoStore.geoInformations">Ville : {{ geoStore.geoInformations.name }}</p>
        <p class="m-1" v-if="movieStore.fetchedMovies">Météo : {{ movieStore.fetchedMovies.data.weather }}</p>
    </div>
</template>