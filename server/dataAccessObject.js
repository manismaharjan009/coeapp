
module.exports = (model) => {
  const operations =  {
    create: (record, callback) => {
      record.save(callback)
    },
    update: (query, record, callback) => {
      model.findByIdAndUpdate(query, record, {new: true}, callback);
    },
    delete: (query, callback) => {
      // model.findByIdAndRemove(query, callback);
      model.findOneAndRemove(query, callback);
    },
    getAll: (callback) => {
      model.find(callback);
    },
    getByQuery: (query, callback) => {
      model.find(query, callback);
    },
    getById: (id, callback) => {
      model.findById(id, callback);
    }
  }

  return operations;

} ;
