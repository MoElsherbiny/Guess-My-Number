"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let hightScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
const displayBackGroundColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("😒 No Number!");
  } else if (guess === secretNumber) {
    // When Player Wins
    displayMessage("🎉Correct Number");
    score++;
    displayScore(score);
    displayBackGroundColor("#753692");
    displayNumber(secretNumber);

    if (score > hightScore) {
      hightScore = score;
      document.querySelector(".highscore").textContent = hightScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too Hight" : "📉 Too Low");
      score--;

      displayScore(score);
    } else {
      displayMessage("🎃You Lost");

      document.querySelector(".score").textContent = 0;
    }
  }
});
let again = document.querySelector(".btn-again").textContent;
document.querySelector(".btn-again").addEventListener("click", function () {
  if (again) {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    displayMessage("Start guessing...");
    displayScore(score);
    document.querySelector(".guess").value = "";
    displayNumber("?");
    displayBackGroundColor("#222");
  }
});
