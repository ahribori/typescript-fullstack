import * as Router from 'koa-router';
import todoRouter from './todo';

const router = new Router();

router.get('/', async ctx => {
    ctx.body = 'api';
})

router.use('/todo', todoRouter.routes());

export default router;