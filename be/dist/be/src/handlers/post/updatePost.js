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
exports.updatePost = void 0;
const useHandleError_1 = require("../../middleware/useHandleError");
const post_1 = require("../../models/post");
const updatePost = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
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
    const { id } = ctx.params;
    const post = yield post_1.Post.findById(id);
    post.title = req.title;
    post.content = req.content;
    post.tags = req.tags;
    yield post.save();
    const ret = {
        status: 200,
        msg: 'ok',
        data: { id: post.id },
    };
    ctx.body = ret;
});
exports.updatePost = updatePost;
