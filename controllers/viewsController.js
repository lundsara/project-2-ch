module.exports = {

//method handle a 404 error
  show404(err, req, res, next) {
    res.sendStatus(404);
  },
//method handle a 406 error
  show406(err, req, res, next) {
    res.sendStatus(406);
  },

//method to produce view of homepage
  showHome(req, res) {
    res.render('reviews/reviews-homepage', {
      data: res.locals.reviews,
      name: res.locals.name,
      address: res.locals.address,
      rating: res.locals.rating
    });
  },

//method to produce view of reviews
  showReviews(req, res) {
     res.render('reviews/reviews-index', {
      data: res.locals.reviews,
    });
  },

//method to produce view of a selected review individually
  showOne(req, res) {
    console.log(res.locals)
    res.render('reviews/reviews-single', {
      data: res.locals.review,

    });
  },

//method handle view of creating a new review
  handleCreate(req, res) {
    res.redirect('/reviews');
  },

//method direct view for editing a selected review
  handleUpdate(req, res) {
    res.redirect(`/reviews/${req.params.id}`);
  },

//method direct view to homepage after deleting a review
  handleDelete(req, res) {
    res.redirect('/reviews');
  },
//method to produce view of add review form
  showAddForm(req, res) {
    res.render('reviews/reviews-add');
  },

//method to produce form to edit reviews
  showEditForm(req, res) {
    res.render('reviews/reviews-edit', {
      data: res.locals.review,
  });
},

};
