// Planets and Moons
// Tyler Lusher
// October 17, 2023
// a look at recreating objects, objects IN objects 

// Global Var
let myPlanet;
let gos;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myPlanet = new Planet(width/2,height/2);
}

function draw() {
  background(225);
  myPlanet.display();
}

function mouseClicked(){
  if(keyIsPressed && keyCode === SHIFT){
    //overwrite an object?
    myPlanet = new Planet(mouseX,mouseY);
  }
  else{
    myPlanet.createMoon();
  }
}

class Planet{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.s=100;
    this.radius = this.s/2;
    this.moons=[]; // fill this with moon objects 
  }

  display(){
    circle(this.x,this.y,this.s);
    if (gos=== 0){
      fill(225);
      circle(this.x,this.y,this.s);
      for(let m of this.moons){
        m.update();
      }
    }
    else{
      for(let m of this.moons){
        m.update();
      }
      fill(225);
      circle(this.x,this.y,this.s);
    }
  }

  createMoon(){
    this.moons.push(new Moon(this.x,this.y));
  }
}

class Moon{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.steps= 20; this.speed=5;
  }
  
  update(){
    fill(100);
    this.x += this.speed;   //movment 
    this.steps--;           //-=1
    if(this.steps === 0){
      this.steps= 40;
      this.speed *=-1;
    }                       //display
    circle(this.x,this.y,30);
    if (this.speed>0){
      gos=1;
    }
    else{
      gos=0;
    }
  }
}