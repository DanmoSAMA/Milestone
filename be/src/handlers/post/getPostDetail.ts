import { Middleware } from 'koa-router';

import { createError } from '../../middleware/useHandleError';
import { GetPostDetailRes } from '../../models';
import { Post } from '../../models/post';

export const getPostDetail: Middleware = async (ctx) => {
  const req = ctx.params as { id: string };

  const post = await Post.findById(req.id);

  if (!post) createError({ status: 404, msg: '找不到文章' });

  const ret: GetPostDetailRes = {
    status: 200,
    msg: 'ok',
    data: post,
  };

  ctx.body = ret;
};
