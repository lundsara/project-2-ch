const db = require('../db/config');
//const pgp = require('pg-promise')();

// execute pgp with our db config, so a connection is made.
//const db = pgp(dbConfig);

module.exports = {

  findAll() {
    console.log('in find all');
    return db.many(`
      SELECT *
        FROM reviews

    `);
  },

  findById(id) {
    return db.one(`
      SELECT *
        FROM reviews
       WHERE id = $1
    `, id);
  },

  create(review) {
    return db.one(`
      INSERT INTO reviews
      (classname, instructor, level, review)
      VALUES
      ($1, $2, $3, $4)
      RETURNING *
    `, [review.classname, review.instructor, review.level, review.review]);
  },

  update(review, id) {
    console.log(review, id);
    return db.one(`
      UPDATE reviews
      SET
      classname = $1,
      instructor = $2,
      level = $3,
      review = $4
      WHERE id = $5
      RETURNING *
    `, [review.classname, review.instructor, review.level, review.review, id]);
  },


  destroy(id) {
    return db.none(`
      DELETE
        FROM reviews
       WHERE id = $1
    `, id);
  },
};



