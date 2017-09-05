const options = {
  query: (e) => {
    console.log(e.query);
  }
};

//require pg promise dependency for the app
const pgp = require('pg-promise')(options);

let db;
//require pg promise dependency for the app
if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  db = pgp({
    database: 'reviews_dev',
    port: 5432,
    host: 'localhost',
  });
  //if the node environment is in production then request the db url
} else if (process.env.NODE_ENV === 'production') {
  db = pgp(process.env.DATABASE_URL);
}
//export the database
module.exports = db;
