export default class EntityMovie {

    private id!: number;
    private adult!: boolean;
    private backdrop_path!: string;
    private genre_ids!: number[];
    private original_language!: string;
    private original_title!: string;
    private overview!: string;
    private popularity!: number;
    private poster_path!: string;
    private release_date!: string;
    private title!: string;
    private video!: boolean;
    private vote_average!: number;
    private vote_count!: number;

    constructor(){}

    public getId(): number { return this.id; }
    public getBackdropPath(): string { return this.backdrop_path; }
    public getAdult(): boolean { return this.adult; }
    public getGenreIds(): number[] { return this.genre_ids; }
    public getOriginalLanguage(): string { return this.original_language; }
    public getOriginalTtitle(): string { return this.original_title; }
    public getOverview(): string { return this.overview; }
    public getPopularity(): number { return this.popularity; }
    public getPosterPath(): string { return this.poster_path; }
    public getReleaseDate(): string { return this.release_date; }
    public getTitle(): string { return this.title; }
    public getVideo(): boolean { return this.video; }
    public getVoteAverage(): number { return this.vote_average; }
    public getVoteCount(): number { return this.vote_count; }
}

