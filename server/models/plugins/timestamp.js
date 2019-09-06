module.exports = function timestamp(schema) {
  // Add the two fields to the schema
  schema.add({
    createdAt: Date,
    updatedAt: Date
  });
  // Create a pre-save hook
  schema.pre('save', function(next) {
    const now = Date.now()

    this.updatedAt = now;

    //set value for createdAt only if it is null
    if(!this.createdAt){
      this.createdAt = now;
    }

    //Call next function in the pre-save chain
    next();
  });
}


/*

let timestampPlugin = require('./plugins/timestamp')
emailSchema.plugin(timestampPlugin)
userSchema.plugin(timestampPlugin)
*/
