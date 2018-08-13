// requiring dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// create instance of express
var app = express();

// setup PORT
var PORT = process.env.PORT || 8080;