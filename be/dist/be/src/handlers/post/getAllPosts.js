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
exports.getAllPosts = void 0;
const post_1 = require("../../models/post");
const getAllPosts = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, kw } = ctx.request.query;
    const pageNum = parseInt(page);
    const posts = yield (yield post_1.Post.find()).reverse();
    const filteredPosts = kw
        ? posts.filter((item) => item.tags.find((item) => item === kw) || item.title.indexOf(kw) !== -1)
        : posts;
    const postsPerPageCnt = 8;
    const data = {
        posts: filteredPosts.slice(pageNum * postsPerPageCnt, (pageNum + 1) * postsPerPageCnt),
        filteredCnt: filteredPosts.length
    };
    const ret = {
        status: 200,
        msg: 'ok',
        data: data
    };
    ctx.body = ret;
});
exports.getAllPosts = getAllPosts;
