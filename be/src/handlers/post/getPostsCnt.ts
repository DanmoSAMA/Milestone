import { Middleware } from 'koa'

import { Post as PostBrief } from '../../../../fe/shared/models/post'
import { GetPostsCntRes } from '../../models'
import { Post } from '../../models/post'

export const getPostsCnt: Middleware = async (ctx) => {
  ctx.set('Access-Control-Allow-Origin', '*')

  const posts: PostBrief[] = await Post.find()

  const ret: GetPostsCntRes = {
    status: 200,
    msg: 'ok',
    data: posts.length
  }

  ctx.body = ret
}
