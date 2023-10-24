// Diagonal Line Genrator
// Tyler Lusher
// october 24,2023

let spacing = 4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(3);
  grid(); // generat a single image
}

function diagonalAscending(x,y,s){
  line(x-s/2,y+s/2,x+s/2,y-s/2);
}

function diagonalDecending(x,y,s){
  line(x-s/2,y-s/2,x+s/2,y+s/2);
}

function grid(){
  for(let x=0;x<width;x+=spacing){
    for(let y=0;y<height;y+=spacing){
      let choice=Math.floor(random(2)); // 0 1
      if (choice===0)diagonalAscending(x,y,spacing);
      else if (choice===1)diagonalDecending(x,y,spacing);
    }

  }
}

function draw() {
  //background(220);
}
