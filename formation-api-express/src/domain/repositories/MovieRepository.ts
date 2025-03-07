import { weatherToGenreMap } from "../../infrastructure/mapping/WeatherGenreMapping";
import RecommandedMovieResponse from "../../infrastructure/web/responses/RecommandedMovieResponse";
import EntityMovie from "../entities/EntityMovie";
import MovieAdapterInterface from "../ports/in/MovieAdapterInterface";
import WeatherAdapterInterface from "../ports/in/WeatherAdapterInterface";
import MovieRepositoryInterface from "../ports/out/MovieRepositoryInterface";

export default class MovieRepository implements MovieRepositoryInterface {
    private movieAdapter: MovieAdapterInterface;
    private weatherAdapter: WeatherAdapterInterface;

    constructor(movie: MovieAdapterInterface, weather: WeatherAdapterInterface) {
        this.movieAdapter = movie;
        this.weatherAdapter = weather;
    }

    public async getRecommandedMovies(city: string): Promise<RecommandedMovieResponse> {

        const weather = await this.weatherAdapter.getWeatherByCity(city);
        const weatherCondition = weather.getWeather().main;

        const mapping = weatherToGenreMap.find(m => m.weatherCode === weatherCondition);
        if (!mapping) { throw new Error("Mapping cannot be null ! "); }

        const moviesResult: EntityMovie[] = await this.movieAdapter.findMovieByGenre(mapping.genres[0]);

        const data: RecommandedMovieResponse = {
            weather: weatherCondition,
            mood: mapping.mood,
            description: mapping.description,
            movies: moviesResult,
            time: Date.now(),
        }

        return data;
    }

}