//Declaration of variables
var quotesData;

//Quotes Containers
quotesData = [
  {
    quote:
      "I say what I want to say and do what I want to do. There's no in between. People will either love you for it or hate you for it.",
    author: "Eminem",
  },
  {
    quote: "Don't let your dreams be dreams. Just do it.",
    author: "Shia LaBeouf",
  },
  {
    quote:
      "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.",
    author: "Princess Diana",
  },
  {
    quote:
      "You can't be afraid of people willing to hurt you, cause if you fear life, then you will never live.",
    author: "Chester Bennington",
  },
  {
    quote:
      "The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed.",
    author: "Eminem",
  },
  {
    quote: "Just remember; someone loves everything you hate about yourself.",
    author: "Frank Ocean",
  },
];

//Color Variables
var colors = [
  "#27a200",
  "#30ae60",
  "#2c3e50",
  "#f40c10",
  "#e70c3c",
  "#9b60b6",
  "#FB6100",
  "#302220",
  "#502E30",
  "#BDBB00",
  "#77B1A9",
  "#73A860",
];

//HTML FULL LOAD
$(document).ready(() => {
  //random quote function
  var randomQuote = function (id, colorBody) {
    //fadeIn and Animate
    $(".quote-text, .quote-author").fadeOut(1000, () => {
      //quote actions
      $(".quote-text")
        .css("color", colorBody)
        .fadeIn(1000)
        .html(
          '<i class="fa fa-quote-left" aria-hidden="true"></i> ' +
            quotesData[id].quote +
            ' <i class="fa fa-quote-right" aria-hidden="true"></i>'
        );

      //authors actions
      $(".quote-author")
        .css("color", colorBody)
        .fadeIn(1000)
        .html("- <span>" + quotesData[id].author + "</span>");

      //twitter share
      $("#tweet-quote")
        .css("color", colorBody)
        .fadeIn(1000)
        .html(
          '<a class="twitter-share-button" href="https://twitter.com/intent/tweet? text=' +
            quotesData[id].quote +
            " - " +
            quotesData[id].author +
            '" data-size="large" target="_blank"><i class="fa fa-twitter text-color" aria-hidden="true"></i></a>'
        );

      //Change link color
      $("a").animate({ color: colorBody });

      // animate from Jquery UI
      $("body, button").animate({
        background: colorBody,
      });
    });
  };

  var colorBody = colors[Math.floor(Math.random() * colors.length)];
  var id = Math.floor(Math.random() * quotesData.length);
  randomQuote(id, colorBody);

  // when click
  $("#new-quote").click(() => {
    colorBody = colors[Math.floor(Math.random() * colors.length)];
    console.log("out:" + colorBody);
    clas = Math.floor(Math.random() * quotesData.length);
    randomQuote(clas, colorBody);
    console.log("Peace Out");
  });
});
