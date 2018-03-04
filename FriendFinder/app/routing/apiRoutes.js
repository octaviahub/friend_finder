const friendsData = require("../data/friends");
const resultsData = require("../data/resultsData");


app.get("/api/friendsData", function(req, res) {
    res.json(friendsData);
  });

  app.get("/api/resultsData", function(req, res) {
    res.json(resultsData);
  });