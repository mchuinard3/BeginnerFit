const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

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

router.post('/', rejectUnauthenticated, (req, res) => {

  const query = `INSERT INTO "history" ("user_id", "exercise_1", "exercise_2", "exercise_3", "exercise_4", "weight_used_1", "weight_used_2", "weight_used_3", "weight_used_4", "date")
                  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`;
  const values = [req.user.id, req.body.exercise_1, req.body.exercise_2, req.body.exercise_3, req.body.exercise_4, req.body.weight_used_1, req.body.weight_used_2, req.body.weight_used_3, req.body.weight_used_4, req.body.date];
  console.log(values)
  pool.query(query, values)
    .then(result => {
      res.sendStatus(201);
    }).catch(err => {
      console.log('Error in post', err);
    })

});

module.exports = router;
