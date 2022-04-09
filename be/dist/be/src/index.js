"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const KoaBody = require("koa-bodyparser");
const Cors = require("@koa/cors");
const Logger = require("koa-logger");
const models_1 = require("./models");
const useHandleError_1 = require("./middleware/useHandleError");
const index_1 = require("./router/index");
(0, models_1.setupMongo)();
const app = new Koa();
app
    .use(Logger())
    .use(Cors({
    origin: '*',
    allowMethods: '*',
    allowHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    exposeHeaders: 'Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Cache-Control, Content-Language, Content-Type',
    credentials: true
}))
    .use((0, useHandleError_1.default)())
    .use(KoaBody())
    .use(index_1.default.routes())
    .use(index_1.default.allowedMethods())
    .listen(8080, () => {
    console.log('Server is running at 127.0.0.1:8080');
});
