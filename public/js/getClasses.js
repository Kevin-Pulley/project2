$(document).ready(function () {
  let classes = $(".class-container").data("class");
  console.log(classes);
  const settings = {
    async: true,
    crossDomain: true,
    url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/${classes}`,
    method: "GET",
    headers: {
      "x-rapidapi-key": "e25253654bmshbe1d4ddbcd23335p1dc5a9jsndabf8328bd41",
      "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    },
  };

  function getName() {
    $.get("api/class/:card_id", function (req, res) {
      let id = req.params.name;
    });
  }

<<<<<<< Updated upstream
  $.ajax(settings).done(function (response) {
    //console.log(response);
    for (var i = 0; i < 99; i++) {
      let b = $("<button>").attr({
        id: response[i].cardId,
        class: "search-button",
      });
      b.text(response[i].name);
      $(".class-container").append(b);
    }
    $(".search-button").click(function () {
      const classId = this.id;
      const cardName = document.getElementById(classId).textContent;
      console.log(classId);
      console.log(cardName);
      const cardId = {
        name: cardName,
        card_id: classId,
      };
      $.post("/api/class/:card_id", cardId);

      const settings = {
=======
  

$( document ).ready(function() {
    // const classes = document.querySelector("#class")
    let classes = $(".class-container").data("class");
    console.log(classes)
    
    const settings = {
>>>>>>> Stashed changes
        async: true,
        crossDomain: true,
        url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${cardName}`,
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "e25253654bmshbe1d4ddbcd23335p1dc5a9jsndabf8328bd41",
          "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        },
      };
<<<<<<< Updated upstream

      $.ajax(settings).done(function (data) {
        // let filter = data[0].filter(function (item) {
        //     console.log(data)
        //   return item.data[0].img;
        //   console.log(filter)
        // });
        // console.log(data);
        $("#card-container").html(`<img src="${data[1].img}"/>`);
      });
    });
    // $("#card-container").on("click", "img", function () {
    //     const img = $(this).attr("src");
    //     console.log(img);
    //     const newCard = {
    //       image_url: img,
    //       name: "test",
    //       api_url: "test"
    //     };

    //     $.post("/api/card", newCard);
    //   });
  });
});
=======
    $.ajax(settings).done(function(response){
        console.log(response)
        for(var i = 0; i < 100; i++){

            let b = $("<button>").attr("id", response[i].cardId)
            b.text(response[i].name);
            $(".class-container").append(b)
        }
      })    
        // $("#class-container").html(`<div>"${response.name}"</div>`);

$("#button").on("click", function () {
  const searchId = $("#id").val();
  console.log(id);
  console.log(button);
  const settings = {
    async: true,
    crossDomain: true,
    url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${id}`,
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
    image_url: img,
    name: "test",
    api_url: "test"
  };

  $.post("/api/card", newCard);
});

});

>>>>>>> Stashed changes
