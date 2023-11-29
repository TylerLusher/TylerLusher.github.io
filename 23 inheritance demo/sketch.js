// inheritance 
// tyler Lusher 
// No 29, 2023
// 

let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i =0; i<10;i++){
    objects.push(new AnimatedObjects(random(width),random(height)));
  }
  for (let i =0; i<10;i++){
    objects.push(new CircleObject(random(width),random(height),random(20,40)));
  }
  for (let i =0; i<10;i++){
    objects.push(new LineObject(random(width),random(height),random(20,40)));
  }
}

function draw() {
  background(220);
  for (let o of objects){
    o.move();
    o.display();
  }
}

// "parent" or  "super" class
class AnimatedObjects {

  constructor(x,y){
    this.y=y;
    this.x=x;
    this.size=1;
  }

  move(){ // wiggle movement 
    this.x += random(-2,2);
    this.y += random(-2,2);
  }

  display(){
    strokeWeight(4);
    point(this.x,this.y);
  }
}

class CircleObject extends AnimatedObjects{
  constructor(x,y,d){
    super(x,y);
    this.size=d;
  }

  display(){
    strokeWeight(3);
    circle(this.x,this.y,this.size);
  }
}

// child class 2
class LineObject extends AnimatedObjects{
  constructor(){
    super(random(width),random(height));
  }
  move(){
    super.move();// copies in the wiggle code 
    this.x+=5;
    if(this.x>width)this.x=0;
  }
  display(){
    if(mouseIsPressed){
      strokeWeight(10)
    }
    else{strokeWeight(2);}
    line(this.x,this.y,this.x+15,this.y);
  }
}