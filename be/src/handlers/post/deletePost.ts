import { Middleware } from 'koa-router';

import { HttpRes } from '../../models';
import { Post } from '../../models/post';

export const deletePost: Middleware = async (ctx) => {
  const { id } = ctx.params as { id: string };

  const post = await Post.findOne({ _id: id });
  post.delete();

  const ret: HttpRes = {
    status: 200,
    msg: 'ok',
    data: {},
  };

  ctx.body = ret;
};
