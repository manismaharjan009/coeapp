const mongoose = require('mongoose');
const timestampPlugin = require('./plugins/timestamp');
const Schema = mongoose.Schema;

// const ProjectSchema = require('./project');

const ProjectUpdateSchema = new Schema({
  memberId: {
    type: Schema.Types.ObjectId,
    ref: 'Member'
  },
  projectId:{
    type: Schema.Types.ObjectId,
    ref: 'Project'
  },
  updates: {
    type: String,
    trim: true
  },
  accomplishment: {
    type: String,
    trim: true
  },
  problems: {
    type: String,
    trim: true
  }
});

ProjectUpdateSchema.plugin(timestampPlugin, { index: true });
module.exports = mongoose.model('ProjectUpdate', ProjectUpdateSchema);