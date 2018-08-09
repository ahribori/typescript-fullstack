import * as Router from 'koa-router';
import { printTodo } from '../service/todo';
import { Todo } from '../types/todo'

const router = new Router();

router.get('/', async (ctx) => {
    ctx.body = 'todo';
});

router.get('/:id', async (ctx) => {
    const { id } = ctx.params;
    printTodo({
        id,
        title: 'abc',
        done: false,
    })
    ctx.body = id;
});

router.post('/', async (ctx) => {
    const payload = ctx.request.body as Todo;
    printTodo({
        id: 1,
        title: payload.title,
        done: false,
    })
});

router.put('/:id', async (ctx) => {
    const { id } = ctx.params;
    ctx.body = id;
});

router.delete('/:id', async (ctx) => {
    const { id } = ctx.params;
    ctx.body = id;
});

export default router;