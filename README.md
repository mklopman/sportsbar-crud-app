# sportsbar-crud-app

APPROACH: 

The most important aspect of my approach was to try not to overthink everything (didn't work) nd spend time mapping out everything -- from the routes and how they interact with the models and how the models will interact with the database etc. Originally, I wanted to include a map but I learned quickly that I wouldn't have time to try and do that. 

I wanted to save the styling for last and make sure all of the functionality works, like a programmer would. I wanted a clean and easy-to-read landing page/interface that allowed the user to easily navigate through the app and find the sports bars in his/her area. 

USER STORIES:

Being a transplant sports fan -- living in a city that doesn't represent the teams you root for -- can be pretty annoying when it comes to watching the teams you cheer for. Your teams are rarely shown on TV and unless you're streaming every single sport, it can be difficult to watch your teams. That's where the sports bar finder comes in. Type in where you are and you can find out about the top 20 rated sports bars in your area. 

“As a sports fan who grew up in Maryland but lives in New York City now, it's hard to watch games with fans of my teams. This app helps me find the fans of my teams."

"As the owner of my East Village bar and avid Philadelphia Flyers fan, I figured I'd give other Philly fans a chance to meet up and watch the games together."

TECHNOLOGIES:

Express, Mustache, CSS/FlexBox, HTML, PG Promise, DotEnv, Google Places API, Axios, Body Parser, Passport, bcryptjs. 

UNSOLVED PROBLEMS:

As of now, there's no way to add a review or comments for each bar. It could also look a lot nicer. I wasn't able to make the bars show up in order of their rating, either. 

body {
	background-color: lavender;
	width: 100vw;
	height: 100vh;
}

.top20 {
	font-size: 120px;
	font-family: 'Fredericka the Great', cursive;
}

.subhead {
	font-size: 70px;
	font-family: 'Fredericka the Great', cursive;
}


.welcomeLinks {
	font-size: 30px;
	text-decoration: none;
	font-family: 'Vast Shadow', cursive;
}

.welcomeLinks:hover {
	text-decoration: underline;
	color: yellow;
	padding: 50px;
}






/*END - LANDING CSS*/

/*BEGIN - LOGIN CSS*/

.loginMain {
	display: flex;
	flex-direction: row;
	position: absolute;
	width: 100%;
	height: 100%;
}

main {
	display: flex;
	position: absolute;
	justify-content: center;
	align-items: center;
	left: 45%;
	top: 40%;
}

.signupLink {
	display: flex;
	position: relative;
	top: 65%;
	left: 29%;
	font-size: 20px;
}

.loginHeadline {
	display: flex;
	position: relative;
	font-family: 'Contrail One', cursive;
	left: 42%;
}

form {
	margin: 0 auto;
}

input[type=text] {
  border: none; rewriting standard style, it is necessary to be able to change the size
  height: 30px;
  width: 210px;
  font-size: 15px;
}

input[type=password] {
  border: none; /*rewriting standard style, it is necessary to be able to change the size*/
  height: 30px;
  width: 210px;
  font-size: 15px;

}

input[type=submit] {
  border: none; /*rewriting standard style, it is necessary to be able to change the size*/
  height: 50px;
  width: 100px;
  margin-top: 10px;
}

label {
	font-family: 'Contrail One', cursive;
}


#loginButton {
	font-size: 25px;
	font-family: 'Contrail One', cursive;
	text-transform: uppercase;
}*/


/*END - LOGIN CSS*/

/*BEGIN - PROFILE CSS*/

.profileBody {
	background-color: #82A9BB;
	display: flex;
	position: absolute;
	width: 100vw;
	height: 100vh;
}

.barInfo {
	list-style-type: none;
}

.profileContainer {
	display: flex;
	flex-direction: column;
	position: relative;
	margin: 0 auto;
	top: 40%;
}

#profileWelcome {
	display: flex;
	flex-direction: row;
	position: relative;
	justify-content: center;
	align-items: center;
	font-size: 30px;
	margin-top: -230px;
	margin-left: -200px;
	font-family: 'Fredericka the Great', cursive;
	font-size: 50px;

}

h3 {
	display: flex;
	flex-direction: row;
	position: relative;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	margin-left: -500px;
	font-family: 'Fredericka the Great', cursive;
}

#profileLinks {
	display: flex;
	flex-direction: row;
	position: relative;
	justify-content: space-around;
	margin-left: -500px;
	font-size: 25px;
}

.deleteBar {
	width: 100px;
	height: 25px;
}

.barInfo {
	font-family: 'Ruda', sans-serif;
	margin: 0 auto;
}


/*END LOGIN CSS*/
/*
BEGIN SEARCH CSS*/

.icons {
	width: 30px;
	height: 30px;
}

.favorite {
	width: 200px;
	height: 25px;
	font-size: 18px;
	font-family: 'Neucha', cursive;
	text-align: center;
}

#search-button {
	width: 100px;
	height: 33px;

}

.names {
	font-size: 28px;
	font-family: 'Passion One', cursive;
	margin-bottom: -3px;
}

.address {
	font-size: 22px;
	font-family: 'Passion One', cursive;
}

.ratings {
	font-size: 20px;
	font-family: 'Passion One', cursive;
	margin-bottom: 3px;
}

#sportsbars {
	font-size: 110px;
	font-family: 'Fredericka the Great', cursive;
}

#searchbars {
	font-size: 70px;
	font-family: 'Fredericka the Great', cursive;
}


/*END SEARCH CSS*/

/*START SIGNUP CSS*/

#signupBtn {
	font-size: 20px;
}

/*END SIGNUP CSS*/
/*
BEING PROFILE CSS*/












