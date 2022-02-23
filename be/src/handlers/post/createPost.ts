import { Middleware } from 'koa';

import { createError } from '../../middleware/useHandleError';
import { CreatePostReq, HttpRes } from '../../models';
import { Post } from '../../models/post';

export const createPost: Middleware = async (ctx) => {
  const req = ctx.request.body as CreatePostReq;

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

  const newPost = new Post(req);

  await newPost.save();

  // res.data 必须满足这种写法，否则在 request.ts 的校验中会出问题
  const ret: HttpRes = {
    status: 200,
    msg: 'ok',
    data: { id: newPost._id },
  };

  ctx.body = ret;
};
