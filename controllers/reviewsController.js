const reviewDB = require('../models/reviews');
var request = require('request');
require('dotenv').config();
const API_SECRET_KEY = process.env.API_KEY;


module.exports = {


 apiCall (req, res, next) {


let url =`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.7411088,-73.9888796&radius=500&type=fitness&keyword=uplift&key=AIzaSyBYFJ9eFjobee23255a1OH49SOgqsnAqoE`
request(url, function (error, response, body) {

  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('name:', body); // Print the HTML for the Google homepage.
  const parsed = JSON.parse(body);
  console.log('name------------->', typeof(parsed));
  res.locals.name = parsed.results[0].name;
  res.locals.address = parsed.results[0].vicinity;
  res.locals.rating = parsed.results[0].rating;
 next();
});

},



  makeEmptyReview(req, res) {
    res.json({
      id:  null,
      className:  null,
      instructor:  null,
      level:  null,
      review: null,
    });
  },

//method to display the index page
  index(req, res, next) {
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
