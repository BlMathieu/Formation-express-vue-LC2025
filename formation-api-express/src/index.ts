import express from 'express';
import dotenv from 'dotenv';
import WeatherRoutes from './infrastructure/web/routes/WeatherRoutes';
import GeolocalizeRoutes from './infrastructure/web/routes/GeolocalizeRoutes';
import MovieRouter from './infrastructure/web/routes/MovieRoutes';
import errorHandler from './infrastructure/web/middleware/ErrorHandler';
import { specs } from './application/utils/swagger';
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import MovieRepository from './domain/repositories/MovieRepository';
import TMDBAdapter from './domain/adapters/TMDBAdapter';
import OpenWeatherAdapter from './domain/adapters/OpenWeatherAdapter';
import WeatherRepository from './domain/repositories/WeatherRepository';
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;



const tmdbAdapter = new TMDBAdapter();
const openWeatherAdapter = new OpenWeatherAdapter();

const movieRepository = new MovieRepository(tmdbAdapter, openWeatherAdapter);
const weatherRepository = new WeatherRepository(openWeatherAdapter);


app.use(cors({
    origin: ["http://localhost:5173"],
}));
app.use(express.json());
app.use((req, res, next)=>{
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
})
app.use('/api', new WeatherRoutes(weatherRepository).getRouter());
app.use('/api/movie', new MovieRouter(movieRepository).getRouter());
app.use('/api/geolocalize', new GeolocalizeRoutes(weatherRepository).getRouter());
app.use(errorHandler);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(specs));
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});