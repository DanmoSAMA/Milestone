"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const Router = require("koa-router");
const createPost_1 = require("../handlers/post/createPost");
const deletePost_1 = require("../handlers/post/deletePost");
const getAllPosts_1 = require("../handlers/post/getAllPosts");
const getPostDetail_1 = require("../handlers/post/getPostDetail");
const updatePost_1 = require("../handlers/post/updatePost");
exports.postRouter = new Router();
exports.postRouter
    .post('/', createPost_1.createPost)
    .get('/:id', getPostDetail_1.getPostDetail)
    .get('/', getAllPosts_1.getAllPosts)
    .delete('/:id', deletePost_1.deletePost)
    .put('/:id', updatePost_1.updatePost);
