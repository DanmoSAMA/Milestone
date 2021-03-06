import { Middleware } from 'koa'

import { Post as PostBrief } from '../../../../fe/shared/models/post'
import { GetPostsReq, GetPostsRes } from '../../models'
import { Post } from '../../models/post'

export const getAllPosts: Middleware = async (ctx) => {
  const { page, kw } = ctx.request.query as GetPostsReq

  const pageNum = parseInt(page)

  const posts: PostBrief[] = await (await Post.find()).reverse()
  // 根据kw筛选文章
  const filteredPosts: PostBrief[] = kw
    ? posts.filter(
        (item) =>
          item.tags.find((item) => item === kw) || item.title.indexOf(kw) !== -1
      )
    : posts

  const postsPerPageCnt = 8

  const data = {
    posts: filteredPosts.slice(
      pageNum * postsPerPageCnt,
      (pageNum + 1) * postsPerPageCnt
    ),
    filteredCnt: filteredPosts.length
  }

  const ret: GetPostsRes = {
    status: 200,
    msg: 'ok',
    data: data
  }

  ctx.body = ret
}
