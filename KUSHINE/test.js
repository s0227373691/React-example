var unirest = require("unirest");

var req = unirest("GET", "https://community-open-weather-map.p.rapidapi.com/weather");

req.query({
	"callback": "test",
	"id": "2172797",
	"units": "%22metric%22 or %22imperial%22",
	"mode": "xml%2C html",
	"q": "London%2Cuk"
});

req.headers({
	"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
	"x-rapidapi-key": "SIGN-UP-FOR-KEY",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});