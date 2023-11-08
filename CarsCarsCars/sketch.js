// CarsCarsCars
// Tyler Lusher
// 17 October,2023
//

let carss;


function setup() {
  createCanvas(windowWidth, windowHeight);
  //eastBound.push(new Cars(0,0,0,color(random(255),random(255),random(255))));
  //weastBound.push(new Cars(width,height,1,color(random(255),random(255),random(255))));
}

let eastBound=[];
let weastBound=[];
let carDirection =0;
let yPos;
let xPos;
let heightY;
let yHeight;
let carType = 0;
let randColor;
let hig;

function draw() {
  //background(220);
  drawRoad();
  for (let m of eastBound){
    m.display();
  }
  for (let m of weastBound){
    m.display();
  }
}

function mouseClicked(){
  randColor = color(random(255),random(255),random(255));
  carDirection = floor(random(2));
  carType = floor(random(2));
  hig=height/2;
  heightY = hig - 100;
  yHeight = hig + 100;
  if (carDirection===1){
    yPos = random(heightY,hig);
    xPos = 0;
    eastBound.push(new Cars(xPos,yPos,carType,randColor));
  }
  else{
    yPos=random(hig,yHeight);
    xPos=width-50;
    weastBound.push(new Cars(xPos,yPos,carType,randColor));
  }


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
  constructor(xPos,yPos,carType,xx){
    this.carsss;
    this.xPos=xPos;
    this.yPos=yPos;
    this.carType=carType;
    this.xx=xx;
    
  }

  display(){
    if (this.carType===0){
      fill(this.xx);
      rect(this.xPos,this.yPos,10,20);
    }
    else{
      fill(this.xx);
      rect(this.xPos,this.yPos,20,30);
    }
  }

  update(){
  //

  }

  car(){
    if (carType === 0){
      fill(random(255),random(255),random(255));
      rect(xPos,yPos,10,20);
    }
  }
}