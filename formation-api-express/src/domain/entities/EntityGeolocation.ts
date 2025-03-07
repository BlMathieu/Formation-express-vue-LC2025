export default class EntityGeolocation {
    private coords!: { lon: number, lat: number };
    constructor() { }

    public getCoords(): { lon: number, lat: number } { return this.coords; }
}