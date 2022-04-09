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
const tag_1 = require("../../models/tag");
const set_1 = require("../../utils/set");
const updatePost = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const req = ctx.request.body;
    if (!req.content)
        (0, useHandleError_1.createError)({
            status: 400,
            msg: '文章内容为空'
        });
    if (!req.title)
        (0, useHandleError_1.createError)({
            status: 400,
            msg: '文章标题为空'
        });
    const { id } = ctx.params;
    const post = yield post_1.Post.findOne({ _id: id }).catch((e) => null);
    if (!post)
        (0, useHandleError_1.createError)({ msg: '找不到文章', status: 404 });
    const oldTags = new Set(post.tags);
    const newTags = new Set(req.tags);
    const deletedTags = (0, set_1.AMinusB)(oldTags, newTags);
    const addedTags = (0, set_1.AMinusB)(newTags, oldTags);
    const existingTags = yield tag_1.Tag.find({
        name: {
            $in: [...newTags]
        }
    });
    const nonExistingTagNames = [...newTags].filter((name) => !existingTags.find((tag) => tag.name === name));
    const createdTags = yield tag_1.Tag.insertMany(nonExistingTagNames.map((name) => ({ name, count: 0 })));
    post.title = req.title;
    post.content = req.content;
    post.tags = req.tags;
    yield post.save();
    const bulk = tag_1.Tag.collection.initializeUnorderedBulkOp();
    bulk
        .find({
        name: {
            $in: deletedTags
        }
    })
        .update({ $inc: { count: -1 } })
        .find({
        name: {
            $in: addedTags
        }
    })
        .update({ $inc: { count: 1 } })
        .execute();
    const ret = {
        status: 200,
        msg: 'ok',
        data: { id: post.id }
    };
    ctx.body = ret;
});
exports.updatePost = updatePost;
