import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type Movie from '@/types/Movie'
import axios from 'axios'

interface MovieResponse {
    data: {
        weather: string,
        mood: string,
        description: string,
        movies: Movie[],
    }
}

export const useMovieStore = defineStore('movies', () => {
    const fetchedMovies: Ref<MovieResponse> = ref({ data: { weather: "", mood: "", description: "", movies: [] } });
    async function getMoviesFromCity(city: string) {
        fetchedMovies.value = await axios.get<MovieResponse, any>(`http://localhost:3000/api/movie/recommanded/${city}`).then((value) => {
            return value;
        }).catch((error) => {
            console.error(error);
            return [];
        });
    }
    return { fetchedMovies: fetchedMovies, getMoviesFromCity }
});
