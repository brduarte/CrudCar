const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const {validationResult} = require('express-validator');

const indexRouter = require('./routes/index');
const vehicleRouter = require('./routes/vehicle')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/vehicle', vehicleRouter)

app.use(function (error, req, res, next) {
  res.status(error.status)

  res.json({
    status: error.status,
    message: error.message,
  })
})


module.exports = app;
