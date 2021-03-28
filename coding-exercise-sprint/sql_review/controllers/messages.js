const messageModel = require('../models/messages');

const getMessages = async ctx => {
  try {
    const messages = await messageModel.getAll(ctx);
    const withFixedTime = messages.map(el => {
      el.timestamp = +el.timestamp;
      return el;
    });
    ctx.body = withFixedTime;
    ctx.status = 200;
  } catch (e) {
    ctx.body = e;
    ctx.status = 500;
  }
};

const postMessage = async ctx => {
  try {
    const savedMessage = await messageModel.saveOne(ctx.request.body);
    ctx.body = savedMessage.rows;
    ctx.status = 201;
  } catch (e) {
    ctx.body = e;
    ctx.status = 500;
  }
};

module.exports = { getMessages, postMessage };
