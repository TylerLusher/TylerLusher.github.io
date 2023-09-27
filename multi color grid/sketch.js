// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Global Variable 
let color = 0;
let colorList = ["Green","Red","Blue"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}
function keyPressed (){
  if ( key === '1'){
    color = 0;
  }
  if ( key === '2'){
    color = 1;
  }
  if ( key === '3'){
    color = 2;
  }
  fill(colorList[color]);
  if ( key === 'a'){
    rect(mouseX,mouseY,50,100);
  }
  if ( key === 's'){
    ellipse(mouseX,mouseY,50,100);
  }
  if ( key === 'd'){
    circle(mouseX,mouseY,50);
  }
  if ( key === ' '){
    background(220);
  }
  
}


function draw() {

}
