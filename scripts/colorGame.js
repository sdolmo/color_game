var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var headingDisplay = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
  //add initial colors to squares
  squares[i].style.background = colors[i];
  //add click listeners to squares
  squares[i].addEventListener("click", function(){
    //grab color of picked square
    var clickedColor = this.style.background;
    //compare clicked color with picked color
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColor(clickedColor);
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try again";
    }
  })
}

function changeColor(color){
  headingDisplay.style.background = color;
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}