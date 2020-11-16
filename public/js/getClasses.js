//on document rdy...
//let class = $(."card-container").data("class");
// do ajax call




$( document ).ready(function() {
    // const classes = document.querySelector("#class")
    let classes = $(".class-container").data("class");
    console.log(classes)
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
    $.ajax(settings).done(function(response){
        console.log(response)
        for(var i = 0; i < 100; i++){

            let b = $("<button>").attr("id", response[i].cardId)
            b.text(response[i].name);
            $(".class-container").append(b)
        }



        // $("#class-container").html(`<div>"${response.name}"</div>`);
    })
});