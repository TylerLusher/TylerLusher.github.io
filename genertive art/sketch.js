// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let arry=[];

function setup() {
  createCanvas(2000, 2000);
  noCursor();
}

function draw() {
  //background(220);
  if(frameCount%5===1){
    arry.push(new MoreArt(floor(random(0,2000)),floor(random(0,2000))));
  }
  for(let i of arry){
    i.move();
    i.display();
  }
}

function makeMoreArt(){
  //w
}

function keyPressed(){
  if (key ==="s"){
    save("go.png");
  }
  if (key ==="d"){
    arry.push(new MoreArt(floor(random(0,2000)),floor(random(0,2000))));
  }
  if (key ===" "){
    background(0);
  }
}

class MoreArt{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
  move(){
    let rand = floor(random(0,4));
    if (rand===0){
      this.x+=3;
      this.y+=3;
    }
    else if(rand===1){
      this.x-=3;
      this.y-=3;
    }
    else if(rand===2){
      this.x-=3;
      this.y+=3;
    }
    else{
      this.x+=3;
      this.y-=3;
    }
  }
  display(){
    circle(this.x,this.y,2);
  }

}