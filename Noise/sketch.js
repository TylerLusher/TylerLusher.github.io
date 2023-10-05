// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//GLOBAL VARIABLES
let rectHeight=0;
let noisePositionRound=50;
let highestY;
let xPos;
const noiseShift = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  fill(0);
  rectPerlen();
  flag();
}

function flag(){
  square(xPos,height-highestY,5);
  rect(xPos,height-highestY,xPos+4,rectHeight);
}

function rectPerlen(){
  strokeWeight(2);
  stroke(0);
  highestY=0;
  for(let x = 0; x<width;x=x+0.5){
    rectHeight = noise(noisePositionRound);
    rectHeight = map(rectHeight,0,1,0,height);
    noisePositionRound += noiseShift;
    rect(x,height,0.5+x,rectHeight);
    if(highestY<rectHeight){
      highestY=rectHeight;
      xPos=x;
    }
  }

}



function draw() {
}

