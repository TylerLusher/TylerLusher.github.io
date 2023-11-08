// Cubic dissaray
// Tyler Lusher 
// October 24,2023

let squareSize=30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2);
  rectMode(CENTER);
  noFill();
  noLoop();
}



function draw() {
  drawRectangles();// noLoop makes it so it makes one image
}

function drawRectangles(){
  let s =squareSize;
  for (let x = s/2;x<width-s/2;x+=s){
    for (let y =s/2;y<height-s/2;y+=s){
      push();
      translate(x,y);
      let rAmount = map(y,0,height,1,45);
      rotate(radians(random(-rAmount,rAmount)));
      let offset = map(y,0,height,0,15);
      square(random(-offset,offset),random(-offset,offset),s);
      pop();
    }
  }
}