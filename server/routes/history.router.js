const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    const query = `SELECT b.workout_name, a.* FROM "history" a JOIN "exercises" b ON a.exercise_1 =b.exercise_1 ORDER BY "date" DESC;`

      pool.query(query)
      .then((results) => res.send(results.rows))
      .catch((err) => {
        console.log('Error in workout GET', err);
      })
  })

  router.delete('/:id', (req, res) => {
    
    const id = req.params.id;
    console.log('router DELETE id:', id);
  
  
    const query = `DELETE FROM "history" WHERE "history".id =$1;`;
    values = [id];
    pool.query(query, values)
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error completing DELETE', err);
        res.sendStatus(500);
      });
  });


module.exports = router;

