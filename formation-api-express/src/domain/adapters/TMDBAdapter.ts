import axios from "axios";
import MovieServiceInterface from "../ports/in/MovieAdapterInterface";
import AbstractAdapter from "./AbstractAdapter";
import EntityMovie from "../entities/EntityMovie";

export default class TMDBAdapter extends AbstractAdapter implements MovieServiceInterface {
    private readonly token: string;
    constructor() {
        super("https://api.themoviedb.org");
        this.token = process.env.TOKEN || "";
    }

    public async findMovieById(movieId: number): Promise<EntityMovie> {
        return await axios.get<EntityMovie>(`${this.baseUrl}/3/movie`, {
            params: {
                movie_id: movieId,
            },
            headers: { Authorization: `Bearer ${this.token}` },
        }).then((response) => {
            return response.data;
        }).catch((error) => {
            throw new Error(`Movie API error: ${error.response?.data.message || error.message}`);
        });
    }
    public async findMovieByGenre(genreId: number): Promise<EntityMovie[]> {
        return await axios.get<EntityMovie[]>(`${this.baseUrl}/3/discover/movie`, {
            params: {
                with_genres: genreId,
                language: 'fr-FR',
                sort_by: 'popularity.desc',
                page: 1,
            },
            headers: { Authorization: `Bearer ${this.token}` },
        }).then((response) => {
            return response.data;
        }).catch((error) => {
            throw new Error(`Movie API error: ${error.response?.data.message || error.message}`);
        });
    }
    public async findMovie(search: string) {
        return await axios.get<EntityMovie[]>(`${this.baseUrl}/3/search/movie`, {
            params: {
                query: search,
            },
            headers: { Authorization: `Bearer ${this.token}` },
        }).then((response) => {
            return response.data;
        }).catch((error) => {
            throw new Error(`Movie API error: ${error.response?.data.message || error.message}`);
        });
    }
}