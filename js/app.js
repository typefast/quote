

var quotes = ["Failure will never overtake me if my determination to succeed is strong enough.",
              "Be yourself; everyone else is already taken.",
              "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
              "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
              "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
              "A room without books is like a body without a soul.",
              "You only live once, but if you do it right, once is enough.",
              "Be the change that you wish to see in the world.",
              "In three words I can sum up everything I've learned about life: it goes on.",
              "If you tell the truth, you don't have to remember anything.",
              "Always forgive your enemies; nothing annoys them so much.",
              "Live as if you were to die tomorrow. Learn as if you were to live forever.",
              "To live is the rarest thing in the world. Most people exist, that is all.",
              "Without music, life would be a mistake.",
              "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
              "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover."

              ];
var quoteButton = document.getElementById('quoteButton');
var quoteDiv = document.getElementById('quoteDiv');

function randomNumber() {
 return Math.floor((Math.random() * quotes.length) );
};

function divQuote() {
  var quotePosition = randomNumber();
  quoteDiv.innerHTML = quotes[quotePosition];
}

quoteButton.addEventListener("click", divQuote);