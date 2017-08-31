module.exports = {

  show404(err, req, res, next) {
    res.sendStatus(404);
  },

  show406(err, req, res, next) {
    res.sendStatus(406);
  },

  showHome(req, res) {
    res.render('reviews/reviews-homepage', {
      data: res.locals.reviews
    });
  },

  showReviews(req, res) {
     res.render('reviews/reviews-index', {
      data: res.locals.reviews,
    });
  },

  showOne(req, res) {
    res.render('reviews/reviews-single', {
      data: res.locals.review,
    });
  },

  handleCreate(req, res) {
    res.redirect('/reviews');
  },

  handleUpdate(req, res) {
    res.redirect(`/reviews/${req.params.id}`);
  },

  handleDelete(req, res) {
    res.redirect('/reviews');
  },

  showAddForm(req, res) {
    res.render('reviews/reviews-add');
  },
  showEditForm(req, res) {
    res.render('reviews/reviews-edit', {
      data: res.locals.review,
  });
},

};
