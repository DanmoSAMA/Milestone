import { Middleware } from 'koa-router'
import { HttpRes } from '../../models'
import { Post } from '../../models/post'
import { Tag } from '../../models/tag'

export const deletePost: Middleware = async (ctx) => {
  const { id } = ctx.params as { id: string }

  const post = await Post.findOne({ _id: id })

  const bulk = Tag.collection.initializeUnorderedBulkOp()
  bulk
    .find({
      name: {
        $in: post.tags
      }
    })
    .update({ $inc: { count: -1 } })
    .execute()

  post.delete()

  const ret: HttpRes = {
    status: 200,
    msg: 'ok',
    data: {}
  }

  ctx.body = ret
}
