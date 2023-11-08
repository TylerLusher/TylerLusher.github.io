// OOP Pair Programming Starter Code
// Tyler L, Skyler M,Josh S
// monday


// ------------------------------------------------------------------------- //
// You don't need to edit this section...
//Global Vriables 

let enterprise;
let shipImage, bulletImage;
//this is to switch from mouse to arrow
let lastNum;
let bullets=[];

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width/2, height/2, shipImage);
  //imageMode(CENTER);
}

function draw() {
  background("black");
  enterprise.update();
  enterprise.display();
  
}

function keyPressed() {
  enterprise.handleKeyPress();
  if(key==='1'){
    lastNum=1;
  }
  else if(key==='2'){
    lastNum=2;
  }
}


// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage) {
    // define the variables needed for this ship
    this.x=x;
    this.y=y;
    this.theImage=theImage;
  }

  update() {
    // move ship -- you might want to use the keyIsDown() function here
    if (keyIsPressed){
      if (lastNum===1){
        if(keyCode===UP_ARROW){
          this.y-=10;
        }
        if(keyCode===DOWN_ARROW){
          this.y+=10;
        }
        if(keyCode===LEFT_ARROW){
          this.x-=10;
        }
        if(keyCode===RIGHT_ARROW){
          this.x+=10;
        }
      }
      if(lastNum ===2){
        this.y=mouseY;
        this.x=mouseX;
      }
    }
    // if doing extra for experts, show bullet(s)
    //Bullet.update();
  }

  display() {
    // show the ship
    image(shipImage,this.x,this.y);
  }

  handleKeyPress() {
    // you only need to use this if you are doing the extra for experts...
    // if you are, you should make a bullet if the space key was pressed
    if(key === " "){  
      //Bullet.display();
    }

  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, theImage) {
    // define the variables needed for the bullet here
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.theImage;
  }

  update() {
    // what does the bullet need to do during each frame? how do we know if it is off screen?
    this.x-=10;
    this.y-=10;
  
  }

  display() {
    // show the bullet
    image(bulletImage,this.x,this.y);
  }

  isOnScreen() {
    // check if the bullet is still on the screen
    //if 

  }
}

