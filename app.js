var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var json2csv = require('json2csv');
var fs = require('fs');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
require('request')({
    method: 'GET',
    url: 'https://api.locallogic.co/v1/scores',
    qs: {
        lat: 45.5656,
        lng: -73.5656,
        include: 'transit_friendly,quiet',
        fields: 'value,text,description,category,name',
        locale: 'en',
        token: 'b8514c0d93933fb5102769d01b28f4f2aceb02716b7ca62a7d26dff3917bdbf6540b73f01791310f'
    },
    headers: {
        'X-API-KEY': 'b8514c0d93933fb5102769d01b28f4f2aceb02716b7ca62a7d26dff3917bdbf6540b73f01791310f'
    }
}, function (err, response, body) {
    // See response example
    console.log("is it working,", response.data);
    console.log(body);
});
