
var squares = document.querySelectorAll(".square");
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = getRandomColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
colorDisplay.textContent = pickedColor;
hardBtn.classList.add("selected");

easyBtn.addEventListener("click", function (){
	//highlight easyBtn
	//de-select hardBtn
	//generate 3 colors
	//pick random color
	//assign 3 colors to the first 3 squares
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "steelblue";
	reset.textContent = "New Colors";
	this.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = getRandomColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function (){
	//highlight hardBtn
	//de-select easyBtn
	//generate 3 colors
	//pick random color
	//assign 3 colors to the first 3 squares
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "steelblue";
	reset.textContent = "New Colors";
	this.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = getRandomColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});;


reset.addEventListener("click", function(){
	messageDisplay.textContent = "";
	this.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
	//generate a new list of random colors
	colors = generateRandomColors(numSquares);
	//pick a new pickedColor
	pickedColor = getRandomColor();
	//change colors of squares
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	colorDisplay.textContent = pickedColor;
})

function createSquares(){

}

for (var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add quick listener to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			reset.textContent = "Play Again?";
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	})
}

function reset(){

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
