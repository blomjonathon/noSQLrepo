const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thoughtSchema = new Schema({
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema] 
  });
  
  thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

  const reactionSchema = new Schema({
    reactionBody: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

  thoughtSchema.virtual('formattedCreatedAt').get(function() {
    return this.createdAt.toDateString();
  });
  
  const Thought = mongoose.model('Thought', thoughtSchema);
  
  module.exports = Thought;