const reviewDB = require('../models/reviews');

module.exports = {

  makeEmptyReview(req, res) {
    res.json({
      id:  null,
      className:  null,
      instructor:  null,
      level:  null,
      review: null,
    });
  },


  index(req, res, next) {
    reviewDB.findAll()
      .then((reviews) => {
        console.log(reviews);
        res.locals.reviews = reviews;
        next();
      })
      .catch(err => next(err));
  },


  getOne(req, res, next) {
    reviewDB.findById(req.params.id)
      .then((review) => {
        res.locals.review = review;
        next();
      })
      .catch(err => next(err));
  },


  create(req, res, next) {
    console.log('here');
    reviewDB.create(req.body)
      .then((review) => {
        res.locals.review = review;
        next();
      })
      .catch(err => next(err));
  },


  update(req, res, next) {
    reviewDB.update(req.body, req.params.id)
      .then((review) => {
        res.locals.review = review;
        next();
      })
      .catch(err => next(err));
  },


  destroy(req, res, next) {
    reviewDB.destroy(req.params.id)
      .then(() => next())
      .catch(err => next(err));
  },



  showQuoteForm: (req, res) => {
    res.json({message: 'I’m the form for new Reviews. I post to /reviews'});
  },


};
