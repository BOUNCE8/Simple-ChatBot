const db = require('./index');

const findMessages = async function () {
  const result = await db.collection.find({}).toArray();
  // console.log(result)
  return result;
};

const postMessages = async function (msg) {
  
  const newMsg = await db.collection.insert({
    "authorId" : msg.authorId,
    "content" : msg.content,
    "timestamp" : msg.timestamp
  })
  console.log('TESTING: ',newMsg.ops[0]) 
  return newMsg.ops[0];
}

module.exports = {findMessages, postMessages};