// 
// variables. Also a fading effect.

// Global Variables
let mouseSide; // numbers would be better 
let fillValue= 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
  updateMouseState(); // for this demo you do not have to 
}

function updateMouseState(){
  //figure out if the mouse is left/right
  if (mouseX>width/2){
    mouseSide="right";
  } 
  else mouseSide="left";
  print (mouseSide);
}

function draw() {
  background(220);
  updateMouseState();
  renderSquares();
}

function renderSquares(){
  // darw two rectangles on either half of the canvas
  if (mouseSide==="left"){
    fill(0);
  }
  else{
    fill(255);
  }
  rect(0,0,width/2,height);       // left half

  if (mouseSide === "right"){
    fillValue -=5;
  }
  else{
    fillValue+=5;

  }
  fillValue = constrain(fillValue,0,255);
  fill(fillValue);
  rect(width/2,0,width/2,height); //right half
}