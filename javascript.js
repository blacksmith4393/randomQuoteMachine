$(document).ready(function(){
  var randomQuote, randomNum, randomAuthor;

  function getQuote(){
    var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url, function(data){
      $(".quote").html(data.quoteText);
      $(".author").html(data.quoteAuthor);
      randomQuote = data.quoteText;
    });
  }

  $("#tweet").on("click", function(){
    window.open("https://twitter.com/intent/tweet/?text=" + randomQuote)
  });

  $("#newQuote").on("click", function(){
    getQuote();
  });

});
