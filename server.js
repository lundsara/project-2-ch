//require the use of express
const express = require('express');
//use morgan as the logger
const logger = require('morgan');
//require body parser to parse data
const bodyParser = require('body-parser');
//define and require path
const path = require ('path');
//define and require method override to update and delete
const methodOverride = require('method-override');
//define and require router
const reviewRouter = require('./routes/reviews-routes');

//define port
const PORT = process.env.PORT || 3000;
//method handle view of editing a review
const app = express();

app.set('views', path.join(__dirname, 'views'));
//require dotenv to hide use of api key
require ('dotenv')
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.use('/reviews', reviewRouter);

app.get('/', (req,res) => res.render('reviews/reviews-index', {
 message:'This is my class critique index page',
 data:[]
}));









app.listen(PORT);
// to prove it worked, print to the terminal
console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);

