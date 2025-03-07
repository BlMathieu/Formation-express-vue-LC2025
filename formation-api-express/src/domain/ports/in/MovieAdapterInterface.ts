import EntityMovie from "../../entities/EntityMovie";

export default interface MovieAdapterInterface {
    findMovieById(movieId: number): Promise<EntityMovie>;
    findMovieByGenre(genreId: number): Promise<EntityMovie[]>;
    findMovie(search: string): Promise<EntityMovie[]>;
}