//on document rdy...
//let class = $(."card-container").data("class");
// do ajax call




$( document ).ready(function() {
    let classes = $(".card-container").data("class");
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

         if(response[0].playerClass === classes){
             let newClass = response[0].img
         }
        $("#class-container").html(`<img src="${response.img}"/>`);
    })
});