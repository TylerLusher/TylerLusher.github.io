let array=[];
let ar;
let theMap;
let RB=[];
let bullet=[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  ar=new Rounds(40);
  theMap=new Maps();
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
    RB.push (new Ballon(0,height/2));
  }
}

class Maps{
  constructor(){

  }

  display(){
    let count=-1;
    rect(-5,height/2,width,20);
    for (let hi of array){
      hi.display();
    }
    for (let hi of RB){
      count+=1;
      hi.display(count);
    }
    for (let hi of bullet){
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
    this.checkIfBaloonIsClose();
  }
  checkIfBaloonIsClose(){
    if (this.x-25<ballonX && this.x+25>ballonX){
      bullet.push(new Bullet(this.x,this.y,ballonX));
    }
  } 
}

class Bullet{
  constructor(d,f,c){
    this.bx=d;
    this.by=f;
    this.thingX=c;
    this.thingY=ballonY;
  }
  move(){
    let speed=2;
    if (this.thingX>this.bx){
      this.bx+=speed;
    }
    if (this.thingX<this.bx){
      this.bx-=speed;
    }
    if (this.thingY>this.by){
      this.by+=speed;
    }
    if (this.thingY<this.by){
      this.by-=speed;
    }
    this.thingX+=1;
  }
  display(){
    //if(){
    //// check if ballon is still alive 
    //}
    let counts=-1;
    circle(this.bx,this.by,2.5);
    this.move();
    for (let hi of RB){
      counts+=1;
      hi.ballonHp(this.bx,this.by,counts);
    }
  }
}
let ballonX;
let ballonY;
let ballonArray=[];

class Ballon{
  constructor(x,y){
    this.bHp;
    this.baX=x;
    this.baY=y;
    this.bxs;
    this.bys;
    this.round;
  }
  move(){
    this.baX+=1;
    ballonX=this.baX;
    ballonY=this.baY;
  }
  display(bruh){
    if (this.baX>width){
      RB.splice(bruh,1);
    }
    else{
      this.move();
      circle(this.baX,this.baY,20);
    }
  }
  ballonHp(k,j,s){
    if(this.baX+5>=k && this.baX-4<=k && this.baY+5>=j && this.baY-4<=j){
      bullet.splice(s,1);
      RB.splice(s,1);
    }
  }
}

class Rounds{
  constructor(r){
    this.round=r;
  }
  display(){

  }

}