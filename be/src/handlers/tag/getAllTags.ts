import { Middleware } from 'koa-router'

import { GetTagsRes } from '../../models'
import { Tag } from '../../models/tag'

export const getAllTags: Middleware = async (ctx) => {
  const tags = await Tag.find()

  const ret: GetTagsRes = {
    status: 200,
    msg: 'ok',
    data: tags
  }

  ctx.body = ret
}
