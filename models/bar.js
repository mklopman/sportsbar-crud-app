const axios = require('axios');

function allBars() {
    const queryPromise = axios({
        url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=sports+bar+in+Manhattan&key=AIzaSyAJJIXkoib4z79MeT8q8O9LsW2UTGTRke8',
        method: 'GET'
    });
    return queryPromise;
}







module.exports = { allBars };
