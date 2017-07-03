const db = require('../db/setup');
const axios = require('axios');

function allBars(city) {
    const queryPromise = axios({
        url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=sports+bar+in+${req.body.city}&key=${process.env.GOOGLE_API_KEY}`,
        method: 'GET'
    });
    return queryPromise;
}


function favorite(bar) {
	return db.oneOrNone(`INSERT INTO sports_bars (name, address, rating, price, icon, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [ bar.name, bar.address, bar.rating, bar.price, bar.icon, bar.id]);
}





module.exports = { allBars, favorite };
