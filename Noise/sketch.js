// Perlen Noise
// Tyler Lusher
// october 30 2023


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
}

// this draws the flag at the highest y and x that was gotten in rect perlen
function flag(x,y){
  fill(100);
  rect(x,y,x+0.5,y-20);
  triangle(x,y-21,x,y-10,x+10,y-15);
}

// this grabs the noise position and draws a recangle from the bottem 
//of the screen and then checks to see if the heightes y valus is smaller 
//than the last y then saves the x and y value so that it can draw the flage
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


// this just draws and adds 0.05 more to the perlen value that it 
//looks at so that it slowly moves from right to left
function draw() {
  background(220);
  gos+=0.05;
  rectPerlen(gos);
}

