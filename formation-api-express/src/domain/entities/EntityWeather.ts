export default class EntityWeather {
    private weather!: {
        main: string,
        description: string,
    };
    private main!: {
        temp: number,
        humidity: number,
    };

    constructor() { }

    public getMain(): { temp: number, humidity: number } { return this.main; }
    public getWeather(): { main: string, description: string } { return this.weather; }

    public setMain(params:{temp:number, humidity:number}):EntityWeather{
        this.main = params;
        return this;
    }
    public setWeather(params:{main:string, description:string}):EntityWeather{
        this.weather = params;
        return this;
    }
}