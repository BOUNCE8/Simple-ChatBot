const { mongoose } = require('./index');
const { Schema } = mongoose;

const chatLogSchema = new Schema ({
  authorId: Boolean,
  content: String,
  timestamp: Number
});

const ChatLog = mongoose.model('ChatLog', chatLogSchema);

module.exports = ChatLog
