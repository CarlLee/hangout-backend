
/**
 * Module dependencies.
 */

var express = require('express')
  , resource = require('express-resource-new')
  app = express.createServer();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.set('controllers', __dirname + '/controllers');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.resource("users");
app.resource("events");

app.listen(3000);

