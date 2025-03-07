/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 550
 *         title:
 *           type: string
 *           example: Fight Club
 *         overview:
 *           type: string
 *           example: Un employé de bureau insomniaque...
 *         poster_path:
 *           type: string
 *           nullable: true
 *           example: "/path/to/poster.jpg"
 *         release_date:
 *           type: string
 *           format: date
 *           example: "1999-10-15"
 *         vote_average:
 *           type: number
 *           format: float
 *           example: 8.4
 *         genre_ids:
 *           type: array
 *           items:
 *             type: integer
 *           example: [28, 18, 53]
 */

interface results{
    adult:boolean,
    backdrop_path:string,
    genre_ids:number[],
    id:number,
    original_language:string,
    original_title:string,
    overview:string,
    popularity:number,
    poster_path:string,
    release_date:string,
    title:string,
    video:boolean,
    vote_average:number,
    vote_count:number,
}

interface MovieResponse {
    page:number,
    results:results[],
    total_pages:number,
    total_results:number,
}

export default MovieResponse;