// Puzzle game Starter
// Tyler Lusher 
// November 6
// A first foray into working with 2d arrays 


let grid =
[ [255,  0,    255,  0,    255],
  [0,    0,    0,    255,  0],
  [255,  255,  0,    255,  0],
  [255,  0,    0,    255,  0]];

const NUM_ROWS = 4;
const NUM_COLS = 5;
let rectWidth, rectHeight, row, col;

function setup() {
  rectWidth = 50;
  rectHeight = 50;
  createCanvas(NUM_COLS*rectWidth,NUM_ROWS*rectHeight);
}

function draw() {
  row = getCurrentY(); col = getCurrentX();
  background(220);
  renderGrid();
  print(col,row); // prints x,y
  checkWin(grid);
}
function checkWin(array){
  let win=0;
  for (let i = 0; i===5;i++){
    for(let x = 0; i===6;x++){
      if(array[i-1][x-1]===255){
        win=win+1;
      }
      if(array[i-1][x-1]===0){
        win=win-1;
      }
    }
    print(win);
    if (win===20){
      print("white win");    
    }
    else if (win === -20){
      print("black win");
    }
  } 
}
function mousePressed(){
  // when the mouse is clicked, flip the value at t he current 
  //row,col + also flip the cardinal neighbors (north ,s,e,w)

  // flip @ mouseposition 
  flip(col,row);

  // flip the 4 neighbors up down left right
  if (key!=="Shift"){
    if (col<NUM_COLS-1){
      flip(col+1,row);// right neighbor
    }
    if (row>0){
      flip(col,row-1);//up neighbor
    }
    if (col>0){
      flip(col-1,row);//neighbor
    }
    if (row<NUM_ROWS-1){
      flip(col,row+1);//neighbor
    }
  }
  checkWin(grid);
}

function flip(col,row){
  // at given x,y flip the value in the 2d array 
  //0 right 255  255 right 0
  if (grid[row][col]===0){
    grid[row][col]=255;
  }
  else {
    grid[row][col]=0;
  }
}


function getCurrentX(){ // determine current column mouse is in, and return
  let constrainMouseX = constrain(mouseX,0,width-1);
  return floor(constrainMouseX/rectWidth);
}

function getCurrentY(){// determine current row mouse is in, and return
  let constrainMouseY = constrain(mouseY,0,height-1);
  return floor(constrainMouseY/rectHeight);
}


function renderGrid(){
  // creats a 2d grid of squares using information from our 
  // 2d array for the corrosponding fill values 
  for(let x=0; x<NUM_COLS;x++){
    for(let y=0; y<NUM_ROWS;y++){
      let fillValue = grid[y][x];
      fill(fillValue);
      // x:   0,  1,  2,    3,    4
      //posX  0,  50, 100,  150,  200   expression? x right pos
      rect(x*rectWidth,y*rectHeight,rectWidth,rectHeight);
    }
  }
}