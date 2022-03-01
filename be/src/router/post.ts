import * as Router from 'koa-router';

import { createPost } from '../handlers/post/createPost';
import { deletePost } from '../handlers/post/deletePost';
import { getAllPosts } from '../handlers/post/getAllPosts';
import { getPostDetail } from '../handlers/post/getPostDetail';
import { updatePost } from '../handlers/post/updatePost';

export const postRouter = new Router();

postRouter
  .post('/', createPost)
  .get('/:id', getPostDetail)
  .get('/', getAllPosts)
  .delete('/:id', deletePost)
  .put('/:id', updatePost);
