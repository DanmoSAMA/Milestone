"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const useAuth_1 = require("../middleware/useAuth");
const post_1 = require("./post");
const tag_1 = require("./tag");
const router = new Router();
router
    .use('/post', post_1.postRouter.routes())
    .use('/tag', tag_1.tagRouter.routes())
    .get('/login', (0, useAuth_1.useAuth)(false));
exports.default = router;
