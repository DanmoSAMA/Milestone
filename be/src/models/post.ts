import { Document, model, Model, Schema } from 'mongoose';

import { Post as PostDef } from '../../../fe/shared/models/post';

const postSchema = new Schema(
  {
    title: String,
    content: String,
    tags: Array,
  },
);

// 自动更改为名为 posts 的集合
export const Post: Model<PostDef> = model("Post", postSchema);
