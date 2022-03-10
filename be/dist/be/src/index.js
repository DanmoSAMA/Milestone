"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Cors = require("koa-cors");
const BodyParser = require("koa-bodyparser");
const Logger = require("koa-logger");
const index_1 = require("./router/index");
const models_1 = require("./models");
(0, models_1.setupMongo)();
const app = new Koa();
app
    .use(Logger())
    .use(Cors())
    .use(BodyParser())
    .use(index_1.default.routes())
    .use(index_1.default.allowedMethods())
    .listen(8080, () => {
    console.log('Server is running at 127.0.0.1:8080');
});
