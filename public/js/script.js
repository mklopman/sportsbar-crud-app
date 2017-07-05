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
                bar_id: bar.id,
                icon: bar.icon,
                name: bar.name
            }
            appendData(resultBar);
        })
    }

    function appendData(bar) {
        let result = $('<div>');
        result.addClass('result');
        result.appendTo('.resultDiv');

        let name = $('<h4>');
        name.text('NAME: ' + bar.name);
        name.addClass('names')
        name.appendTo('.resultDiv');

        let address = $('<div>');
        address.text('ADDRESS: ' + bar.address);
        address.addClass('address');
        address.appendTo('.resultDiv');

        let rating = $('<div>');
        rating.text('BAR RATING (OUT OF 5): ' + bar.rating);
        rating.addClass('ratings');
        rating.appendTo('.resultDiv');

        let icon = $('<img>');
        icon.attr('src', bar.icon);
        icon.addClass('icons');
        // icon.appendTo('.resultDiv');


        let favButton = $('<button>');
        favButton.addClass('favorite');
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

    $('.deleteBar').on('click', (e) => {
    	e.preventDefault();
    	// const barId = $('.deleteBar').data('id');
    	
    	const barId = e.target.id;
    	console.log(barId)
 
        $.ajax({
            method: 'DELETE',
            url: `users/${barId}`,
            success: data => {
                console.log('success', data);
                window.location.reload();
            },
            error: msg => {
                console.log(msg)
            }
        });
    })
   

    




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







 // const barId = e.target.parentElement.children[0].innerText;
        // const barInt = parseInt(barId)
        // console.log(barInt);
        // const barIntId = parseInt(barId);
        // console.log(barIntId);
        // deleteThisBar(bar);

   		// deleteThisBar(barId);

        // const deleteThisBar = (barId) => {
