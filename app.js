var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var i18nService = require('./bin/i18n/i18n-service.js');
var mongojs = require('mongojs');
var i18n = require("i18n");
var fs = require('fs');
var session = require('express-session');

if (process.env.APP_CONFIG) {
    //prod:
    var hosting_config = JSON.parse(process.env.APP_CONFIG);
    var mongoPassword = "hjgJH675";
    var url = hosting_config.mongo.user + ":" + mongoPassword + "@" + hosting_config.mongo.hostString;
    console.log('-------');
    console.log(url);
    console.log('------------');
    var db = mongojs(url);
} else {
    //local:
    var db = mongojs('obsidian');
}

var index = require('./routes/index');
var tours = require('./routes/tours');
var admin = require('./routes/admin');

var app = express();
global.appRoot = path.resolve(__dirname);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  cookieName: 'session',
  secret: 'eg[isfd-8yF9-7w2315df{}+Ijsli;;to8',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
  httpOnly: true,
  secure: true,
  ephemeral: true,
  resave:true,
  saveUninitialized:true
}));

app.use((req, res, next) => {
    req.db = db;
    req.db.collection('languages').find({checked: true}, (err, languages) => {
        req._languages = languages.length > 0 ? languages : [{name:'English', checked: true}];
        if(req._languages.indexOf(req.cookies.lang) < 0) {
            req.cookies.lang = req._languages[0].name;
            res.cookie('lang',req.cookies.lang, { maxAge: 900000});
        }
        // console.log(req.cookies);
        next();
    });
});

i18n.configure({
    locales: fs.readdirSync(__dirname + '/i18n').map(filename => {
        return filename.split('.json')[0];
    }),
    directory: __dirname + '/i18n',
    cookie: 'lang',
    autoReload: true
    // updateFiles:false
});
app.use(i18n.init);

app.use('/', index);
app.use('/tours', tours);
app.use('/admin', isAuthenticated, admin);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

function isAuthenticated(req, res, next) {
  // console.log(req.session)
  if(req.session.user) {
    return next();
  } else {
    res.redirect('/login');
  }
}
module.exports = app;
