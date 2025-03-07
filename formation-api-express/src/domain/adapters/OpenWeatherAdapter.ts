import axios from "axios";
import WeatherServiceInterface from "../ports/in/WeatherAdapterInterface";
import AbstractAdapter from "./AbstractAdapter";
import EntityGeolocation from "../entities/EntityGeolocation";
import EntityWeather from "../entities/EntityWeather";

export default class OpenWeatherAdapter extends AbstractAdapter implements WeatherServiceInterface {

    private readonly apiKey;
    constructor() {
        super("https://api.openweathermap.org");
        this.apiKey = process.env.OPENWEATHER_API_KEY || "";
    }

    public async getLocationByCoords(coords: { lat: number; lon: number; }): Promise<EntityGeolocation> {
        return await axios.get<EntityGeolocation, any>(`${this.baseUrl}/geo/1.0/reverse`, {
            params: {
                lon: coords.lon,
                lat: coords.lat,
                appid: this.apiKey,
            }
        }).then((response) => {
            return response.data[0];
        }).catch((error) => {
            throw new Error(`Erreur Geolocalize API : ${error.message}`)
        })
    }

    public async getWeatherByCity(city: string): Promise<EntityWeather> {
        const response = await axios.get<any>(`${this.baseUrl}/data/2.5/weather`, {
            params: {
                q: city,
                appid: this.apiKey,
                units: "metric",
            },
        }).then((response) => {
            const result = response.data;
            const weather = new EntityWeather()
                .setMain({ temp: result.main.temp, humidity: result.main.humidity })
                .setWeather({ main: result.weather[0].main, description: result.weather[0].description });
            return weather;
        })
            .catch((error) => {
                throw new Error(`Weather API error: ${error.response?.data.message || error.message}`);
            });
        return response;
    }

}