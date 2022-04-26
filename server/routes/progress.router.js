const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');


// router.get('/:id', (req, res) => {
//     const query = `SELECT COUNT(*) FROM "history" WHERE "date" BETWEEN (NOW() - interval '7 day') AND NOW() AND "id"=$1;`
  
//     pool.query(query, [req.user.id])
//       .then((results) => res.send(results.rows))
//       .catch((err) => {
//         console.log('Error in workout GET', err);
//       })
//   })

  module.exports = router;