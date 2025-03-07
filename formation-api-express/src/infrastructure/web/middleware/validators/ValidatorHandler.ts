import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const ValidatorHandler = (req:Request,res:Response, next:NextFunction) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        res.send(errors.array());
    }
    next();
}