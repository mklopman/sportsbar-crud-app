$(document).ready(function() {

            console.log('JS 🏃💨');


            $('#search').on('submit', (e) => {
                e.preventDefault();
                const city = $('#search-input').val();
                $.ajax({
                    method: 'post',
                    url: 'http://localhost:8080/bars/search',
                    data: { city },
                    success: (data) => {
                        parseData(data);
                    }
                })
            })



            function parseData(bars) {
                // console.log('this is the parse data', bars)
                let results = $('.resultDiv');
                results.empty();
                bars.forEach(bar => {
                    const resultBar = {
                        address: bar.formatted_address,
                        rating: bar.rating,
                        price: bar.price_level,
                        icon: bar.icon,
                        rating: bar.rating,
                        name: bar.name
  					}
                    appendData(resultBar);          	
                })
      		}

            function appendData(bar) {
                let result = $('<div>');
                result.addClass('result');
                result.appendTo('.resultDiv');

                let address = $('<div>');
                address.text(bar.address);
                address.appendTo('.resultDiv');

                let price = $('<div>');
                price.text(bar.price);
                price.appendTo('.resultDiv');

                let icon = $('<img>');
                icon.attr('src', bar.icon);
                icon.addClass("icons");
                icon.appendTo('.resultDiv');

                let name = $('<div>');
                name.text(bar.name);
                name.appendTo('.resultDiv');

                let rating = $('<div>');
                rating.text(bar.rating);
                rating.appendTo('.resultDiv');

                let favButton = $('<button>');
                favButton.attr('id', 'favorite');
                favButton.text("Favorite This Bar");
                favButton.appendTo('.resultDiv');
                favButton.on('click', (faveThisBar(bar)))

            }

            function faveThisBar(bar) {
                return (e) => {
                    // console.log(bar);
                    $.ajax({
                            method: 'post',
                            url: 'http://localhost:8080/users/profile',
                            data: { bar },
                            success: data => {
                            	window.location.replace('/users/profile')
                       
                            }
                        })
                    }
                }





            });




        // $.ajax({
        //         url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=sports+bar+in+Manhattan&key=AIzaSyAJJIXkoib4z79MeT8q8O9LsW2UTGTRke8',
        //         type: 'GET'
        //     }).done( data =>{
        //         console.log('here is the data: ', data);
        //     });

        // function findBars(city){
        // 	let url = 'http://localhost:8080/bars'
        // 		// let url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=sports+bar+in+${city}&key=${apiKey}`;

        // 		axios.get(url)
        // 			.then(response => {
        // 				//console.log(response);

        // 				// let nextPage = url + '&pagetoken=' + response.data.next_page_token;
        // 				// console.log(nextPage);
        // 				// console.log(response.data.next_page_token)

        // 				// axios.get(nextPage)
        // 				// 	.then(response => {
        // 				// 		console.log("2nd page")
        // 				// 		console.log(response)
        // 				// 	})
        // 				// 	.catch(err => {
        // 				// 		console.log(err);
        // 				// 	});

        // 				// return parseData(response.data.results);
        // 				return parseData(response.data.results);
        // 			})
        // 			.catch(err => {
        // 				console.log(err);
        // 			});
        // 	}
