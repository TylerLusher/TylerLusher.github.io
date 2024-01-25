// CS30 - Final Programming Challenge
// Tyler Scott Lusher 
// 1/25/2024
//
//
// this was a fun final
//

//variable declarations - included for convenience, but you don't have to use these.
//                        feel free to handle this in a different way if you prefer.

let staticImages = [];      //array to hold 1 image for each direction -> should use this to start  
let animationImagesLeft = [];   //array to hold all 8 images in left direction
let animationImagesRight = [];   //array to hold all 8 images in right direction
let animationImagesUp = [];   //array to hold all 8 images in up direction
let animationImagesDown = [];   //array to hold all 8 images in down direction
let playerFox;
let aiFox;

function preload(){
  loadStatic();     //defined at bottom
  loadAnimation();  //also defined at bottom

}

function loadStatic(){
  staticImages.push(loadImage("/assets/left1.png"));   //0 - left
  staticImages.push(loadImage("/assets/right1.png"));   //1 - right
  staticImages.push(loadImage("/assets/up1.png"));   //2 - up
  staticImages.push(loadImage("/assets/down1.png"));   //3 - down
}

function loadAnimation(){
  for(let i = 1; i <= 8; i++){  //LEFT
    animationImagesLeft.push(loadImage("/assets/left" + i + ".png"));
  }

  for(let i = 1; i <= 8; i++){  //RIGHT
    animationImagesRight.push(loadImage("/assets/right" + i + ".png"));
  }

  for(let i = 1; i <= 8; i++){  //UP
    animationImagesUp.push(loadImage("/assets/up" + i + ".png"));
  }

  for(let i = 1; i <= 8; i++){  //DOWN
    animationImagesDown.push(loadImage("/assets/down" + i + ".png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  playerFox =  new Fox(width/2,height/2);
  aiFox = new Fox(width/2,height/2);
  frameRate(60);
}

function draw() {
  background(220);
  playerFox.display();
  aiFox.aiDisplay();
}


class Fox{
  constructor(x,y){
  this.foxX=x;
  this.foxY=y;
  this.foxDirection=1;
  this.foxSizeSideViewX=70;
  this.foxSizefrontViewX=48;
  this.foxSizeY=79;
  this.size=5;
  this.speed=1;
  this.pepsiMode=0;
  this.foxSizeFrontXog;
  this.foxSizeSideXog;
  this.foxSizeYog;
  this.animationCount=1;
  }

  aiDisplay(){ // this is the one for the ai controlled fox 
    if (frameCount%30===0){ // changes direction every 30 frames 
      this.foxDirection=Math.floor(random(0,4));
    }

    if (playerFox.checkIfFoxIsClose(this.foxX,this.foxY)){ // this tints the ai fox if its to close to the player fox
      tint("blue");
    }
    else{
      noTint();
    }
    this.foxMovement(1);
    this.foxAnimation();
  }

  checkIfFoxIsClose(x,y){ // this uses the player fox's cordenats and checks them agenst the ai fox cordenats to see if they are close
    if(dist(this.foxX,this.foxY,x,y)<200){
      return true
    }
  }

  display(){ // this is the display for the player controlled fox
    noTint();
    this.pepsi();
    this.foxMovement();
    this.foxAnimation();
  }

  foxAnimation(){// this is the animation function for the fox swaping changing the animation image once every 10 frames
    if(frameCount%10===0){
      this.animationCount++;
    }

    if(this.animationCount>=8){
      this.animationCount=0;
    }

    if (this.foxDirection>=2){
      if (this.foxDirection===3){
        image(animationImagesDown[this.animationCount],this.foxX,this.foxY,this.foxSizefrontViewX,this.foxSizeY)
      }

      if (this.foxDirection===2){
        image(animationImagesUp[this.animationCount],this.foxX,this.foxY,this.foxSizefrontViewX,this.foxSizeY)
      }
    }

    else{
      if (this.foxDirection===0){
        image(animationImagesLeft[this.animationCount],this.foxX,this.foxY,this.foxSizeSideViewX,this.foxSizeY)
      }

      if (this.foxDirection===1){
        image(animationImagesRight[this.animationCount],this.foxX,this.foxY,this.foxSizeSideViewX,this.foxSizeY)
      }
    }
  }

  foxMovement(aiFox){ // this one is the drawFox function 
    if (aiFox===1){// this is the movement for the ai controlled fox
      if (this.foxDirection===2){
        if(this.foxY>0){
          this.foxY-=this.speed;
        }
        this.foxDirection=2;
      }
    
      if (this.foxDirection===1){
        if(this.foxX>0){
          this.foxX-=this.speed;
        }
        this.foxDirection=0;
      }
    
      if (this.foxDirection===3){
        if(this.foxY+this.foxSizefrontViewX<height){
          this.foxY+=this.speed;
        }
        this.foxDirection=3;
      }
    
      if (this.foxDirection===4){
        if(this.foxX+this.foxSizeSideViewX<width){
          this.foxX+=this.speed;
        }
        this.foxDirection=1;
      }
    }
    else {// this is the movement fot the fox the player controlls
      if (key==="w"&&keyIsPressed || this.pepsiMode===1 && key==="w"){
        if(this.foxY>0){
          this.foxY-=this.speed;
        }
        this.foxDirection=2;
      }
    
      if (key==="a"&&keyIsPressed|| this.pepsiMode===1 && key==="a"){
        if(this.foxX>0){
          this.foxX-=this.speed;
        }
        this.foxDirection=0;
      }
    
      if (key==="s"&&keyIsPressed|| this.pepsiMode===1 && key==="s"){
        if(this.foxY+this.foxSizefrontViewX<height){
          this.foxY+=this.speed;
        }
        this.foxDirection=3;
      }
    
      if (key==="d"&&keyIsPressed|| this.pepsiMode===1 && key==="d"){
        if(this.foxX+this.foxSizeSideViewX<width){
          this.foxX+=this.speed;
        }
        this.foxDirection=1;
      }
    }
  }

  foxSize(y){ // this is the size for the fox to make sure it is not to small or too big
    if (y>=height/2){
      if(this.size>=0){
        this.size--;
        this.foxSizeSideViewX-=5;
        this.foxSizefrontViewX-=5;
        this.foxSizeY-=5;
      }
    }
    else{
      if (this.size<=10){
        this.size++;
        this.foxSizeSideViewX+=5;
        this.foxSizefrontViewX+=5;
        this.foxSizeY+=5;
      }
    }
  }

  swapPepsi(){ // this swaps the pepsi mode so it can be toggled
    if(this.pepsiMode===0){
      this.pepsiMode=1;
      this.foxSizeFrontXog=this.foxSizefrontViewX;
      this.foxSizeSideXog=this.foxSizeSideViewX;
      this.foxSizeYog=this.foxSizeY;
    }
    else{
      this.pepsiMode=0;
      this.speed=1;
      this.foxSizefrontViewX=this.foxSizeFrontXog;
      this.foxSizeSideViewX=this.foxSizeSideXog;
      this.foxSizeY=this.foxSizeYog;
      noTint();
    }
  }

  pepsi(){// this chooses random colors and size for pepsi mode
    if(this.pepsiMode===1){
      let color=["red","green","blue"]
      tint(color[Math.floor(random(0,2))]);
      this.speed=5;
      this.foxSize(random(0,height));
      this.foxDirection=Math.floor(random(0,3));
    }
  }
}

function keyPressed(){
  if(key==="p"){
    playerFox.swapPepsi();
  }
}

function mouseClicked(){
  playerFox.foxSize(mouseY);
}