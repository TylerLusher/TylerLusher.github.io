// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let overlay;
function setup() {
  createCanvas(windowWidth, windowHeight);
  overlay=createGraphics(width,height);
  background(220);
}

function draw() {
  //background(220);
  if (keyIsPressed){
    if (key==='s'){
      ellipse(mouseX,mouseY,10,10);
    }
    if (key===' '){
      background(220);
    }
  }
  image(overlay,0,0);
}

