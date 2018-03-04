const http = require("http");

const bodyParser = require("body-parser");

// Set our port to 3000
const PORT = 3000;

const server = http.createServer(handleRequest);

function handleRequest(req, res) {

  // Capture the url the request is made to
 const path = req.url;

  // Express app to handle data parsing
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());




  server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
