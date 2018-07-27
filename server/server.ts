import * as Koa from "koa";
import * as Router from "koa-router";
import apiRouter from './api';

const serve = require("koa-static");
const path = require("path");
const app = new Koa();
const router = new Router();

router.use('/api', apiRouter.routes());

app.use(serve(path.resolve("../client/build")));
app.use(router.routes());
app.listen(8080);

console.log("Server running on port 8080");
