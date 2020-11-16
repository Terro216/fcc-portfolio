let quotesData;
var currentQuote = '',currentAuthor = '';

var colors = [
  '#16a085',
  '#FF9933',
  '#6600CC',
  '#33FF00',
  '#336666',
  '#663300',
  '#99FF66',
  '#003366'
  ];

function getQuotes() {
return $.ajax({ url:'https://gist.githubusercontent.com/Terro216/792a71fd3df6aae2f427af1415313bf2/raw/4cc2a87f0ac91a336c5b170b438892498d8758dd/quotes.json', 
    success: function (jsonQuotes) {
      if (typeof jsonQuotes === 'string') {
        quotesData = JSON.parse(jsonQuotes);
        console.log('quotesData:');
        console.log(quotesData);
      }
    } 
  });
}

function getRandomQuote() {
  return quotesData.quotes[
    Math.floor(Math.random() * quotesData.quotes.length)
  ];
}

function getQuote(){
  let randomQuote = getRandomQuote();

  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;

  $('#tweet-quote').attr(
    'href',
    'https://twitter.com/intent/tweet?hashtags=quotes&related=ilyamed&text=' +
      encodeURIComponent('"' + currentQuote + '" ' + currentAuthor) 
  );  
  
  $('#text').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#text').text(randomQuote.quote);
  });

  $('#author').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#author').html(randomQuote.author);
  });

  var color = Math.floor(Math.random() * colors.length);
  $('html body').animate(
    {
      backgroundColor: colors[color],
      color: colors[color]
    },
    1000
  );
  $('#new-quote').animate(
    {
      backgroundColor: colors[color]
    },
    1000
  );
}

$(document).ready(function () {
  getQuotes().then(() => {
    getQuote();
  });
  $('#new-quote').on('click',getQuote);
});

//inspired by https://codepen.io/freeCodeCamp/pen/qRZeGZ
//hezag