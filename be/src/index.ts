import * as Koa from 'koa'
import * as BodyParser from 'koa-bodyparser'
import * as Cors from 'koa-cors'
import * as Logger from 'koa-logger'

import { setupMongo } from './models'
import router from './router/index'

setupMongo()

const app = new Koa()

app
  .use(Logger())
  .use(Cors())
  .use(BodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

  .listen(8080, () => {
    console.log('Server is running at 127.0.0.1:8080')
  })
