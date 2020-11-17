//on document rdy...
//let class = $(."card-container").data("class");
// do ajax call



<<<<<<< HEAD
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
  

=======

>>>>>>> main
$( document ).ready(function() {
    // const classes = document.querySelector("#class")
    let classes = $(".class-container").data("class");
    console.log(classes)
<<<<<<< HEAD
    
    const settings = {
>>>>>>> Stashed changes
=======
    const settings = {
>>>>>>> main
        async: true,
        crossDomain: true,
        url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/${classes}`,
        method: "GET",
        headers: {
          "x-rapidapi-key": "e25253654bmshbe1d4ddbcd23335p1dc5a9jsndabf8328bd41",
          "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        },
      };
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
    $.ajax(settings).done(function(response){
        console.log(response)
        for(var i = 0; i < 100; i++){

            let b = $("<button>").attr("id", response[i].cardId)
            b.text(response[i].name);
            $(".class-container").append(b)
        }

>>>>>>> main


<<<<<<< HEAD
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
=======
        // $("#class-container").html(`<div>"${response.name}"</div>`);
    })
});
>>>>>>> main
