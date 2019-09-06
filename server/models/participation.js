const mongoose = require('mongoose');
const timestampPlugin = require('./plugins/timestamp');
const Schema =  mongoose.Schema;

const ParticipantSchema = new Schema({
  memberId: {
    type: Schema.Types.ObjectId,
    ref: "Member"
  },
  topic: {
    type: String,
    required: [true, 'Topic is required']
  },
  description: {
    type: String,
    trim: true
  },
  reference: {
    type: String,
    trim: true
  },
  status: String
});

ParticipantSchema.plugin(timestampPlugin, { index: true });
module.exports =  mongoose.model('Participant', ParticipantSchema);