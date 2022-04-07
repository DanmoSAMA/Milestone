import * as Router from 'koa-router'

import { createPost } from '../handlers/post/createPost'
import { deletePost } from '../handlers/post/deletePost'
import { getAllPosts } from '../handlers/post/getAllPosts'
import { getPostsCnt } from '../handlers/post/getPostsCnt'
import { getPostDetail } from '../handlers/post/getPostDetail'
import { updatePost } from '../handlers/post/updatePost'
import { useAuth } from '../middleware/useAuth'

export const postRouter = new Router()

postRouter
  .get('/cnt', getPostsCnt)
  .get('/:id', getPostDetail)
  .get('/', getAllPosts)
  // 后端校验
  .use(useAuth())
  .post('/', createPost)
  .put('/:id', updatePost)
  .delete('/:id', deletePost)
