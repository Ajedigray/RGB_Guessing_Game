
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init(){
	reset();
	setupModeButtons();
	setupSquares();
}

function setupModeButtons(){
	for (var i = 0; i < modeBtns.length; i++){
		//figure out how many squares to show
		//pick new colors
		//pick a new picked color
		//update page to reflect changes
		modeBtns[i].addEventListener("click", function (){
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++){
		//add quick listener to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetBtn.textContent = "Play Again?";
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});
	}
}

resetBtn.addEventListener("click", function(){
	reset();
})

function reset(){
	messageDisplay.textContent = "";
	// this.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
	//generate a new list of random colors
	colors = generateRandomColors(numSquares);
	//pick a new pickedColor
	pickedColor = getRandomColor();
	//change colors of squares
	for (var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}else{
			squares[i].style.display = "none";
		}
	}
	colorDisplay.textContent = pickedColor;
}

function changeColors(color){
	//loop thorugh all squares
	for (var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function createRandomColor(){
	//Create 3 random numbers between 0 and 255
	//Build a string to create and RGB with the 
	//random three numbers
	var randomColor = "";
	var red = Math.ceil(Math.random()*255);
	var green = Math.ceil(Math.random()*255);
	var blue = Math.ceil(Math.random()*255);

	randomColor+="rgb(" + red + ", " + green + ", " + blue + ")";
	return randomColor;
}

function generateRandomColors(num){
	//populate colors array with random colors
	var colors = [];
	for (var i = 0; i < num; i++){
		colors.push(createRandomColor());
	}
	return colors;
}

function getRandomColor(){
	//create random number between 0 and 5
	var randNum = Math.floor(Math.random()*colors.length);
	//create random color that exists in colors array
	var randCol = colors[randNum];
	return randCol;
}
