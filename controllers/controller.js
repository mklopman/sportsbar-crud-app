const express = require('express');
const router = express();
const barModel = require('../models/bar');



 // get map in bar view
router.get('/', (req, res) => {
	console.log('PAGE LOADING!');
  // barModel
  // .allBars()
  // .then((barData) => {
  // 	console.log('made it to callback', barData);
  // 	res.render('bar')
  // });
  res.render('bar');
})




















module.exports = router;