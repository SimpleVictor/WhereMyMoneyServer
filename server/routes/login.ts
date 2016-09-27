import { Router, Request, Response, NextFunction } from "express";

const loginRouter: Router = Router();
var requests = require('request');

loginRouter.post("/", function (request: Request, response: Response, next: NextFunction) {
    let obj = request.body;
    console.log(obj);

    

});


export { loginRouter }
