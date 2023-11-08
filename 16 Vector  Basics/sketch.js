// Vector Basics
// Tyler Lusher 
// November 1, 2023

//Global Variables
let movers = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mouseWheel(){
  movers.push(new Mover(mouseX,mouseY));
}

function draw() {
  background(220);
  //movers.push(new Mover(mouseX,mouseY));
  for(let i=0;i<movers.length;i++){
    let m = movers [i];
    m.move();
    m.display();
    if(!m.alive){
      movers.splice(i,1);
      i--;
    }
  }
}


class Mover{
  // constructor and class properties
  constructor(x,y){
    this.position = createVector(x,y);
    this.s=20;
    this.velocity = createVector(random(-3,3),random(-5,5));
    this.gravity = createVector(0,0.1);
    this.lifetime = Math.floor(random(100,200));
    this. alive=true;
  }
  //Class methods 
  move(){
    // Apply forces first (modify our velocity)
    this.velocity.add(this.gravity);
    //then apply our velovity to position
    this.position.add(this.velocity);
    //up is a mutator method
    //p5.vector.add(this.position,this.velocity);
    //this is a static method
    this.lifetime--;
    if ()
  }

  display(){
    push();
    translate(this.position.x,this.position.y);
    circle(0,0,this.s);
    pop();


  }


}