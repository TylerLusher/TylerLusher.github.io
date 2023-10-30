// Primitive Paint
// Tyler Lusher
// october 30

// key binds 
//
// 1 - green
// 2 - red 
// 3 - blue
//
// a - rectangle
// s - ellipse
// d - circle
//
// mouse click - draws selected shape
//

// Global Variable 
let color = 0;
let colorList = ["Green","Red","Blue"];
let gra;

// this hides the cursor and sets up the font 
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  gra = createGraphics( width,height);
  textFont("Georgia");
  textSize(50);
  noCursor();
}


function draw() {
  background(220);
  fill(colorList[color]);
  rect(mouseX,mouseY,10);
  mouseCursor();
  drawShape();
  gra.textFont("Georgia");
  gra.textSize(50);
  gra.text("Tyler Lusher",25,50);
  image(gra,0,0);
  coolshape();
}

function keyPressed(){
  Colors();
  drawShape();
}

// this checks what keys were pressed and 
// sets color to the corrosponding value in the array
function Colors(){
  if ( key === '1'){
    color = 0;
  }
  if ( key === '2'){
    color = 1;
  }
  if ( key === '3'){
    color = 2;
  }
  gra.fill(colorList[color]);
}

// this does the same as the Colors function but this 
// one checks if the mouse was clicked and then draws 
// the correct shape
function drawShape(){
  if (mouseIsPressed){
    if ( key === 'a'){
      gra.rect(mouseX,mouseY,50,100);
    }
    if ( key === 's'){
      gra.ellipse(mouseX,mouseY,50,100);
    }
    if ( key === 'd'){
      gra.circle(mouseX,mouseY,50);
    }
  } 
  if ( key === ' '){
    gra = createGraphics( width,height);
  }
}

// this one make a shape on the currsor that shows you what shape is going to be make 
function mouseCursor(){
  if ( key === 'a'){
    rect(mouseX,mouseY,50,100);
  }
  if ( key === 's'){
    ellipse(mouseX,mouseY,50,100);
  }
  if ( key === 'd'){
    circle(mouseX,mouseY,50);
  }
}

// this one make a cool shape on the canvas with a random color 
function coolshape(){
  let i = random(200);
  fill(i+10,i,i+100);
  circle(width-50,height-50,50);
}