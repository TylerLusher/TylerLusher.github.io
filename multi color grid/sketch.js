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
  textFont("Georgia");
  textSize(50);
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
    gra = createGraphics( width,height);
    //noErase();
  }
  
}


function draw() {
  noCursor();
  background(220);
  fill(colorList[color]);
  rect(mouseX,mouseY,10);
  if ( key === 'a'){
    rect(mouseX,mouseY,50,100);
  }
  if ( key === 's'){
    ellipse(mouseX,mouseY,50,100);
  }
  if ( key === 'd'){
    circle(mouseX,mouseY,50);
  }
  gra.textFont("Georgia");
  gra.textSize(50);
  gra.text("Tyler Lusher",25,50);
  image(gra,0,0);
  coolshape();
}


function coolshape(){
  for(let i = 0; i<200;i=i+20){
    for(let j = 0; j<200;j=j+20){
      line(height-200+i,width);
    
    }
  }
}