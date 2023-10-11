// basic snake mechanic
// Tyler Lusher
// october 11, 2023
// some more practice with arrays, Classes

// global variables 
let points = []; // snake cordiaates 
let headLocation; // object - where the head is
let speed = .005;
let snakeLength = 10;
function setup() {
  createCanvas(windowWidth, windowHeight);
  headLocation = new Point(width/2,height/2);
  initSnake();
  strokeWeight(15);
}

function initSnake(){
  /*
  points.push(new Point(10,10));
  points.push(new Point(30,30));
  points.push(new Point(60,30));
  points.push(new Point(80,10));
  points.push(new Point(80,70));
  */
  //set up 5 points in our array
  for(let i = 0; i<snakeLength;i++){
    points.push(createPoint());
  }
}

function createPoint(){
  //keyboard controll
  if(keyCode===RIGHT_ARROW) headLocation.x += speed;
  else if(keyCode ===LEFT_ARROW) headLocation.x -= speed;
  else if(keyCode===UP_ARROW) headLocation.y -= speed;
  else if(keyCode ===DOWN_ARROW) headLocation.y += speed;
  return new Point(headLocation.x, headLocation.y); 
}

function displaySnake(){
  //loop through all the pairs of points
  for(let i =0;i<points.length-1;i++){
    let curr = points[i]; //current item
    let right = points[i+1]; // right neighbor 
    let alphaValue = map(i, 0, points.length-1,0,255);
    stroke(0,alphaValue);
    line(curr.x,curr.y,right.x,right.y);
  }

}

function movesSnake(){
  //delete first point, add a new point on the end
  points.splice(0,1); // deleting the tail
  points.push(createPoint());
}

function draw() {// his name is Jeff
  //background(220);
  displaySnake();
  movesSnake();
}

class Point{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
}