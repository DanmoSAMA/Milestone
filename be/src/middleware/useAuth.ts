import { Middleware } from 'koa-router'

import { HttpRes } from '../models'
import { createError } from './useHandleError'

export function useAuth(hasFollowing = true): Middleware {
  return async (ctx, next) => {
    // 前端已经加密过的密码
    const auth = ctx.headers.authorization

    if (!auth) return createError({ status: 401, msg: '密码错误' })

    // 后端再摘要比较一次
    if (
      auth !==
      '081cd1fa0f49344ba4710cfaf4578bdedc7b8ab184cceb5bd5ac689e98a97b8e'
    ) {
      return createError({ status: 401, msg: '密码错误' })
    } else {
      if (hasFollowing) {
        return await next()
      } else {
        ctx.body = {
          status: 200,
          msg: 'ok',
          data: {}
        } as HttpRes
        return
      }
    }
  }
}
