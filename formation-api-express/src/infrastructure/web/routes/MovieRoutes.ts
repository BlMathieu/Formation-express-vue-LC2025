import { param } from "express-validator";
import AbstractRoute from "./AbstractRoutes";
import { Request, Response, NextFunction } from "express";
import { ValidatorHandler } from "../middleware/validators/ValidatorHandler";
import MovieController from "../../controller/MovieController";
import MovieRepository from "../../../domain/repositories/MovieRepository";
class MovieRouter extends AbstractRoute {
  private movieController: MovieController;
  constructor(movieRepository: MovieRepository) {
    super();
    this.movieController = new MovieController(movieRepository);
  }

  protected initializeRouting() {

    /**
     * @swagger
     * tags:
     *   name: Movies
     *   description: API de recommandation de films basée sur la météo
     */
    /**

 * @swagger
 * /api/movies/recommended:
 *   get:
 *     summary: Obtenir des recommandations de films selon la météo
 *     description: Retourne une liste de films recommandés en fonction de la météo de la ville
 *     tags: [Movies]
 *     parameters:
 *       - in: query
 *         name: city
 *         required: true
 *         schema:
 *           type: string
 *         description: Nom de la ville
 *         example: Paris
 *     responses:
 *       200:
 *         description: Recommandations de films
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 weather:
 *                   type: string
 *                   example: Clear
 *                 mood:
 *                   type: string
 *                   example: énergique
 *                 description:
 *                   type: string
 *                   example: Par beau temps, on se sent aventureux !
 *                 movies:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Movie'
 *       400:
 *         description: Paramètres invalides
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       message:
 *                         type: string
 *                       param:
 *                         type: string
 *                       value:
 *                         type: string
 *       500:
 *         description: Erreur serveur
 */

    /**
     * @route GET /api/movies/recommended/:city
     * @desc Get movie recommendations based on weather in a city
     * @param {string} city - The city name to get weather-based recommendations
     * @returns {Object} Weather info, mood, description and recommended movies
     */
    this.router.get("/recommanded/:city", param('city').notEmpty().escape().isString(), ValidatorHandler, async (req: Request, res: Response, next: NextFunction) => {
      try {
        const city = req.params.city;
        const data = await this.movieController.getRecommandedMovies(city);
        res.send(data);
      } catch (error) {
        console.error(error);
        next(error);
      }
    });

    /**
     * @route GET /api/movies/:query
     * @desc Search for movies based on a query
     * @param {string} query - The movie query to search for
     * @returns {Object} A list of movies matching the query
     */
  }
}
export default MovieRouter;
