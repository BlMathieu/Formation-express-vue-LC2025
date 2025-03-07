import { Router } from "express";

abstract class AbstractRoute {
    protected router: Router;

    constructor() {
        this.router = Router();
        this.initializeRouting();
    }

    public getRouter(): Router {
        return this.router;
    }

    protected initializeRouting(): void {

    }
}

export default AbstractRoute;