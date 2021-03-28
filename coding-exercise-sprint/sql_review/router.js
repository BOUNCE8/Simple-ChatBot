const KoaRouter = require('koa-router');
const controller = require('./controllers/messages');

const router = new KoaRouter();

router.get('/messages', controller.getMessages);
router.post('/messages', controller.postMessage);

module.exports = router;
