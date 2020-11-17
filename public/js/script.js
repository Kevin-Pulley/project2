$("#searchBtn").on("click", function () {
  const searchValue = $("#search-input").val();
  console.log(searchValue);
  const settings = {
    async: true,
    crossDomain: true,
    url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/showcard${searchValue}`,
    method: "GET",
    headers: {
      "x-rapidapi-key": "e25253654bmshbe1d4ddbcd23335p1dc5a9jsndabf8328bd41",
      "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    $("#card-container").html(`<img src="${response[0].img}"/>`);
  });
});

$("#card-container").on("click", "img", function () {
  const img = $(this).attr("src");
  console.log(img);
  const newCard = {
    name: "test",
    image_url: img,
    
  };

  $.post("/api/deck", newCard);
});






