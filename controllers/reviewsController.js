const reviewDB = require('../models/reviews');

/**
 * Create a QuoteController
 */
module.exports = {
  /**
   * Create a blank Quote and set it in res.locals
   * @param {req} req - Node's Request Object
   * @param {res} res - Node's Response Object
   * @param {next} next - The next middleware function in our route
   * @return {undefined}
   */
  makeEmptyReview(req, res) {
    res.json({
      id:  null,
      className:  null,
      instructor:  null,
      level:  null,
      review: null,
    });
  },


  /**
   * Middleware function:
   * Get all the quotes and set them in res.locals
   * @param {req} req - Node's Request Object
   * @param {res} res - Node's Response Object
   * @param {next} next - The next middleware function in our route
   * @return {undefined}
   */
  index(req, res, next) {
    reviewDB.findAll()
      .then((reviews) => {
        console.log(reviews);
        res.locals.reviews = reviews;
        next();
      })
      .catch(err => next(err));
  },

  /**
   * Read One Middleware:
   * Get a quote from the DB and set it in res.locals
   * @param {req} req - Node's Request Object
   * @param {res} res - Node's Response Object
   * @param {next} next - The next middleware function in our route
   * @return {undefined}
   */
  getOne(req, res, next) {
    reviewDB.findById(req.params.id)
      .then((review) => {
        res.locals.review = review;
        next();
      })
      .catch(err => next(err));
  },

  /**
   * Create Middleware:
   * Get quote data from the front-end and set it in the DB
   * Sets the results of the insertion into res.locals.quote
   * @param {req} req - Node's Request Object
   * @param {res} res - Node's Response Object
   * @param {next} next - The next middleware function in our route
   * @return {undefined}
   */
  create(req, res, next) {
    reviewDB.create(req.body)
      .then((review) => {
        res.locals.review = review;
        next();
      })
      .catch(err => next(err));
  },

  /**
   * Update Middleware:
   * Get quote data from the DB;
   * Merge the data from the front-end;
   * Set it in the DB;
   * @param {req} req - Node's Request Object
   * @param {res} res - Node's Response Object
   * @param {next} next - The next middleware function in our route
   * @return {undefined}
   */
  update(req, res, next) {
    reviewDB.update(req.body, req.params.id)
      .then((review) => {
        res.locals.review = review;
        next();
      })
      .catch(err => next(err));
  },

  /**
   * @func destroy
   * @desc Destroy the quote at this id
   * @param {req} req - Node's Request Object
   * @param {res} res - Node's Response Object
   * @param {next} next - The next middleware function in our route
   * @return {undefined}
   */
  destroy(req, res, next) {
    reviewDB.destroy(req.params.id)
      .then(() => next())
      .catch(err => next(err));
  },


  /**
   * @func showNewForm
   * @desc Show a blank HTML form
   * @param {req} req - Node's Request Object
   * @param {res} res - Node's Response Object
   * @param {next} next - The next middleware function in our route
   * @return {undefined}
   */
  showQuoteForm: (req, res) => {
    res.json({message: 'I’m the form for new Reviews. I post to /reviews'});
  },


};
