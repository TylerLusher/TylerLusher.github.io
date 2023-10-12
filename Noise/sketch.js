// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//GLOBAL VARIABLES
let rectHeight=0;

let highestY;
let xPos;
let gos = 50;
const noiseShift = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  rectPerlen();
  //frameRate(24);
}

function flag(x,y){
  fill(100);
  rect(x,y,x+0.5,y-20);
  triangle(x,y-21,x,y-10,x+10,y-15);
}

function rectPerlen(gos){
  fill(0);
  strokeWeight(2);
  stroke(0);
  highestY=height;
  xPos=0;
  for(let x = 0; x<width;x=x+0.5){
    rectHeight = noise(gos);
    rectHeight = map(rectHeight,0,1,0,height);
    gos += noiseShift;
    rect(x,height,0.5+x,rectHeight);
    if(highestY>rectHeight){
      highestY=rectHeight;
      xPos=x;
    }
  }
  flag(xPos,highestY);
}



function draw() {
  background(220);
  gos+=0.01;
  rectPerlen(gos);
}

