import type Geolocalization from "@/types/Geolocalization";
import axios from "axios";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useGeolocalizeStore = defineStore('geolocalization', () => {
    const geoInformations: Ref<Geolocalization> = ref({ name: "", country: "", state: "", lon: 0, lat: 0, local_names: [] });
    async function getLocation(coords: GeolocationCoordinates) {
        geoInformations.value = await axios.get<Geolocalization, any>(`http://localhost:3000/api/geolocalize`, {
            params: {
                lon: coords.longitude,
                lat: coords.latitude,
            }
        }).then((value) => {
            return value.data;
        }).catch((error) => {
            console.error(error);
        });
    }
    return { geoInformations: geoInformations, getLocation }
});
