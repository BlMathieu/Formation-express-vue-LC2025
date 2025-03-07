<script setup lang="ts">
import { useGeolocalizeStore } from '@/stores/GeolocalizationStore';
import { useMovieStore } from '@/stores/MovieStore';

const storeGeo = useGeolocalizeStore();
const storeMovie = useMovieStore();

const geolocalize = async () => {
    navigator.geolocation.getCurrentPosition(async (location) => {
        await storeGeo.getLocation(location.coords);
        await storeMovie.getMoviesFromCity(storeGeo.geoInformations.name);
    }, (error) => {
        console.log(error);
    });
}
</script>

<template>
    <div>
        <img @click="async () => { await geolocalize() }" class="mx-4 h-8 cursor-pointer hover:scale-150"
            src="@/assets/globe.svg" alt="geolocalisation">
    </div>
</template>