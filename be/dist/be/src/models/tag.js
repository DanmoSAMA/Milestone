"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = exports.tagSchema = void 0;
const mongoose_1 = require("mongoose");
exports.tagSchema = new mongoose_1.Schema({
    name: String,
    count: { type: Number, default: 1 }
});
exports.Tag = (0, mongoose_1.model)('Tag', exports.tagSchema);
