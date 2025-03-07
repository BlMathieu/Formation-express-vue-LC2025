<script setup lang="ts">
import { ref, type Ref } from 'vue';
import Input from '../ui/input/Input.vue';
import Button from '../ui/button/Button.vue';
import { useMovieStore } from '@/stores/MovieStore';
import { useGeolocalizeStore } from '@/stores/GeolocalizationStore';
const city: Ref<string> = ref("");
const movieStore = useMovieStore();
const geoStore = useGeolocalizeStore();
</script>
<template>
    <div class="m-4">
        <form class="flex flex-row" @submit="async (event) => {
            event.preventDefault();
            await movieStore.getMoviesFromCity(city);
            geoStore.geoInformations.name = city
        }">
            <Input placeholder="veuillez écrire votre ville" v-model="city" />
            <Button>Rechercher</Button>
        </form>
    </div>
</template>

<style scope></style>