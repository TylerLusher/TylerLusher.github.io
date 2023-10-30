// CarsCarsCars
// Tyler Lusher
// 17 October,2023
//

let eastBound=[];
let weastBound=[];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //background(220);
  drawRoad();
  Cars.car();
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
  constructor(x,y,c,t,d){
    this.x = x;
    this.y = y;
    this.c = c;
    this.t = t;
    this.d = d;
  }

  display(){

  }


  car(){
    let carType = random(0-2);
    let carDirection = random(0-2);
    let yPos;
    let xPos;
    let heightY = height - 100;
    let yHeight = height + 100;
    if (carType === 0){
      fill(random(255),random(255),random(255));
      if (carDirection===0){
        yPos = random(heightY-height);
        xPos = 0
      }
      else{
        yPos=random(height-yHeight);
        xPos=width;
      }
      rect(xPos,yPos,10,20);
    }
  }
}