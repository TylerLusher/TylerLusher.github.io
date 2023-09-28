// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Global Variable 
let color = 0;
let colorList = ["Green","Red","Blue"];
let gra;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  gra = createGraphics( width,height);
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
  gra.fill(colorList[color]);
  if ( key === 'a'){
    gra.rect(mouseX,mouseY,50,100);
  }
  if ( key === 's'){
    gra.ellipse(mouseX,mouseY,50,100);
  }
  if ( key === 'd'){
    gra.circle(mouseX,mouseY,50);
  }
  if ( key === ' '){
    //erase();
    gra.background(220);
    //noErase();
  }
  
}


function draw() {
  noCursor();
  background(220);
  fill(colorList[color]);
  rect(mouseX,mouseY,10);
  image(gra,0,0);
}
