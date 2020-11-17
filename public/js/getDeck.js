

$(function(){
  $.get("api/deck", function(deck){
    //console.log(deck)
    for (var i = 0; i < deck.length; i++){
      let img = deck[i].image_url;
      console.log(img)
      $("#deck-container").append(`<img src="${img}"/>`);
    }


  })
});



