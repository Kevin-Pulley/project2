var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/null',
  headers: {
    'x-rapidapi-key': '8014185b2fmshfeeb5c4c4378010p1d437ejsnfd6e7a37960f',
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});