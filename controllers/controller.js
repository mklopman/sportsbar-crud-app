const express = require('express');
const router = express();
const axios = require('axios');
const barModel = require('../models/bar');



 // get map in bar view
router.get('/', (req, res) => {
	console.log('PAGE LOADING!');
  res.render('bar');
})


router.post('/search', (req, res) => {
	axios({
		method: 'get',
		url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=sports+bar+in+${req.body.city}&key=${process.env.GOOGLE_API_KEY}`
	})
	.then((data) => {
		// console.log('inside google axios call: ', data.data)
		res.json(data.data.results)
	})
	.catch(err => {
		console.log(err);
	})
})




// router.post('users/profile', (req, res) => {
// 	console.log('missy')
// // 	barModel
// // 	.favorite(req.body.bar)
// // 	.then(barResult => {
// // 		return barModel.favorite(barResult);
// // 	})
// // 	.then(barResult => {
// // 		res.json({barResult: barResult})
// // 	})
// // 	.catch(err => {
// //       console.log(err);
// //     })
// });








module.exports = router;




  // barModel
  // .allBars()
  // .then((barData) => {
  // 	console.log('made it to callback', barData);
  // 	res.render('bar')
  // });