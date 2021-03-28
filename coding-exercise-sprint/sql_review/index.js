
const Koa = require('koa');
const serve = require('koa-static');;
const bodyParser = require('koa-bodyParser');

const router = require('./router');

const app = new Koa();

app.use(serve(__dirname + '/../../client'));
app.use(bodyParser());
app.use(router.routes());

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening @ http://localhost:${PORT}`));
