const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require ('path');
const methodOverride = require('method-override');
const reviewRouter = require('./routes/reviews-routes');


const PORT = process.env.PORT || 3000;
const app = express();

app.set('views', path.join(__dirname, 'views'));
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

