const User = require('../models/user');
const router = require('express').Router();
const passport = require('passport');
const barModel = require('../models/bar');

// const controller = require('./controller');
const auth = require('../services/auth');

// ----------------------------------------
// users index

router.post(
    '/',
    // we want the behavior of the site to vary depending on whether or
    // not the user is already logged in. If they are logged in, we want
    // to send them to /users/profile. If they are not, we want to send
    // them to users/new.
    passport.authenticate(
        // The following string indicates the particular strategy instance
        // we'll want to use to handle signup. We defined behavior for
        // 'local-signup' back in index.js.
        'local-signup', {
            failureRedirect: '/users/new',
            successRedirect: '/users/profile'
        }
    )
);

// ----------------------------------------
// register new user

router.get('/new', (req, res) => {
    res.render('users/new');
});

// ----------------------------------------
// user logout

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// ----------------------------------------
// user login

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/login', passport.authenticate(
    'local-login', {
        failureRedirect: '/users/login',
        successRedirect: '/users/profile'
    }
));

// ----------------------------------------
// user profile

router.get(
    '/profile',
    // Middleware (that we wrote) ensuring that if the user is not
    // authenticated, he or she will be redirected to the login screen.
    auth.restrict,
    (req, res) => {
        // console.log('in handler for users/profile');
        // console.log('req.user:');
        // console.log(req.user);
        let resData = {}


        User
            .findByEmail(req.user.email)
            .then(user => {
                resData.user = user
                return User.showFavorite(req.user.id)
            })
            .then(favorites => {
                resData.favorites = favorites
                console.log(resData.favorites)
                res.render("users/profile", { resData });                
            })
            .catch(err => console.log('ERROR:', err));
    }
);

router.post('/profile', (req, res) => {
    console.log('hello from users controler post/profile', req.user.id)
    req.body.bar.id = req.user.id;
    barModel
    .favorite(req.body.bar)
    .then(barResult => res.json(barResult))
    .catch(err => console.log(err))
});

router.delete('/users/:id', (req, res) => {
    console.log('HI FROM USER CONTROLLER')
    barModel
    .destroy(req.params.id)
    .then(data => {
        res.send(data)
    })
    .catch((err) => {
        console.log('ERROR FROM USER CONTROLLER')
    })
})

module.exports = router;

// router.delete('/profile', (req, res) => {
    // console.log('hello from users controler post/profile', req.user.id)
    // req.body.bar = req.user.id;
    // let resData = {};
    // let toRemove = [];

    // User
    // .findById(req.user.id)
    // .then(user => {
    //     resData.user = user
    //     return User.showFavorite(req.user.id)
    // })
    // .then(favorites => {
    //     resData.favorites = favorites;
        // console.log(req.body.barId)
        // console.log(resData.favorites)
        // toRemove = resData.favorites.filter(fave => {
        //    return parseInt(fave.id) === parseInt(req.body.barId)
        // })
        // return toRemove[0].id;
    // })
        // console.log(toRemove);
        // .destroy(parseInt(toRemove))
    // .destroy(toRemove)
        // .filter(bar => {
        //     bar.id === req.user.id;
        // }))
        // res.render("users/profile", { resData });                
    // })
    // .destroy(req.user.id)
    // .then(data => res.json(data))
    // .catch((err) => {
    //     console.log('ERROR FROM USER CONTROLLER')
    // })

    // .destroy(req.body.bar)
    // .then(data => res.json(data))
    // .catch((err) => {
    //     console.log('ERROR FROM USER CONTROLLER')
    // })

