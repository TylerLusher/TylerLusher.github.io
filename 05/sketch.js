// Mouse Distance
// Tyler Lusher
// A bit more with mouse and functions

// Global Variables 
let nodeColors = [];  // ["red","blue","green"]
let colorIndex = 0;   // state variable
// 0,1,2, ... nodeColors.lengeth-1


function setup() {
  createCanvas(windowWidth, windowHeight);
  initColors();
  noCursor();
  textAlign(CENTER);
  textSize();
}

function draw() {
  background(220);
  renderNodes();
}

function renderNodes(){
  // simple function: no inputs, no return
  // darw two "nodes" as circles, and connect
  // them with a line
  stroke(nodeColors[colorIndex]);
  fill(nodeColors[colorIndex]);
  line(width/2,height/2,mouseX,mouseY);
  circle(width/2, height/2,20);
  circle(mouseX,mouseY, 20);
  // display distance
  let d = segmentDistance(height/2,width/2,mouseX,mouseY);
  text(round(d,1), width /2, height*0.6);
  
}

function segmentDistance(x1, y1, x2, y2){
  // this is going to calculate the difference between
  // 2 points 
  let a = Math.abs(x1 - y1);
  let b = Math.abs(x2 - y2);
  let c = Math.sqrt(a*a + b*b);
  return c;
}

function mouseWheel(event){
  // check for mouseWheel event
  // -> scroll up pos -> scroll down 
  print(event.delta);
  if (event.delta <0 ){
    colorIndex +=1;
    if (colorIndex > nodeColors.length-1){
      // goes past the end of the array
      colorIndex = 0;
    }
  }
  //reduce colorIndex and maybe wrap around 
  // on your own
  //else{
  //
  //}
}


function initColors(){
  // populate our array of colors
  nodeColors.push(color("red"));
  nodeColors.push(color(200,100,0)); // push means append
  nodeColors.push(color("cornflowerblue"));

}