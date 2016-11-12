$(document).ready(function(){
  var randomQuote, randomNum, randomAuthor;
  function getQuote(){
    /*var quotes = ["You’re not my supervisor!", "Holy sh*tsnacks!","Karate? The 'Dane Cook' of martial arts?", "I'm scared if I stop driking all at once, the cumulative hangover will literally kill me.", "Because I told you to buy lemon curd, Woodhouse. Now what am I going to spread on my toast? Your tears?", "Those cannot be your only shoes. What am I saying? It’s Russia. People probably come from miles around just to get their picture taken in those.", "All I've had today is like... six gummi bears and some scotch.", "Sorry, I couldn't hear you over the sound of your wrongness."];
    var authors =["Cheryl", "Pam","Archer", "Archer", "Archer","Archer","Archer","Archer"];
    var randomMax = quotes.length;
    randomNum = Math.floor((Math.random() * randomMax));
    randomQuote = quotes[randomNum];
    randomAuthor = authors[randomNum];
    $(".quote").text(randomQuote);
    $(".author").text("- " + randomAuthor);*/

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