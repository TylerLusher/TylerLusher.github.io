// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let scaled = 15; // I changed it to scaled because the red line was bothering me when it was named scale
let mouseAngle=18;

function setup() {
  //createCanvas(500, 500);
  createCanvas(windowWidth, windowHeight);
  background(255);
}


function draw() {
  background(255);
  if( pmouseY >mouseY){
    mouseAngle+=1;
  }
  else if (pmouseY<mouseY){
    mouseAngle-=1;
  }
  drawTree(width/2, height*0.9, 90,mouseAngle, 6);
}

function drawLine( x1, y1, x2, y2, depth) {
//draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2);
}

function drawTree(x1, y1, angle, mouseAngle,depth) {
  if (depth > 0) {
    let x2 = x1 + cos(radians(angle))*depth*scaled; //calculate endpoints of current branch
    let y2 = y1 - sin(radians(angle))*depth*scaled; //using trigratios. Get shorter based on depth
    drawLine(x1, y1, x2, y2, depth);
    //for a 2-branch tree:
    drawTree(x2, y2, angle-mouseAngle, mouseAngle,depth-1);
    drawTree(x2, y2, angle, depth-1);
    drawTree(x2, y2, angle+mouseAngle, mouseAngle,depth-1);
    drawLeaf(x2,y2,depth);
  }
}

function drawLeaf(x2,y2,depth){
  let leafColor = (random(255),random(255),random(255));
  let leafSize = depth*0.5*random(10,15);
  if (depth<5){
    fill(random(255),random(255),random(255));
    circle(x2,y2,leafSize);
  }

}