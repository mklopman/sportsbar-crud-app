$(document).ready(function() {

	console.log('JS 🏃💨');


 $('#search').on('submit', (e)=>{
    e.preventDefault();
    const city = $('#search-input').val();
    findBars(city);
  });


// $.ajax({
//         url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=sports+bar+in+Manhattan&key=AIzaSyAJJIXkoib4z79MeT8q8O9LsW2UTGTRke8',
//         type: 'GET'
//     }).done( data =>{
//         console.log('here is the data: ', data);
//     });

function findBars(city){
		const apiKey = 'AIzaSyAJJIXkoib4z79MeT8q8O9LsW2UTGTRke8';
		let url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=sports+bar+in+${city}&key=${apiKey}`;

		axios.get(url)
			.then(response => {
				//console.log(response);

				// let nextPage = url + '&pagetoken=' + response.data.next_page_token;
				// console.log(nextPage);
				// console.log(response.data.next_page_token)

				// axios.get(nextPage)
				// 	.then(response => {
				// 		console.log("2nd page")
				// 		console.log(response)
				// 	})
				// 	.catch(err => {
				// 		console.log(err);
				// 	});

				return parseData(response.data.results);
			})
			.catch(err => {
				console.log(err);
			});
	}

	function parseData(bars){
		bars.forEach(bar => {
			const resultBar = {
				name: bar.name,
				address: bar.formatted_address,
				rating: bar.rating,
				price: bar.price_level,
				icon: bar.icon,
				lat: bar.lat,
				lng: bar.lng
		}
		console.log(resultBar);
		})

	}


});




