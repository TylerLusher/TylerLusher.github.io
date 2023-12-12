// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let array=[];
let ab=[];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

}

function mousePressed(){
  if (key === "w"){
    array.push(new Tower(mouseX,mouseY,ab.push(new Bullet(this.x,this.y))));
  }
}

class Tower{
  constructor(x,y,b){
    this.x=x;
    this.y=y;
    this.bt=b;
  }

  display(){
    circle(this.x,this.y);
    this.bt.display();
    this.bt.move();
  }
}

class Bullet{
  constructor(x,y){
    this.bx;
    this.by;
    this.x=x;
    this.y=y;
  }
  move(){
    if (this.x>this.bx){
      //bruh
    }
  }
  display(){

  }
}

