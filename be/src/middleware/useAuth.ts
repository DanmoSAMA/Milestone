import { Middleware } from 'koa-router'
import * as sha256 from 'sha256'
import { HttpRes } from '../models'
import { createError } from './useHandleError'

export function useAuth(hasFollowing = true): Middleware {
  return async (ctx, next) => {
    // 前端已经加密过的密码
    const auth = ctx.headers.authorization

    if (!auth) return createError({ status: 401, msg: '密码错误' })

    // 二次加密，避免token被复制，导致冒用
    // 也可以用fs读取一个配置文件里的token值，该文件不传github
    if (
      sha256(auth) !==
      '669dcf8df1213cfedddd7d32485e3fef8770a74d33046d85b1d50f0d3582131f'
    ) {
      return createError({ status: 401, msg: '密码错误' })
    }
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
