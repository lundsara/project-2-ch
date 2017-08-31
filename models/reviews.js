const db = require('../db/config');

const Review = {};

// execute pgp with our db config, so a connection is made.
// const db = pgp(dbConfig);

module.exports = {
  /**
   * @func findAll
   * @desc search through all the quotes
   * @returns {Promise}
   * @hint this
   */
  findAll() {
    return db.many(`
      SELECT *
        FROM reviews
    ORDER BY id
    `);
  },

  /**
   * @func findById
   * @param id {number} the ID of the quote to search for
   * @desc search through the quotes and find by an ID
   * @returns {Promise}
   */
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
      (className, instructor, level, review)
      VALUES
      ($1, $2, $3)
      RETURNING *
    `, [review.className, review.instructor, review.level, review.review_id]);
  },

  update(review, id) {
    console.log(review, id);
    return db.one(`
      UPDATE reviews
      SET
      className = $1,
      instructor = $2,
      level = $3,
      review = $4
      WHERE id = $5
      RETURNING *
    `, [review.className, review.instructor, review.level, review.review_id, id]);
  },

  /**
   * Removes one quote from DB
   * @param {number} id - the id of a quote
   * @returns {Promise}
   */
  destroy(id) {
    return db.none(`
      DELETE
        FROM reviews
       WHERE id = $1
    `, id);
  },
};













