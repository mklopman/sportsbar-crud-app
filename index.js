const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const session = require('express-session');
const cookieParser = require('cookie-parser');
const mustacheExpress = require('mustache-express');
const mainController = require('./controllers/controller');

require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));


// Important: mount express middleware BEFORE passport middleware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));


const auth = require('./services/auth.js');
app.use(auth.passportInstance);
app.use(auth.passportSession);


app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


// CORS
app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/users', require('./controllers/users'));
app.use('/bars', mainController)

app.get('/', (req, res) => {
    res.render('index');
});

// app.get('/users/bar', (req, res) => {
// 	res.render('users/bar');
// })  //TREVOR COMMENTED THIS OUT

// wfw

app.listen(PORT, () => console.log('Server listening on port', PORT));
