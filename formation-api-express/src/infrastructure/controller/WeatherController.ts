import EntityWeather from "../../domain/entities/EntityWeather";
import WeatherRepository from "../../domain/repositories/WeatherRepository";

export default class WeatherController {

    private weatherRepository: WeatherRepository;

    constructor(weatherRepository: WeatherRepository) {
        this.weatherRepository = weatherRepository;
    }

    public async getWeatherByCity(city: string): Promise<EntityWeather> {
        return await this.weatherRepository.getWeatherByCity(city);
    }

    public async getCityByCoords(coords: { lat: number; lon: number; }) {
        return await this.weatherRepository.getLocationByCoords(coords);
    }
}