// Puzzle game Starter
// Tyler Lusher 
// November 6
// A first foray into working with 2d arrays 


let grid =
[ [255,  0,    255,  0,    255],
  [0,    0,    0,    255,  0],
  [255,  255,  0,    255,  0],
  [255,  0,    0,    255,  0]
];

let gridHighlight =
[ [0,  0,    0,  0,    0],
  [0,    0,    0,    0,  0],
  [0,  0,  0,    0,  0],
  [0,  0,    0,    0,  0]
];


const NUM_ROWS = 4;
const NUM_COLS = 5;
let rectWidth, rectHeight, row, col;
let mode = 0;


function setup() {
  rectWidth = 50;
  rectHeight = 50;
  createCanvas(NUM_COLS*rectWidth,NUM_ROWS*rectHeight);
  strokeWeight(3);
  newGrid(grid);
}

function draw() {
  row = getCurrentY(); col = getCurrentX();
  renderGrid();
}
// this just randomizes the grid with a nesled for loop 
function newGrid(grid){
  for(let x=0; x<NUM_COLS;x++){
    for(let y=0; y<NUM_ROWS;y++){
      let rand = floor(random(0,2));
      if (rand===0){
        grid[y][x]=255;
      }
      else{
        grid[y][x]=0;
      }
    }
  }
}

// this one checks the array to see if the squares are 255 or 0 an adds or subtracts 1 from the 
// var win then checks to see if all the squars are one color  
function checkWin(array){
  let win=0;
  for(let x=0; x<NUM_COLS;x++){
    for(let y=0; y<NUM_ROWS;y++){
      if(array[y][x]===255){
        win=win+1;
      }
      if(array[y][x]===0){
        win=win-1;
      }
    }
    if (win === 20 || win === - 20){
      for(let x=0; x<NUM_COLS;x++){
        for(let y=0; y<NUM_ROWS;y++){
          gridHighlight[y][x]=1;
        }
      }  
    }
  } 
}

function mousePressed(){
  // when the mouse is clicked, flip the value at t he current 
  //row,col + also flip the cardinal neighbors (north ,s,e,w)

  // flip @ mouseposition 

  // flip the 4 neighbors up down left right
  if (key==="Shift" && keyIsPressed){
    flip(col,row);
  }
  else{
    if (mode ===1 ){ // square 
      flip(col,row);
      if (row<NUM_ROWS-1 && col>0){
        flip(col-1,row+1);
      }
      if (col>0){
        flip(col-1,row);
      }
      if (row<NUM_ROWS-1){
        flip(col,row+1);
      }
    }
    else{// cross
      flip(col,row);
      if (col<NUM_COLS-1){
        flip(col+1,row);
      }
      if (row>0){
        flip(col,row-1);
      }
      if (col>0){
        flip(col-1,row);
      }
      if (row<NUM_ROWS-1){
        flip(col,row+1);
      }
    }
  }
}

// this one swaps the mode of the click change from cross to square
function keyPressed(){
  if(key===" " && mode === 0){
    mode=1;
  }
  else if(key === " " &&  mode === 1){
    mode = 0;
  }
}

function flip(col,row){
  // at given x,y flip the value in the 2d array 
  //0 right 255  255 right 0
  if (grid[row][col]===0 || grid[row][col] ===1){
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
  highlight(row,col);
  checkWin(grid);
  for(let x=0; x<NUM_COLS;x++){
    for(let y=0; y<NUM_ROWS;y++){
      let fillValue = grid[y][x];
      stroke(0,0,0);
      fill(fillValue);
      // x:   0,  1,  2,    3,    4
      //posX  0,  50, 100,  150,  200   expression? x right pos
      rect(x*rectWidth,y*rectHeight,rectWidth,rectHeight);
    }
  }
  //this nesled loop higlights the squares and then sets the gridd value to 0 so it doesn't mess with next loop
  for(let x=0; x<NUM_COLS;x++){
    for(let y=0; y<NUM_ROWS;y++){
      let grid1fill = gridHighlight[y][x];
      if (grid1fill!== 0){
        noFill();
        stroke(0,255,0);
        rect(x*rectWidth,y*rectHeight,rectWidth,rectHeight);
        gridHighlight[y][x]=0;
      }
    }
  }
}

// is the same as the flip function but with a different array and checks what mode its in 
function highlight(row,col){
  if (key==="Shift" && keyIsPressed){
    gridHighlight[row][col]+=1;
  }
  else if (mode === 1){ // square 
    if (gridHighlight[row][col] !== 1){
      gridHighlight[row][col]+=1;
      if (col>0){
        gridHighlight[row][col-1]=1;
      }             
      if (row<NUM_ROWS-1){     
        gridHighlight[row+1][col]=1;
      }
      if (row<NUM_ROWS-1 && col>0){     
        gridHighlight[row+1][col-1]=1;
      }
    }

  }
  else{ // cross
    if (gridHighlight[row][col] !== 1){
      gridHighlight[row][col]+=1;
      if (col<NUM_COLS-1){
        gridHighlight[row][col+1]=1;
      }
      if (row>0){
        gridHighlight[row-1][col]=1;
      }
      if (col>0){
        gridHighlight[row][col-1]=1;
      }             
      if (row<NUM_ROWS-1){     
        gridHighlight[row+1][col]=1;
      }
    }
  } 
}