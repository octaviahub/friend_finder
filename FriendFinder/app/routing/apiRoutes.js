const friends = require("../data/friends");

module.exports = function(app) {
	app.get("/api/allFriends", function(req, res) {
		res.json(friends);
	});

	app.post("/api/friends", function(req, res) { 
		let bestMatch = {
			name: "", 
			photo: "", 
			friendDifference: Infinity
		};

		const userData = req.body;
		const userScores = userData.scores;
		const totalDifference; 

		for (let i = 0; i < friends.length; i ++) {
			const currentFriend = friends[i]; 
			totalDifference = 0;

			console.log(currentFriend.name);

		for (let j = 0; j < currentFriend.scores.length; j++) {
			const currentFriendScore = currentFriend.scores[j];
			const currentUserScore = userScores[j];

			totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
		}

		if (totalDifference <= bestMatch.friendDifference) {
			bestMatch.name = currentFriend.name;
			bestMatch.photo = currentFriend.photo;
			bestMatch.firenDifference = totalDifference; 
		}
	}

	friends.push(userData);

	res.json(bestMatch);	
});
;
// const incResults = require("../data/results");


// app.get("/api/friends", function(req, res) {
//     res.json(friends);
//   });


//   app.post("/api/friends", function(req, res) {

//   	if (allFriends === incResults) {
//   		friends.push(req.body);
//   		res.json(true);
//   	}
//     res.json(results);
//   });