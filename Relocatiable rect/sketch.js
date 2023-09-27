// relocatable ractangles
// Tyler Lusher 
// Sept 27, 2023
// Hover Effect + MouseDrage objects

// Global Variables
let x, y, rHeight, rWidth; // (x,y) center references
let rRight, rLeft, rTop , rBottom; // edge positions
let mouseOver = false; // are we hovering over the rectangele?
let pickedUP = false; // are we currently moving the object?
let offX, offY; // do object doesn't snap to mouse 

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER); // can change anytime with rectMode(CORRNER)
  x = width/2; 
  y = height/2;
  rHeight = 100;
  rWidth = 200;

}

function updateEdgePositions(){
  // Updates right/left/top/bottom for our rest 
  rLeft = x - rWidth/2;
  rRight = y + rWidth/2;
  rTop = y - rHeight/2;
  rBottom = y + rHeight/2;

}

function drawRectangle(){
  // render rectangle and checks for mouse interactions 
  updateEdgePositions();
  print(rRight + ' ' + rLeft  + ' ' + rTop + ' ' + rBottom);

  // Are we in the region?
  if(mouseX > rLeft && mouseX < rRight && mouseY > rTop && mouseY < rBottom){
    fill(70,230,130);
    mouseOver = true;
  }
  else{
    fill(30,70,170);
    mouseOver = false;
  }

  if(pickedUP){
    x = mouseX - offX;
    y = mouseY - offY;
  }


  // draw rect
  rect(x,y,rWidth,rHeight);
}

function mousePressed(){
  if(mouseOver){
    pickedUP = true;
    offX = mouseX - x;
    offY = mouseY - y;
  }
}

function mouseReleased(){
  pickedUP = false;
}

function draw() {
  background(220);
  drawRectangle();
}
