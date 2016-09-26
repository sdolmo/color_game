var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1Display = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  //genearate new colors
  colors = generateRandomColors(numSquares);
  //pick one color
  pickedColor = pickColor();
  //update color display in h1
  colorDisplay.textContent = pickedColor;
  //update squares displayed
  for(var i = 0; i < squares.length; i++){
    if(colors[i] ){
      squares[i].style.background = colors[i];
    } else {
      //hide the last 3 colors hint => "display: none"
      squares[i].style.display = "none";
    }
  }
})

hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  //genearate new colors
  colors = generateRandomColors(numSquares);
  //pick one color
  pickedColor = pickColor();
  //update color display in h1
  colorDisplay.textContent = pickedColor;
  //update squares displayed
  for(var i = 0; i < squares.length; i++){
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
  }
})

for(var i = 0; i < squares.length; i++){
  //add initial colors to squares
  squares[i].style.background = colors[i];
  //add click listeners to squares
  squares[i].addEventListener("click", function(){
      //grab color of picked square
      var clickedColor = this.style.background;
      //compare clicked color with picked color
      console.log(clickedColor, pickedColor);
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColor(clickedColor);
        h1Display.style.background = clickedColor;
        resetButton.textContent = "Play again?"
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try again";
      }
  })
}

function changeColor(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = [];
  //add num random colors to array num times
  for(var i = 0; i < num; i++){
    //get random color and push into array
    arr.push(randomColor());
  }
  //return the array
  return arr
}

function randomColor(){
  //pick a "red" from 0-255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0-255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0-255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetButton.addEventListener("click", function(){
  //generate all new color
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  h1Display.style.background = "#232323";
  //change colors of squares
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
  }
  //change button content
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = " ";
})
