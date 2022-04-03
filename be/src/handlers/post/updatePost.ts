import { Middleware } from 'koa-router';

import { createError } from '../../middleware/useHandleError';
import { HttpRes, UpdatePostReq } from '../../models';
import { Post } from '../../models/post';

export const updatePost: Middleware = async (ctx) => {
  const req = ctx.request.body as UpdatePostReq;

  if (!req.content)
    createError({
      status: 400,
      msg: '文章内容为空',
    });

  if (!req.title)
    createError({
      status: 400,
      msg: '文章标题为空',
    });

  const { id } = ctx.params;

  const post = await Post.findById(id);

  post.title = req.title;
  post.content = req.content;
  post.tags = req.tags;

  await post.save();

  const ret: HttpRes = {
    status: 200,
    msg: 'ok',
    data: { id: post.id },
  };

  ctx.body = ret;
};
