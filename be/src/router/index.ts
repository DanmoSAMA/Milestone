import * as Router from 'koa-router';
import { postRouter } from "./post";

const router = new Router();

router
  .use("/post", postRouter.routes())

export default router;
