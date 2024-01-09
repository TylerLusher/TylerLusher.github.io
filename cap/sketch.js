//  blank = 0
//
//  _  = 1
//
//  |  = 2
//
//  |_ = 3
//   _
//  |  = 4
//  _
//   | = 5
//
//  _| = 6
let maps=[
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,4,1,1,1,1,5,0,0],
  [0,0,2,0,0,0,0,2,0,0],
  [1,1,6,0,0,0,0,2,0,0], 
  [0,0,0,0,0,4,1,6,0,0],
  [0,0,0,0,0,2,0,0,0,0],
  [0,0,0,0,0,3,1,1,1,1],
  [0,0,0,0,0,0,0,0,0,0],
];

function setup() {
  createCanvas(1000,800);
  startGame();
}

let towers=[];
let ballon=[];
function draw(){
  background(100);
  drawMap();
  let count=-1;
  for(let a of towers){
    fill(0,255,0);
    circle(a[0],a[1],5);
  }
  count=-1;
  for(let a of ballon){
    a.display();
    a.move();
  }
}

function startGame(){
  ballon.push(new Ballon(0,350,"right"));
}

function moveBallon(x){
  if (maps[x[0]][x[1]]===1){
    //
  }
}

class Ballon{
  constructor(x,y,DtoMove){
    //this.cords=start;
    this.mD=DtoMove;
    this.bx=x;
    this.by=y;
  }
  display(){
    circle(this.bx,this.by,10);
  }
  move(){
    if(mD==="right"){
      //
    }
  }
}


function mousePressed(){
  if (key === "t"){
    let temp=[];
    temp.push(mouseX);
    temp.push(mouseY);
    towers.push(temp);
  }
  if (key === "b"){
    let temp=[];
    temp.push(mouseX);
    temp.push(mouseY);
    ballon.push(temp);
  }
}

function drawMap(){
  let xCount=0;
  let yCount=0;
  for (let y=0; y<800; y=y+100){
    for (let x=0; x<1000; x=x+100){
      if (maps[yCount][xCount]===0){
        fill(255);
        square(x,y,100);
      }
      xCount++;
    }
    xCount=0;
    yCount++;
  }
}
