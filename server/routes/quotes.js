const express =  require('express');
const router = express.Router();
const Quotes = require('../models');

  // Get all quotes
  router.get('/getQuotes', (req, res, next) => {
    QuotesDAO.getAll((err, quotes) => err ? next(err) : res.json(quotes));
  });


  // Get single quote
  router.get('/getQuoteById/:id', (req, res, next) => {
    QuotesDAO.getById(req.params.id, (err, quote) => err ? next(err) : res.json(quote));
  });

  // Post new quote
  router.post('/createQuote', (req, res, next) => {
    const { quote, author } = req.body
    const newQuote = new Quotes({
      quote,
      author
    });
    QuotesDAO.create(newQuote, (err, quote) => err ? next(err) : res.json(newQuote));
    // res.json({success:true, message: "Added successfully."});
  });

  //Update the existing record
  router.put('/updateQuote/:id', (req, res, next) => {
    const message = {
      message: 'Record successfully updated.'
    }
    QuotesDAO.update(req.params.id, req.body, (err, quote) => err ? next(err) : res.json(message));
  });

  //Delete the quote record
  router.delete('/deleteQuote/:id', (req, res, next) => {
    const message = {
      message: 'Record successfully deleted.'
    };
    QuotesDAO.delete(req.param.id, (err, quote) => err ? next(err) : res.json(quote));
  });

module.exports = router;
