const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const User = require('./models/user.model');

mongoose.connect("mongodb://localhost:27017/node-auth-db", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to node-auth-db successfully.'))
    .catch(err => console.log(err))

app.use(require('cookie-session')({
    secret: 'bhawna-secret-key',    // Encode/Decore Session
    resave: false,
    saveUninitialized: false
}));

passport.serializeUser(User.serializeUser());       //session encoding
passport.deserializeUser(User.deserializeUser());   //session decoding
passport.use(new LocalStrategy(User.authenticate()));

app.set('view engine', "ejs");
app.set('views', "./views")

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', passport.authenticate("local", {
    successRedirect: '/userprofile',
    failureRedirect: '/login'
}));

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', (req, res) => {
    User.register(new User({
        username:
            req.body.username,
        phone: req.body.phone,
        telephone: req.body.telephone
    }),
        req.body.password, function (err, user) {
            if (err) throw err;
            passport.authenticate("local")(req, res, function () {
                res.redirect('/login')
            })
        })
});

app.get('/userprofile', isLoggedIn, (req, res) => {
    res.render('userprofile')
});

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');

})

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

app.listen(process.env.PORT || 3000, function (err) {
    if (err) throw err;
    console.log('Server is Running at port 3000!!')
})