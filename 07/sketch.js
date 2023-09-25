// drawing with loops
// Tyler Lusher 
// sept 25 2023
// using single and nested loops for drawing purposes 

// Global Variables 
let numSegments = 30;
let segmentHeight;
let currentBackground = 0; // state variable (0-2)
const GRID_SPACING = 15; // CAP -> const

function setup() {
  createCanvas(windowWidth, windowHeight);
  segmentHeight = height/numSegments;
}

function gradient(){
  // draw a series of skinny rectangles -> gradient
  noStroke();
  for (let i = 0; i < numSegments; i++) {
    let y = i * segmentHeight;
    let c = map(y,0,height, 0, 255);
    fill(c,255-c,255); //fill(r,g,b); upR downG Max-Bkue
    rect(0,y,width,segmentHeight);
  }
  stroke(0);
}

function selectBackround(){
  // check the state variable currentBackround
  // and render the appropriate one.
  if(currentBackground===0) gradient();
  else if (currentBackground===1) background(255);
  else background(60,240,120);

}

function draw() { 
  selectBackround();
  grid();
}

function grid(){
  // use a nested loop to draw a grid on the screen
  for(let x = 0; x < width; x+= GRID_SPACING ){
    for(let y = 0; y < height; y+=GRID_SPACING){
      //print(x + " " + y);
      if(dist(x,y,mouseX,mouseY) < 50){
        fill(255,0,0);
      }
      else fill(0);
      circle(x,y,10);
      //test 1
      //line(x,y,mouseX,mouseY);
    }

  }
}

function mousePressed(){
  print(mouseButton);
  if (mouseButton === LEFT){
    currentBackground -= 1;
    if (currentBackground<0)currentBackground=2;
  }
  if (mouseButton === CENTER){
    currentBackground += 1;
    if (currentBackground>2)currentBackground=0;
  }
  return false; // does work override the default behavior 

}