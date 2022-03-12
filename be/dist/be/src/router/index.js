"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const post_1 = require("./post");
const useAuth_1 = require("../middleware/useAuth");
const router = new Router();
router
    .use('/post', post_1.postRouter.routes())
    .get('/login', (0, useAuth_1.useAuth)(false));
exports.default = router;
