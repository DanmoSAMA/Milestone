import { Middleware } from 'koa'
import { createError } from '../../middleware/useHandleError'
import { CreatePostReq, HttpRes } from '../../models'
import { Post } from '../../models/post'
import { Tag } from '../../models/tag'

export const createPost: Middleware = async (ctx) => {
  const req = ctx.request.body as CreatePostReq

  // 校验文章的标题和内容
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

  // 找到当前已有tags
  // $in：只要和req.tags数组中的值匹配，document就会被匹配
  const existingTags =
    (await Tag.find({
      name: {
        $in: req.tags
      }
    })) || []

  // 新添加的 tag
  const newTagNames = req.tags.filter(
    (name) => !existingTags.find((tag) => tag.name === name)
  )

  // 创建新的 tag
  await Tag.insertMany(newTagNames.map((name) => ({ name })))

  // 设置用过的每个 tag 的使用次数 ++
  // https://www.docs4dev.com/docs/zh/mongodb/v3.6/reference/reference-method-db.collection.initializeUnorderedBulkOp.html
  const bulk = Tag.collection.initializeUnorderedBulkOp()
  bulk
    .find({
      name: {
        $in: existingTags.map((t) => t.name)
      }
    })
    .update({ $inc: { count: 1 } })
    .execute()

  // 将文章存入数据库
  const newPost = new Post(req)
  await newPost.save()

  // res.data 必须满足这种写法，否则在 request.ts 的校验中会出问题
  const ret: HttpRes = {
    status: 200,
    msg: 'ok',
    data: { id: newPost._id }
  }

  ctx.body = ret
}
