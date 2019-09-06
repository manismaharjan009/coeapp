const mongoose =  require('mongoose');
const timestampPlugin = require('./plugins/timestamp');
const Schema = mongoose.Schema;


const MemberSchema =  new Schema({
  fullname: {
    type: String,
    required: [true, 'Your name is required.']
  },
  /* designation: {
    type: Schema.Types.ObjectId,
    ref: 'Designation'
  }, */
  // profileImage: Buffer,
  role: {
    type: String,
    required: [true, 'Assign you role.']
  },
  description: {
    type: String,
    trim: true
  }
});

MemberSchema.plugin(timestampPlugin, {index: true});
module.exports =  mongoose.model('Member', MemberSchema);