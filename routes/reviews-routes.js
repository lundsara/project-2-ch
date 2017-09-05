const express =require('express');
const controller = require('../controllers/reviewsController');
const views = require('../controllers/viewsController');
const reviewsRouter = express.Router();




reviewsRouter.get('/:id/edit', controller.getOne, views.showEditForm, views.show404);
reviewsRouter.get('/new', views.showAddForm);

reviewsRouter.route('/:id')
.get (controller.getOne, views.showOne, views.show404)
.put(controller.update, views.handleUpdate, views.show406)
.delete(controller.destroy, views.handleDelete, views.show406);

reviewsRouter.route('/')
.get(controller.apiCall, controller.index, views.showReviews, views.show404)
.post(controller.create, views.handleCreate, views.show406);



module.exports = reviewsRouter;
