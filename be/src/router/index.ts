import * as Router from 'koa-router';

import { useAuth } from '../middleware/useAuth';
import { postRouter } from './post';

const router = new Router();

router
  .use('/post', postRouter.routes())
  .get('/login', useAuth(false));

export default router;
