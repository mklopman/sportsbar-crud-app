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
	return db.oneOrNone(`INSERT INTO sports_bars (name, address, rating, bar_id, icon, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [ bar.name, bar.address, bar.rating, bar.bar_id, bar.icon, bar.id]);
}

function destroy(bar_id) {
    return db.oneOrNone('DELETE FROM sports_bars WHERE bar_id = $1', [bar_id])
}


module.exports = { allBars, favorite, destroy };
