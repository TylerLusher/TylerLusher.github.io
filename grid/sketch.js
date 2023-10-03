// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Global Variables
let sizes = 10;



function setup() {
  createCanvas(windowWidth, windowHeight);
  document.addEventListener("contextmenu", event => event.preventDefault());
}

function draw() {
  print(sizes);
  if (mouseIsPressed === true){
    if(mouseButton === RIGHT){
      if (sizes>= 9){
        sizes-=1;
      }
    }
    else{    
      sizes+=1;
    }
    grid();
  }
}

function keyPressed(){
  grid();
}

function grid(){
  background(220);
  let i = Math.floor(random(4));
  for(let x =0; x+sizes<width; x=x+sizes){
    for(let y=0; y+sizes<height; y=y+sizes){
      colors(i);
      square(x,y,sizes);
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