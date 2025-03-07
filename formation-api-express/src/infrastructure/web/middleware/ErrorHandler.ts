import { NextFunction, Request, Response } from 'express';
export default function errorHandler (error: any, req: Request, res: Response, next:NextFunction) {
    if (!res.headersSent) {
        res.status(500).json({ code: 500, message: error.message });
    }
};