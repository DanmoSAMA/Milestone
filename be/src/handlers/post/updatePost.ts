import { Middleware } from 'koa-router'
import { createError } from '../../middleware/useHandleError'
import { HttpRes, UpdatePostReq } from '../../models'
import { Post } from '../../models/post'
import { Tag } from '../../models/tag'
import { AMinusB } from '../../utils/set'

export const updatePost: Middleware = async (ctx) => {
  const req = ctx.request.body as UpdatePostReq

  if (!req.content)
    createError({
      status: 400,
      msg: '文章内容为空'
    })

  if (!req.title)
    createError({
      status: 400,
      msg: '文章标题为空'
    })

  const { id } = ctx.params

  const post = await Post.findOne({ _id: id }).catch((e) => null)

  if (!post) createError({ msg: '找不到文章', status: 404 })

  post.title = req.title
  post.content = req.content

  const oldTags = new Set(post.tags.map((t) => t.name))
  const newTags = new Set(req.tags)
  // old有，new无
  const deletedTags = AMinusB(oldTags, newTags)
  // old无，new有
  const addedTags = AMinusB(newTags, oldTags)

  // 找到文章 tag 中已有的部分
  const existingTags = await Tag.find({
    name: {
      $in: [...newTags]
    }
  })
  // 找到全新添加的 tag
  const nonExistingTagNames = [...newTags].filter(
    (name) => !existingTags.find((tag) => tag.name === name)
  )
  // 创建新的 tag
  const createdTags = await Tag.insertMany(
    nonExistingTagNames.map((name) => ({ name, count: 0 }))
  )

  await post.save()

  // 设置tag的出现次数
  const bulk = Tag.collection.initializeUnorderedBulkOp()
  bulk
    .find({
      name: {
        $in: deletedTags
      }
    })
    .update({ $inc: { count: -1 } })
    .find({
      name: {
        $in: addedTags
      }
    })
    .update({ $inc: { count: 1 } })
    .execute()

  const ret: HttpRes = {
    status: 200,
    msg: 'ok',
    data: { id: post.id }
  }

  ctx.body = ret
}
