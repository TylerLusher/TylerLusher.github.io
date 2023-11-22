// Recursion and visualization 
// Tyler Lusher 
// Nov 22, 2012
// Creating some recursion imagry (fractels)


function setup() {
  createCanvas(windowWidth, windowHeight);
  //noLoop();
  noFill();
}

function draw() {
  background(220);
  //cCircle(width/2,height/2,width); 
  //cantor(width*0.1,height*0.3,width*0.8,9);
  //circles(width/2,height/2,height*0.5);
  fractaalRectangles(width/2,height/2,height*0.5,0);
}

function fractaalRectangles(x,y,sideLength,angle){
  rectMode(CENTER);
  if(sideLength>10){
    push();
    translate(x,y);
    rotate(radians(angle+frameCount));
    fill(random(255),random(255),random(255));
    square(0,0,sideLength);
    pop();
    //recursive call
    fractaalRectangles(x-sideLength/2,y-sideLength/2,sideLength/2,angle+15);
    fractaalRectangles(x+sideLength/2,y-sideLength/2,sideLength/2,angle+15);
    fractaalRectangles(x-sideLength/2,y+sideLength/2,sideLength/2,angle+15);
    fractaalRectangles(x+sideLength/2,y+sideLength/2,sideLength/2,angle+15);
    
  }
}

function circles(x,y,d){
  if (d>10){
    circle(x,y,d);
    //recursice call(s)
    circles(x-d/2,y,d/2);
    circles(x+d/2,y,d/2);
    circles(x,y+d/2,d/2);
  }
  //base case 
}

function cantor(x, y, len, depth){
  if (depth>1){
    line (x,y,x+len,y);
    rect(x,y,len,10);
    cantor(x,y+20,len/3,depth-1);
    cantor(x+len*2/3,y+20,len/3,depth-1);
  }

}

function cCircle(x, y, d){
  if (d > 10){
    // do some work,and recurse
    circle(x,y,d);
    let newD = map(mouseX,0,width,1.01,1.5);
    cCircle(x,y,d/newD);
  }
  // if that wasn't true, frnction ends (base case)
}

