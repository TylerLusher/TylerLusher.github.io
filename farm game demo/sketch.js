// Farm Game demo 
// Tyler Lusher
// nov 15, 2023
// a 2nd look at using 2 arrays for a tile based game 
// with block pusher mechanics  

let tiles = []; // to store our images

let level =[
  [0,0,0,1,0],
  [0,1,0,0,0],
  [0,0,1,0,0],
  [1,0,0,0,0],
  [0,1,0,0,0]
];
const COLLMNS = 5; const ROWS = 5; const TILE_SIZE = 100;
let playerX = 3, playerY = 4;


function preload(){ // "0.png" "1.png" "2.png"
  //                  //  0 blank 1 chicken 2 cow
  for (let i=0;i<3;i++){
    tiles.push(loadImage("assets/"+i+".png"));
  }
  
}

function setup() {
  createCanvas(COLLMNS * TILE_SIZE, ROWS*TILE_SIZE);
  level[playerY][playerX] = 2; // add the player to the level 
}

function renderBoard(){
  // interpret the data in our 2D array, and place image 
  for(let y=0;y<ROWS;y++){
    for (let x=0;x<COLLMNS;x++){
      let currentItem = level[y][x];
      image(tiles[currentItem],x*TILE_SIZE,y*TILE_SIZE);
    }
  }

}

function swap(x1,y1,x2,y2){
  // have 2 items in the 2d array switch places
  let temp=level[y1][x1];
  level[y1][x1] = level[y2][x2];
  level[y2][x2] = temp;
}

function keyPressed(){
  // check for arrow key press,and move/push as needed
  if (keyCode===UP_ARROW){
    if (level[playerY-1][playerX]===0){
      swap(playerX,playerY,playerX,playerY-1);
      playerY--;
    }
    if (level[playerY-1][playerX]===1){
      if(playerY > 1 && level [playerY-2][playerX]===0){
        swap(playerX,playerY-2,playerX,playerY);
        //swap(playerX,playerY,playerX,playerY);
      }
    }
  }

  if (keyCode===DOWN_ARROW){
    swap(playerX,playerY,playerX,playerY+1);
    playerY++;
  }
  if (keyCode===LEFT_ARROW){
    swap(playerX,playerY,playerX-1,playerY);
    playerX--;
  }
  if (keyCode===RIGHT_ARROW){
    swap(playerX,playerY,playerX+1,playerY);
    playerX++;
  }

}
function draw() {
  background(220);
  renderBoard();
}
