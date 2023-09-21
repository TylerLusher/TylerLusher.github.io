// Colors and cavases program 
// Tyler Lusher 
// sept 13 2023
//
// Extra for Experts:
// 

//global variables
let ballX, ballY, ballSize = 30;
let xSpeed = 9, ySpeed = 10;
let colorA;
let colorB;

function keyPressed(){
// once per key pressed 
if (key === 'a') fill(colorA);
if (key === 'b') fill(colorB);


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  overlay = createGraphics(width,height);
  colorA= color(128, 20, 190)
  colorB= color('blue')
  ballX = width/2;
  ballY = height/2;
}

function draw() {
  background(220);
  moveAndDrawBall();
  drawTriangle();
}

function moveAndDrawBall(){
  // update the position  
  ballX += xSpeed; // ballX = ballX+
  ballY += ySpeed;
  // update the direction
if(ballX-ballSize/2<=0 || ballX+ballSize/2>=width){
 xSpeed = xSpeed * -1;
}
if(ballY-ballSize/2<=0 || ballY+ballSize/2>=height){
  ySpeed = ySpeed * -1;
 }
  // render the ball
  //fill(0);
  circle(ballX,ballY, ballSize);
}
function drawTriangle(){
//draw a triangle at mouse cursor
overlay.triangle(mouseX,mouseY-20,mouseX-10,mouseY+10,mouseX+10,mouseY+10);

image(overlay,0,0);

}
