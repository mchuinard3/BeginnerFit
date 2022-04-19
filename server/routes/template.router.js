const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
 router.get('/', rejectUnauthenticated, (req, res) => {
  const query = `SELECT * FROM "exercises";`

  pool.query(query)
    .then((results) => res.send(results.rows))
    .catch((err) => {
      console.log('Error in workout GET', err);
    })
})

router.get('/:id', rejectUnauthenticated, (req, res) => {
  const query = `SELECT * FROM "exercises" WHERE "id" = $1;`

  pool.query(query, [req.params.id])
    .then((results) => res.send(results.rows))
    .catch((err) => {
      console.log('Error in workout GET', err);
    })
})

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
