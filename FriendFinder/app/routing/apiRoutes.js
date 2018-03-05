const allFriends = require("../data/friends");
const incResults = require("../data/results");


app.get("/api/friends", function(req, res) {
    res.json(friends);
  });



  app.post("/api/friends", function(req, res) {

  	if (allFriends === incResults) {
  		friends.push(req.body);
  		res.json(true);
  	}
    res.json(results);
  });