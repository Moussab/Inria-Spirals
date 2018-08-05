// including data.js that contain GeoJSON data 
var data = require("./src/data");
// including trajectoriesComparison.js that contain function that calculat the shortest distance
var trajeComparison = require("./src/trajectoriesComparison");
// routing
var Router = require('vertx-web-js/router');
// to stop access cross origine
var CorsHandler = require('vertx-web-js/cors_handler');



// create instance of server
var server = vertx.createHttpServer();

// create instance of router
var router = Router.router(vertx);

// allowed methods and headers for router
router.route().handler(CorsHandler.create("*")
.allowedMethod('GET')
.allowedMethod('OPTIONS')
.allowedHeader('Access-Control-Request-Method')
.allowedHeader('Access-Control-Allow-Credentials')
.allowedHeader('Access-Control-Allow-Origin')
.allowedHeader('Access-Control-Allow-Headers')
.allowedHeader('Content-Type').handle);


// create get route "/api/estimation" that returne JSON 
// containing estimation of error
router.get("/api/estimation").handler(function (ctx) {
  // This handler will be called for "/api/estimation" requests
  var response = ctx.response();

  // calling function that return the result of comparison
  var estimation_of_error = trajeComparison(data.t_ref,data.t_eval)

  
  // Write to the response and end it
  response.setStatusCode(200).end(JSON.stringify(estimation_of_error));
});

// launch the server in port 8080
server.requestHandler(router.accept).listen(8080);