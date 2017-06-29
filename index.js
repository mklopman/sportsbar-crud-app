const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const mustacheExpress = require('mustache-express');

const mainController = require('./controllers/controller');
const userController = require('./controllers/users');

const app = express();
const port = process.env.PORT || 3000;

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/', (req, res)=>{
  res.render('home/index');
})

app.listen(port, () => console.log(`server listening on ${port}`));