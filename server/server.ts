import * as Koa from 'koa';
import * as Router from 'koa-router';

const serve = require('koa-static');
const path = require('path');

const app = new Koa();



app.use(async (ctx, next) => {
    // Log the request to the console
    console.log('Url:', ctx.url);
    // Pass the request to the next middleware function
    await next();
});

const router = new Router();


router.get('/api', async (ctx) => {
    ctx.body = 'Hello world!';
});

app.use(serve(path.resolve('../client/build')));

app.use(router.routes());

app.listen(8080);

console.log('Server running on port 8080');