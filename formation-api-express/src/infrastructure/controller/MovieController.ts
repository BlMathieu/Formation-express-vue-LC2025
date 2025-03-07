import RedisClient from "../../application/config/RedisClient";
import RecommandedMovieResponse from "../web/responses/RecommandedMovieResponse";
import MovieRepository from "../../domain/repositories/MovieRepository";

export default class MovieController {
    private movieRepository: MovieRepository;

    constructor(movieRepository: MovieRepository) {
        this.movieRepository = movieRepository;
    }

    public async getRecommandedMovies(city: string): Promise<RecommandedMovieResponse> {
        const data:RecommandedMovieResponse = await this.movieRepository.getRecommandedMovies(city);
        const redis = new RedisClient();
        await redis.cacheData({ key: "recommanded", value: JSON.stringify(data) });
        redis.disconnect();
        return data;
    }
}