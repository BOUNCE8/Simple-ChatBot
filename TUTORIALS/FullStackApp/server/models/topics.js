const mongoose = require('./index');
const Schema = mongoose.Schema

const topicSchema = Schema({
  
  title: {
    type: String,
    required: true
  },
  published_at: {
    type: String,
    default: new Date().toISOString()
  },
  score: {
    type: Number,
    default: 0
  }
})

const TopicSchema = mongoose.model('topics', topicSchema);
module.exports = TopicSchema