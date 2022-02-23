import * as Router from "koa-router";

import { createPost } from "../handlers/post/createPost";

export const postRouter = new Router();

postRouter
  .post("/", createPost)