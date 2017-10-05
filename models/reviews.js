const db = require('../db/config');

//export all db query methods as one object
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
      (studio, classname, instructor, level, review)
      VALUES
      ($1, $2, $3, $4, $5)
      RETURNING *
    `, [review.studio, review.classname, review.instructor, review.level, review.review]);
  },

  update(review, id) {
    console.log(review, id);
    return db.one(`
      UPDATE reviews
      SET
      studio = $1
      classname = $2,
      instructor = $3,
      level = $4,
      review = $5
      WHERE id = $6
      RETURNING *
    `, [review.studio, review.classname, review.instructor, review.level, review.review, id]);
  },


  destroy(id) {
    return db.none(`
      DELETE
        FROM reviews
       WHERE id = $1
    `, id);
  },
};



