// Stored some quotes in an array 

const quotes = [
  "The best way to get started is to quit talking and begin doing. – Walt Disney",
  "Don’t let yesterday take up too much of today. – Will Rogers",
  "You learn more from failure than from success. – Anonymous",
  "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
  "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
  "Creativity is intelligence having fun. – Albert Einstein",
  "If you are working on something exciting, it will keep you motivated. – Steve Jobs",
  "Success is not in what you have, but who you are. – Bo Bennett",
  "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Stay hungry, stay foolish. – Steve Jobs",
];

// created a function for a random generation of colors to put in the bg of the quote-show area

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

// created a function for quoteGeneration on button click

function generateQuote() {
  let quoteGenerator = document.querySelector(".quote-trigger");
  let quoteText = document.querySelector(".quote-show");

  quoteGenerator.addEventListener("click", function (a) {
        // generate a random number using Math.random() method

        let random = Math.random();

        // to access the index of the quotes stored in array
        // we used Math.floor() method to round of the numbers 
        // then we multiplied the random number generated to the length of the array
        // so that we get random numbers between the length of array

        let randomIndex = Math.floor(random * quotes.length);

        // then we shown the random generated quote to the quote-show area

        quoteText.innerText = quotes[randomIndex];

        
        quoteText.style.color = "black";
        quoteText.style.backgroundColor = getRandomColor();
  });
}

generateQuote();
