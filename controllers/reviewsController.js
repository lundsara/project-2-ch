const reviewDB = require('../models/reviews');
var request = require('request');
require('dotenv').config();
const API_SECRET_KEY = process.env.API_SECRET_KEY;


module.exports = {


  makeEmptyReview(req, res) {
    res.json({
      id:  null,
      studio: '',
      className:  null,
      instructor:  null,
      level:  null,
      review: null,
    });
  },

//method to display the index page
  index(req, res, next) {
    console.log('in controller.index');
    reviewDB.findAll()
      .then((reviews) => {
        console.log(reviews);
        res.locals.reviews = reviews;
        next();
      })
      .catch(err => next(err));
  },

//method to pull out a single review
  getOne(req, res, next) {
    reviewDB.findById(req.params.id)
      .then((review) => {
        res.locals.review = review;
        next();
      })
      .catch(err => next(err));
  },

//method to create reviews
  create(req, res, next) {
    console.log('here');
    reviewDB.create(req.body)
      .then((review) => {
        res.locals.review = review;
        next();
      })
      .catch(err => next(err));
  },

//method to update reviews
  update(req, res, next) {
    reviewDB.update(req.body, req.params.id)
      .then((review) => {
        res.locals.review = review;
        next();
      })
      .catch(err => next(err));
  },

//method to destroy reviews
  destroy(req, res, next) {
    reviewDB.destroy(req.params.id)
      .then(() => next())
      .catch(err => next(err));
  },


//method to show review form
  showReviewForm: (req, res) => {
    res.json({message: 'I’m the form for new Reviews. I post to /reviews'});
  },


};
