import * as express from "express";
import { join } from "path";
import * as favicon from "serve-favicon";
import { json, urlencoded } from "body-parser";

import { loginRouter } from "./routes/login";
import { protectedRouter } from "./routes/protected";

// var ionicPushServer = require('ionic-push-server');

const app: express.Application = express();
app.disable("x-powered-by");

app.use(favicon(join(__dirname, "../public", "favicon.ico")));
app.use(express.static(join(__dirname, '../public')));

app.use(json());
app.use(urlencoded({ extended: true }));

// api routes
app.use("/api", protectedRouter);
app.use("/echo", loginRouter);

app.use('/client', express.static(join(__dirname, '../client')));



// var credentials = {
//     IonicApplicationID : "0a9fc6ea",
//     IonicApplicationAPItoken : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkNGYyY2YyNC1iOTExLTQyMGQtODllYi05MTgzMTRlOWFhMTUifQ.bmpvbB0Q8YGbyexgFEIGrj6lKqUyMZ1JgcB3nXWjJVc"
// };
//
// var notification = {
//     "tokens": ["4a080ba4fd6d1d9290e3051c4f9452f8cd340f05e6619f92"],
//     "profile": "my-security-profile",
//     "notification": {
//         "title": "Hi",
//         "message": "Hello world!",
//         "android": {
//             "title": "Hey",
//             "message": "Hello Android!"
//         },
//         "ios": {
//             "title": "Howdy",
//             "message": "Hello iOS!"
//         }
//     }
// };
//
// ionicPushServer(credentials, notification);










// error handlers
// development error handler
// will print stacktrace
if (app.get("env") === "development") {

    app.use(express.static(join(__dirname, '../node_modules')));
    app.use(express.static(join(__dirname, '../tools')));

    app.use(function(err, req: express.Request, res: express.Response, next: express.NextFunction) {
        res.status(err.status || 500);
        res.json({
            error: err,
            message: err.message
        });
    });
}

// catch 404 and forward to error handler
app.use(function(req: express.Request, res: express.Response, next) {
    let err = new Error("Not Found");
    next(err);
});

// production error handler
// no stacktrace leaked to user
app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});

export { app }
