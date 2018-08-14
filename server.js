// requiring dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// set up express
var app = express();
var PORT = process.env.PORT || 3000;

// set up express to use body-parser
app.use(bodyParser.urlencoded({ expanded: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

// routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// start server
app.listen(PORT, function() {
    console.log("server listening on PORT: " + PORT);
});
