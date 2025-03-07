import { param } from "express-validator";
import AbstractRoute from "./AbstractRoutes";
import { ValidatorHandler } from "../middleware/validators/ValidatorHandler";
import { Request, Response, NextFunction } from "express";
import WeatherController from "../../controller/WeatherController";
import WeatherRepository from "../../../domain/repositories/WeatherRepository";


class WeatherRoutes extends AbstractRoute {
  private weatherController: WeatherController;
  constructor(weatherRepository: WeatherRepository) {
    super();
    this.weatherController = new WeatherController(weatherRepository);
  }

  protected initializeRouting(): void {
    this.router.get("/weather/:city", param('city').notEmpty().escape().isEmail(), ValidatorHandler, async (req: Request, res: Response, next: NextFunction) => {
      try {
        const city = req.params.city;
        res.send(await this.weatherController.getWeatherByCity(city));
      } catch (error) {
        next(error);
      }
    });
  }
}

export default WeatherRoutes;
