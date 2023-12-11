// Project Title
// 
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let array=[];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  requestPointerLock();
  square(width/2,height/2,10);
  for(let a of array){
    a.move();
    a.display();
  }
}

function mousePressed(){
  array.push(new First(mouseX,mouseY));
}


class First{
  constructor(x,y){
    this.x=mouseX;
    this.y=mouseY;
    this.objectLocX=width/2;
    this.objectLocY=height/2;
  }

  move(){
    if(movedX>pmouseX){
      this.objectLocX-=1;
    }
    if(mouseX<pmouseX){
      this.objectLocX+=1;
    }
    if(mouseY>height/2){
      this.objectLocY-=1;
    }
    if(mouseY<height/2){
      this.objectLocY+=1;
    }
  }

  display(){
    rect(this.objectLocX,this.objectLocY,10,100);
  }
}