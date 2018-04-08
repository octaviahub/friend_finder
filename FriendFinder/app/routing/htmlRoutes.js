//DEPENDENCIES
const path = require("path");

module.exports = function(app) {

// should display the survey page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
 
 });

// default, catch-all route which displays the home page
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
 
 });

};