const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const DesignationSchema =  new Schema({
  name: {
    type: String,
    required: [true, 'Designation is required']
  }
});

module.exports = mongoose.model('Designation', DesignationSchema);