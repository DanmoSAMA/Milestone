import * as Router from 'koa-router';
import { postRouter } from './post';
import { useAuth } from '../middleware/useAuth';

const router = new Router();

router
  .use('/post', postRouter.routes())
  .get('/login', useAuth(false));

export default router;
