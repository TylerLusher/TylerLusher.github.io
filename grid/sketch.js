// multi color grid
// Tyler lusher 
// oct 5, 2023
//

// Global Variables
let cubeSize = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  document.addEventListener("contextmenu", event => event.preventDefault());
}

function draw() {   // this check if mouse is pressed then if the right click it being pressed 
  if (mouseIsPressed === true){
    if(mouseButton === RIGHT){
      if (cubeSize>= 9){
        cubeSize-=1;
      }
    }
    else{    
      cubeSize+=1;
    }
    grid();
  }
}

function keyPressed(){
  grid();
}

function grid(){    // this nested loop make the grid by adding the size of the squares to the x and y 
  background(220);  // it also chescks if the size of the cube goes off the screan 
  let i = Math.floor(random(4));
  for(let x =0; x+cubeSize<width; x=x+cubeSize){
    for(let y=0; y+cubeSize<height; y=y+cubeSize){
      colors(i);
      square(x,y,cubeSize);
    }
  }
}



function colors(i){ 
  if (i === 1){
    fill(random(255),0,0);
  }
  else if (i === 2){
    fill(0,random(255),0);
  }
  else{
    fill(0,0,random(255));
  }
}