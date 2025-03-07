import EntityGeolocation from "../entities/EntityGeolocation";
import EntityWeather from "../entities/EntityWeather";
import WeatherAdapterInterface from "../ports/in/WeatherAdapterInterface";
import WeatherRepositoryInterface from "../ports/out/WeatherRepositoryInterface";

export default class WeatherRepository implements WeatherRepositoryInterface {

    private weatherAdapter: WeatherAdapterInterface
    constructor(weatherAdapter: WeatherAdapterInterface) {
        this.weatherAdapter = weatherAdapter;
    }
    public async getLocationByCoords(coords: { lat: number; lon: number; }): Promise<EntityGeolocation> {
        return await this.getLocationByCoords(coords);
    }

    public async getWeatherByCity(city: string): Promise<EntityWeather> {
        return await this.weatherAdapter.getWeatherByCity(city);
    }
}
