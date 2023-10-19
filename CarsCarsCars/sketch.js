// CarsCarsCars
// Tyler Lusher
// 17 October,2023
//


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //background(220);
  drawRoad();
}

function drawRoad(){
  fill(0);
  rect(0,height/2 -100,width,200);
  colorMode(RGB,100);
  stroke(255,255,0);
  for(let lines=0;lines<width; lines=lines+50){
    line(lines,height/2,lines+40,height/2);
  }
}

class Cars{
  constructor(){

    
  }

}