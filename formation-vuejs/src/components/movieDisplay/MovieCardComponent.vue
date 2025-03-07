<script setup lang="ts">
import Card from '../ui/card/Card.vue'
import CardContent from '../ui/card/CardContent.vue'
import CardDescription from '../ui/card/CardDescription.vue'
import CardFooter from '../ui/card/CardFooter.vue'
import CardHeader from '../ui/card/CardHeader.vue'
import CardTitle from '../ui/card/CardTitle.vue'
import Button from '../ui/button/Button.vue'
import type Movie from '@/types/Movie'
import { useToast } from '../ui/toast'
const { toast } = useToast()

const props = defineProps(['movie', 'addFavorie', 'removeFavorie'])
const emits = defineEmits(['updateFavoriteMovies'])

const addMovieToLocalStorage = (movie: Movie) => {
    const jsonMovies = localStorage.getItem('movies')
    if (jsonMovies) {
        const movies = JSON.parse(jsonMovies)
        movies.push(movie)
        localStorage.setItem('movies', JSON.stringify(movies))
    } else {
        const movies = [movie]
        localStorage.setItem('movies', JSON.stringify(movies))
    }
    toast({
        title: `Le film ${movie.title} a été ajouté aux favoires !`,
    })
}

const removeMovieFromLocalStorage = (movie: Movie) => {
    const jsonMovies = localStorage.getItem('movies')
    if (jsonMovies) {
        let movies = JSON.parse(jsonMovies)
        movies = movies.filter((m: Movie) => {
            return m.id !== movie.id
        })
        localStorage.setItem('movies', JSON.stringify(movies))
        toast({
            title: `Le film ${movie.title} a été supprimé aux favoires !`,
            variant: 'destructive',
        })
    }
}
</script>

<template>
    <div>
        <Card class="flex flex-col items-center h-full">
            <CardHeader>
                <CardTitle>{{ movie.title }}</CardTitle>
                <CardDescription>{{ movie.overview }}</CardDescription>
            </CardHeader>
            <CardContent>
                <img class="max-h-40 rounded-xl" :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
                    alt="movie_img" />
            </CardContent>
            <CardFooter class="flex flex-col">
                <div class="flex flex-row">
                    <img class="w-5" src="@/assets/star.svg" />
                    <p>{{ movie.vote_average }}</p>
                </div>
                <Button v-if="props.addFavorie" @click="
                    () => {
                        addMovieToLocalStorage(movie)
                        $emit('updateFavoriteMovies')
                    }
                " class="bg-blue-500 m-2">Ajouter aux favories</Button>
                <Button v-if="props.removeFavorie" @click="
                    () => {
                        removeMovieFromLocalStorage(movie)
                        $emit('updateFavoriteMovies')
                    }
                " class="bg-red-500 m-2">Supprimer des favories</Button>
            </CardFooter>
        </Card>
    </div>
</template>
