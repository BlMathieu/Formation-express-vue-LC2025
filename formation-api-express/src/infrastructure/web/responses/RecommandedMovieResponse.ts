import EntityMovie from "../../../domain/entities/EntityMovie";

export default interface RecommandedMovieResponse {
    weather: string,
    mood: string,
    description: string,
    movies: EntityMovie[],
    time: number,
}