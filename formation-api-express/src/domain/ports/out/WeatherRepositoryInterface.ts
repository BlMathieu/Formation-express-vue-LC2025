import EntityGeolocation from "../../entities/EntityGeolocation";
import EntityWeather from "../../entities/EntityWeather";

export default interface WeatherRepositoryInterface {
    getLocationByCoords(coords: { lat: number; lon: number; }): Promise<EntityGeolocation>
    getWeatherByCity(city: string): Promise<EntityWeather>
}