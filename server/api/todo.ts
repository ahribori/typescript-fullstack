import * as Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx) => {
    ctx.body = 'todo';
});

router.get('/:id', async (ctx) => {
    const { id } = ctx.params;
    ctx.body = id;
});

router.post('/', async (ctx) => {

});

router.put('/id', async (ctx) => {
    const { id } = ctx.params;
    ctx.body = id;
});

router.delete('/id', async (ctx) => {
    const { id } = ctx.params;
    ctx.body = id;
});

export default router;