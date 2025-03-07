abstract class AbstractAdapter{
    protected readonly baseUrl:string;
    constructor(urlBase:string){
        this.baseUrl = urlBase;
    }
}

export default AbstractAdapter;