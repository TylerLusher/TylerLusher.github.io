//  blank = 0
//
//  _  = 1
//
//  left  _ = 7
//
//  |  = 2
//
//  going down =9
//
//  |_ = 3
//   _
//  |  = 4
//
//  going the other way =8
//  _
//   | = 5
//
//  _| = 6
let maps=[
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,4,1,1,1,1,5,0,0],
  [0,0,2,0,0,0,0,9,0,0],
  [1,1,6,0,0,0,0,9,0,0], 
  [0,0,0,0,0,8,7,6,0,0],
  [0,0,0,0,0,9,0,0,0,0],
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

class Ballon{
  constructor(x,y,DtoMove){
    //this.cords=start;
    this.mD=DtoMove;
    this.bx=x;
    this.by=y;
    this.count=0;
  }

  display(){
    circle(this.bx,this.by,10);
  }

  move(){ // i think i can combine this and the check square
    if(this.mD==="right"){
      this.bx+=1;
      this.count+=1;
      if (this.count===100){
        this.mD=this.checkSquare(this.bx,this.by-50);
        print(this.mD);
      }
    }
    if(this.mD==="LeftCornerUp"){
      if(this.count>=50&&this.count!==100){
        this.by-=1;
        this.count+=1;
      }
      else if(this.count<50){
        this.count+=1;
        this.bx+=1;
      }
      if(this.count===100){
        this.mD=this.checkSquare(this.bx-50,this.by-100);
        print(this.mD);
      }
    }
    if(this.mD==="strightUp"){
      this.by-=1;
      this.count+=1;
      if(this.count===100){
        this.mD=this.checkSquare(this.bx-50,this.by-100);
        print(this.mD);
      }
    }
    if(this.mD==="DownCornerRight"){
      if(this.count>=50&&this.count!==100){
        this.bx+=1;
        this.count+=1;
      }
      else if(this.count<50){
        this.count+=1;
        this.by-=1;
      }
      if(this.count===100){
        this.mD=this.checkSquare(this.bx,this.by-50);
        print(this.mD);
      }
    }
    if(this.mD==="LeftCornerDown"){
      if(this.count>=50&&this.count!==100){
        this.by+=1;
        this.count+=1;
      }
      else if(this.count<50){
        this.count+=1;
        this.bx+=1;
      }

      if(this.count===100){
        this.mD=this.checkSquare(this.bx-50,this.by);
        print(this.mD);
      }
    }
  } 
  
  checkSquare(xx,yy){
    print(xx);
    print(yy);
    this.count=0;
    if (maps[yy/100][xx/100]===0){
      return "blank";
    }
    if (maps[yy/100][xx/100]===1){
      return "right";
    }
    if (maps[yy/100][xx/100]===2){
      return "strightUp";
    }
    if (maps[yy/100][xx/100]===3){
      return "cornerLeft";
    }
    if (maps[yy/100][xx/100]===4){
      return "DownCornerRight";
    }
    if (maps[yy/100][xx/100]===5){
      return "LeftCornerDown";
    }
    if (maps[yy/100][xx/100]===6){
      return "LeftCornerUp";
    }
    if (maps[yy/100][xx/100]===7){
      return "Left";
    }
    if (maps[yy/100][xx/100]===8){
      return "RightCornerDown";
    }
    if (maps[yy/100][xx/100]===9){
      return "Down";
    }
    return "bruh";
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
