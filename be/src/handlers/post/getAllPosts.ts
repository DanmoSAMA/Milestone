import { Middleware } from 'koa';

import { Post as PostBrief } from '../../../../fe/shared/models/post';
import { GetPostsRes } from '../../models';
import { Post } from '../../models/post';

export const getAllPosts: Middleware = async (ctx) => {
  const posts: PostBrief[] = await Post.find();

  const ret: GetPostsRes = {
    status: 200,
    msg: 'ok',
    data: posts,
  };

  ctx.body = ret;
};
