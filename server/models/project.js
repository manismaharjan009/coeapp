const mongoose = require('mongoose');
const timestampPlugin = require('./plugins/timestamp');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Project name is required']
  },
  shortname: {
    type: String,
    required: [true, 'Project short name is required']
  },
  description: {
    type: String,
    trim: true
  }
});

ProjectSchema.plugin(timestampPlugin, { index: true });
module.exports = mongoose.model('Project', ProjectSchema);