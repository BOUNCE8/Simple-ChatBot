const db = require('../db');

const getAll = async (ctx) => {

  const queryString = 'SELECT * FROM messages';
  const messages = await db.query(queryString);
  return messages.rows;
  
};

const saveOne = async msg => {
  const { content, authorId, timestamp } = msg;

  // const queryString = `INSERT INTO messages (
  //   content,
  //   "authorId",
  //   timestamp
  // ) VALUES (
  //   '${content}',
  //   ${authorId},
  //   ${timestamp}
  // );`;

  const queryString = `INSERT INTO messages (
    content,
    "authorId",
    timestamp
  ) VALUES (
    $1,
    $2,
    $3
  );`;

  const values = [content, authorId, timestamp];

  await db.query(queryString, values);
  return await db.query(`SELECT * FROM messages WHERE timestamp=${timestamp};`);

};

module.exports = { getAll, saveOne };
