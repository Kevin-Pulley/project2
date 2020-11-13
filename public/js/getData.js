

module.exports = function (data) {
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/info",
    method: "GET",
    headers: {
      "x-rapidapi-key": "e25253654bmshbe1d4ddbcd23335p1dc5a9jsndabf8328bd41",
      "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
};
