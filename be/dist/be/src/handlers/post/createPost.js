"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = void 0;
const useHandleError_1 = require("../../middleware/useHandleError");
const post_1 = require("../../models/post");
const createPost = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const req = ctx.request.body;
    if (!req.content)
        (0, useHandleError_1.createError)({
            status: 400,
            msg: '文章内容为空',
        });
    if (!req.title)
        (0, useHandleError_1.createError)({
            status: 400,
            msg: '文章标题为空',
        });
    const newPost = new post_1.Post(req);
    yield newPost.save();
    const ret = {
        status: 200,
        msg: 'ok',
        data: { id: newPost._id },
    };
    ctx.body = ret;
});
exports.createPost = createPost;
