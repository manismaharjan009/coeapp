const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// TODO Divide these schemas seperate file

/*  NOTE : References
  1. https://medium.freecodecamp.org/introduction-to-mongoose-for-mongodb-d2a7aa593c57

*/

/* NOTE
  Mongo        SQL
  Collection ~ Tables
  Documents  ~ Records/Rows of data
  Fields     ~ Columns
  Models     ~
  Schema     ~ Records

*/



const ApplicationSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  amount: {
    type: Number,
    required: true
  }
})

const QuotesSchema = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  address: {
    type: String
  },
  size: {
    type: Number,
    required: true
  },
  applications: [ApplicationSchema]
})

const Quotes = module.exports = mongoose.model('Quotes', QuotesSchema);

module.exports.getAllQuotes = (callback) => {
  Quotes.find(callback);
}

module.exports.getQuote = (id, callback) => {
  Quotes.findById(id, callback);
}

module.exports.addQuote = (newQuote, callback) => {
  newQuote.save(callback);
}

module.exports.updateQuote = (id, quote, callback) => {
  Quotes.findByIdAndUpdate(id, quote, callback);
}

module.exports.deleteQuote = (id, callback) => {
  Quotes.findByIdAndRemove(id, callback);
}
