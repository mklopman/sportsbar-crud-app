const express = require('express');
const router = express();
const barModel = require('../models/bar');



 // get map in bar view
router.get('/users/bar', (req, res) => {
  barModel
  .allBars()
  .then((barData) => {
  	console.log('made it to callback', barData);
  });
})




















module.exports = router;