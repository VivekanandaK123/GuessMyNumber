"use strict";

//Math.random gives a random decimal value between 0 and 1 (both inclusive)
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  //console.log(document.querySelector(".guess").value);
  let guess = Number(document.querySelector(".guess").value);

  //No input
  if (!guess) {
    document.querySelector(".message").textContent = "❌ Please guess a number";
  }
  // Guessed correctly
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent =
      "🥳 You have guessed the number correctly";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "rgb(37, 169, 37)";
    document.querySelector(".number").style.width = "10rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  //Guess is not equal to secretNumber
  else if (guess !== secretNumber) {
    document.querySelector(".message").textContent =
      guess > secretNumber ? "📈 Too high" : "📉 Too low";
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😔 GAME OVER";
      document.querySelector(".score").textContent = 0;
    }
  }
  
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "rgb(35,35,35)";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "5rem";
});
