import { query } from "express-validator";
import AbstractRoutes from "./AbstractRoutes";
import { ValidatorHandler } from "../middleware/validators/ValidatorHandler";
import { Request, Response, NextFunction } from "express";
import WeatherController from "../../controller/WeatherController";
import WeatherRepository from "../../../domain/repositories/WeatherRepository";

class GeolocalizeRoutes extends AbstractRoutes {
    private geoController:WeatherController;
    constructor(weatherRepository:WeatherRepository) {
        super();
        this.geoController = new WeatherController(weatherRepository); 
    }
    protected initializeRouting(): void {
        this.router.get("/", query('lon').isNumeric().notEmpty(), query('lat').isNumeric().notEmpty(), ValidatorHandler, async (req: Request, res: Response, next: NextFunction) => {
            try {
                const lat = Number(req.query.lat);
                const lon = Number(req.query.lon);  
                const cityInformations = await this.geoController.getCityByCoords({ lat: lat, lon: lon });
                res.send(cityInformations);
            } catch (error) {
                next(error);
            }
        })
    }
}
export default GeolocalizeRoutes;