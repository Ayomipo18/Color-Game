var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var modeButtons = document.querySelectorAll(".mode");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var message = document.querySelector("#message");


init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	message.textContent = "";
	h1.style.background = "steelblue";
		for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//compare color to pickedColor
			var clickedColor = this.style.background;
			if(clickedColor === pickedColor){
				h1.style.background = pickedColor;
				changeColors(pickedColor);
				message.textContent = "Correct";
				resetButton.textContent = "Play Again?";
			} else{
				this.style.background = "#232323";
				message.textContent = "Try Again";
			}
		})
	}	
}


function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}


function setupcolors(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i=0; i<num; i++){
		arr.push(setupcolors())
	}
	return arr;
}

function changeColors(color){
for(var i=0; i<squares.length; i++){
	squares[i].style.background = color;
}}