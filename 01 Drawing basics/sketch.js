// p5 Drawing Basics
// Tyler Lusher 
//sept 12, 2023
//
// Extra for Experts:
// Driving a bus..............

//global variables
let busX =0, busY=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
} // fullwindowwidth fill height 
// This is a test
function draw() {
  background(255);
  fill(0,255,0);
  rect(200,200,1000),1000;
  drawBus();
  moveBus();

  
}


function drawBus(){
  fill(255);
  rect(50+busX,50+busY,100,50);
  fill(0)
  circle(80+busX,100+busY,20);
  circle(120+busX,100+busY,20);


}
function moveBus(){
  if (keyIsPressed){
    print("Key: ",key, "\tkeyCode: ", keyCode);
    if(keyCode===LEFT_ARROW){
      busX=busX-10;
  
    }
    if(keyCode===RIGHT_ARROW){
  busX=busX+10;
  
    }
    if(keyCode===DOWN_ARROW){
      busY=busY+10;
    }
    if(keyCode===UP_ARROW){
      busY=busY-10;
    }
  }

}
/*
function keyPressed(){
  print("Key: ",key, "\tkeyCode: ", keyCode);
  if(keyCode===LEFT_ARROW){
    busX=busX-10;

  }
  if(keyCode===RIGHT_ARROW){
busX=busX+10;

  }
  if(keyCode===DOWN_ARROW){
    busY=busY+10;
  }

}
*/