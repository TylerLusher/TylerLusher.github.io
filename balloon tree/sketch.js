// Balloon Tree
// Tyler Lusher
// dec 6


let scaled = 15; // I changed it to scaled because the red line was bothering me when it was named scale
let mouseAngle=18;
let array=[];
let count=-1;
let yes=1;
let depth=6;
let balloon=5;

function setup() {
  //createCanvas(500, 500);
  createCanvas(windowWidth, windowHeight);
  background(255);
}



function draw() {
  background(255);
  if( pmouseX >mouseX){
    mouseAngle-=1;
  }
  else if (pmouseX<mouseX){
    mouseAngle+=1;
  }
  drawTree(width/2, height*0.9, 90,mouseAngle, depth);
  yes=0;
  count=-1;
}

//this one setst the balloon depth 
function keyPressed(){
  if(key==="z"){
    if(balloon<6){
      balloon+=1;
    }
  }
  if(key==="x"){
    if(balloon>1){
      balloon-=1;
    }
  }
}

function drawLine( x1, y1, x2, y2, depth) {
//draw a line segment connecting (x1,y1) to (x2,y2)
  strokeWeight(0.4*depth);
  line(x1, y1, x2, y2);
}

function drawTree(x1, y1, angle, mouseAngle,depth) {
  if (depth > 0) {
    let x2 = x1 + cos(radians(angle))*depth*scaled; //calculate endpoints of current branch
    let y2 = y1 - sin(radians(angle))*depth*scaled; //using trigratios. Get shorter based on depth
    drawLine(x1, y1, x2, y2, depth);
    //for a 2-branch tree:
    drawTree(x2, y2, angle-mouseAngle, mouseAngle,depth-1);
    drawTree(x2, y2, angle, mouseAngle,depth-1);
    drawTree(x2, y2, angle+mouseAngle, mouseAngle,depth-1);
    drawLeaf(x2,y2,depth);
  }
}


// this one is pushes the leaf color and size to an array and if it isn't the first time 
// it check the array and sets leaf color and size to te past ones 
function drawLeaf(x2,y2,depth){
  let leafColor=0;
  let leafSize=0;
  if (yes===1){
    leafColor = [random(255),random(255),random(255)];
    leafSize = depth*0.9*random(10,15);
    let arrays=[leafColor,leafSize];
    array.push(arrays);
  }
  else{
    count++;
    leafColor = array[count][0];
    leafSize = array[count][1];
  }
  if (depth<balloon){
    fill(leafColor);
    circle(x2,y2,leafSize);
  }
}


