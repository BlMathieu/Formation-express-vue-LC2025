import RecommandedMovieResponse from "../../../infrastructure/web/responses/RecommandedMovieResponse";

export default interface MovieRepositoryInterface {
    getRecommandedMovies(city: string): Promise<RecommandedMovieResponse>;
}