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
// router.post('/', rejectUnauthenticated, (req, res) => {
//   // endpoint functionality
//   const query = `INSERT INTO "history" ("user_id", "exercises_id", "weight_used", "date")
//                   VALUES ($1, $2, $3, $4);`;

//   const values = [req.body.user_id, req.body.exercises_id, req.body.weight_used, req.body.date]
//   pool.query(query, values)
//     .then(result => {
//       res.sendStatus(201);
//     }).catch(err => {
//       console.log('Error in post', err);
//     })
// });

module.exports = router;
