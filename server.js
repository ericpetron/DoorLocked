let renderjson = { pugIsLocked: "false"}

// include the express modules
var express = require("express");
const pug = require('pug');
var onoff = require('onoff')
var gpio = require('pigpio').Gpio

const button = new gpio(2, {
  mode: gpio.INPUT,
  pullUpDown: gpio.PUD_UP,
  alert: true
});
button.glitchFilter(10000)


// create an express application
var app = express();
const url = require('url');

// helps in extracting the body portion of an incoming request stream
var bodyparser = require('body-parser'); // this has been depricated, is now part of express...

// fs module - provides an API for interacting with the file system
var fs = require("fs");

// helps in managing user sessions
var session = require('express-session');


// A possible library to help reading uploaded file.
// var formidable = require('formidable')


// apply the body-parser middleware to all incoming requests
app.use(bodyparser());
app.set('view engine', 'pug')

// use express-session
// in mremory session is sufficient for this assignment
app.use(session({
  secret: "csci4131secretkey",
  saveUninitialized: true,
  resave: false
}
));
const port = process.env.PORT || 1930;
// server listens on port 1930 for incoming connections
app.listen(port, () => console.log('Listening on port '+ port +'!'));

app.get("/", function(req, res) {
  button.on('alert', (level, tick) => {
    if (level === 0) {
      renderjson.pugIsLocked = "true";
    } else {
      renderjson.pugIsLocked = "false";
    }
  })
  
  console.log(renderjson);
  const comp = pug.renderFile("pug/index.pug", renderjson);
  res.send(comp);
  res.end();
})