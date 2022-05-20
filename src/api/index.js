const Router = require('koa-router');
const posts = require('./posts');
const bodyParser = require('koa-bodyparser');

const api = new Router();

api.use('/posts', posts.routes());

//라우터를 내보냅니다.
module.exports = api;
