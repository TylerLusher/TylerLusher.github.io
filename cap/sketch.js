let array=[];
let ar;
let theMap;
let RB;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ar=new Rounds(40);
  theMap=new Maps();
  RB=new Ballon();
}

function draw() {
  background(220);
  theMap.display();
}

function mousePressed(){
  if (key === "w"){
    array.push(new Tower(mouseX,mouseY));
  }
  if (key === "b"){
    
  }
}

class Maps{
  constructor(){

  }

  display(){
    rect(-5,height/2,width,20);
    for (let hi of array){
      hi.display();
    }
  }

}

class Tower{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }

  display(){
    circle(this.x,this.y,5);
  }
}

class Bullet{
  constructor(d,f){
    this.bx=d;
    this.by=f;
  }
  move(){
    if (mouseX>this.bx){
      this.bx+=1;
    }
    if (mouseX<this.bx){
      this.bx-=1;
    }
    if (mouseY>this.by){
      this.by+=1;
    }
    if (mouseY<this.by){
      this.by-=1;
    }
  }
  display(){
    circle(this.bx,this.by,2.5);
    this.move();
  }
}

class Ballon{
  constructor(d,f,r){
    this.bHp;
    this.baX;
    this.baY;
    this.bxs=d;
    this.bys=f;
    this.round=r;
  }
  move(){

  }
  display(){

  }
  ballonHp(){

  }
}

class Rounds{
  constructor(r){
    this.round=r;
  }
  display(){

  }

}