const mongoose = require('mongoose');
const Schema = mongoose.Schema

var topicSchema = Schema({
  
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