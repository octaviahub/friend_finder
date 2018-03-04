const express = require("express");

const bodyParser = require("body-parser");

const path = require("path");

// Set up Express app
const app = express();
const PORT = 3000;

// Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// const server = http.createServer(handleRequest);

// function handleRequest(req, res) {

//   // Capture the url the request is made to
//  const path = req.url;
// };
  
// Directs server to a series of "route" files.
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// Starts the server to begin listening

  server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);

});
