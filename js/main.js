$("#show").click(function(){
  $("img").show();
});

$("#hide").click(function(){
  $("img").hide();
});

$("#show-hide").click(function(){
  $("img").toggle();
});

$("#fade").click(function(){
  $("img").toggleClass("fade");
});


// img src change
$('img').hover(function() {
  $('img').attr('src', 'https://img.etsystatic.com/il/3e3b27/781913392/il_570xN.781913392_9u2a.jpg?version=1');},
  function() {
    $("img").attr("src","https://image.freepik.com/free-vector/sketches-of-palm-trees_23-2147622512.jpg");
  }
);

$("#list-button").click(function(){
  var text = document.getElementById('list-text').value;
  var li = "<li>" + text + "</li>";
  $("#list").append(li);}
  // ,
  // function() {
  //   $("#list-text").val("");
  // }
);

$("#kaboom").click(function() {
$("body").append("<div id='takeover'></div>");
});



//   ,
// funrction()$("#list-text").val("");
// )
// });
