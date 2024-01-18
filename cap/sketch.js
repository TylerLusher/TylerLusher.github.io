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
  [0,0,0,0,0,8,7,10,0,0],
  [0,0,0,0,0,9,0,0,0,0],
  [0,0,0,0,0,3,1,1,1,1],
  [0,0,0,0,0,0,0,0,0,0],
];

function setup() {
  createCanvas(1000,800);
  startGame();
  print("hi");
  frameRate(60);
}
//tower attck speed gooes by the frame rate by setting it to 60 then counting the frames as seconds of 60 by 5
//re write the ballon and the tower class to include the types and hp values for towers the same for  types and dont forget to try and add the ugrading system 
//for towers you can also try and make it free range to place the tower where the mouse x and y is 
// lastl god luck man it gointto take a lot more work :) bgye
let towers=[];
let ballon=[];
let game;
let countFrames=0;
function draw(){
  countFrames+=1;
  background(100);
  drawMap();
  let count=-1;
  count=-1;
  for(let a of ballon){
    count++;
    if (a!==undefined){
      a.display();
      a.move();
      a.checkIfBallonIsOff(count);
      if(countFrames%60===0){
        a.checkIfTowerIsNears(count);
      }
    }
  }
}

function startGame(){
  ballon.push(new Ballon(0,350,1));
  game = new Game();
}

class Game{
  constructor(){
    this.hp=2;
    this.cash=100;
  }
  removeHP(){
    this.hp-=1;
    print(this.hp);
  }
  towerPlaced(){
    let xCount=0;
    let yCount=0;
    for (let y=0; y<800; y=y+100){
      for (let x=0; x<1000; x=x+100){
        if (mouseX>=x && mouseX<=x+100 && mouseY >=y && mouseY <=y+100 && maps[yCount][xCount]===0){
          if (this.cash>=100){
            towers.push(new Tower(yCount,xCount));
            maps[yCount][xCount]=11;
            this.cash-=100;
          }
        }
        xCount++;
      }
      xCount=0;
      yCount++;
    }
  }
  money(a){
    this.cash+=a;
  }
}

class Tower{
  constructor(y,x){
    this.x=x;
    this.y=y;
  }
  checkIfTowerIsNear(q,w){
    let nums=[-1,0,1];
    for (let a of nums){
      if (this.x===q-(a)){
        if(this.y===w-1){
          return true;
        }
        if(this.y===w){
          return true;
        }
        if(this.y===w+1){
          return true;
        }
      }
    }
  }
}
// make tower an acutle class that is implemented 

class Ballon{
  constructor(x,y,DtoMove){
    this.mD=DtoMove;
    this.bx=x;
    this.by=y;
    this.count=0;
    this.posX;
    this.posY;
    this.bhp=5;
  }

  display(){
    circle(this.bx,this.by,10);
  }

  move(){
    if(this.mD===1){//Right
      this.bx+=1;
      this.count+=1;
      if (this.count===100){
        this.count=0;
        this.mD = maps[(this.by-50)/100][this.bx/100];
        this.posY=(this.by-50)/100;
        this.posX=this.bx/100;
        print(this.mD);
      }
    }
    if(this.mD===2){//"strightUp"
      this.by-=1;
      this.count+=1;
      if(this.count===100){
        this.count=0;
        this.mD = maps[(this.by-100)/100][(this.bx-50)/100];
        this.posY=(this.by-100)/100;
        this.posX=(this.bx-50)/100;
        print(this.mD);
        
      }
    }
    if(this.mD===3){//"UpCornerRight"
      if(this.count>=50&&this.count!==100){
        this.bx+=1;
        this.count+=1;
      }
      else if(this.count<50){
        this.count+=1;
        this.by+=1;
      }
      if(this.count===100){
        this.count=0;
        this.mD = maps[(this.by-50)/100][this.bx/100];
        this.posY=(this.by-50)/100;
        this.posX=this.bx/100;
        print(this.mD);
        
      }
    }
    if(this.mD===4) {//"DownCornerRight"
      if(this.count>=50&&this.count!==100){
        this.bx+=1;
        this.count+=1;
      }
      else if(this.count<50){
        this.count+=1;
        this.by-=1;
      }
      if(this.count===100){
        this.count=0;
        this.mD = maps[(this.by-50)/100][this.bx/100];
        this.posY=(this.by-50)/100;
        this.posX=this.bx/100;
        print(this.mD);
      }
    }
    if(this.mD===5){//"LeftCornerDown"
      if(this.count>=50&&this.count!==100){
        this.by+=1;
        this.count+=1;
      }
      else if(this.count<50){
        this.count+=1;
        this.bx+=1;
      }

      if(this.count===100){
        this.count=0;
        this.mD = maps[this.by/100][(this.bx-50)/100];
        this.posY=this.by/100;
        this.posX=(this.bx-50)/100;
        print(this.mD);
      }
    }
    if(this.mD===6){//"LeftCornerDown"
      if(this.count>=50&&this.count!==100){
        this.by-=1;
        this.count+=1;
      }
      else if(this.count<50){
        this.count+=1;
        this.bx+=1;
      }

      if(this.count===100){
        this.count=0;
        this.mD = maps[(this.by-100)/100][(this.bx-50)/100];
        this.posY=(this.by-100)/100;
        this.posX=(this.bx-50)/100;
        print(this.mD);
      }
    }
    if(this.mD===7){//"Left"
      this.bx-=1;
      this.count+=1;
      if(this.count===100){
        this.count=0;
        this.mD = maps[(this.by-50)/100][(this.bx-100)/100];
        this.posY=(this.by-50)/100;
        this.posX=(this.bx-100)/100;
        print(this.mD);
      }
    }
    if(this.mD===8){//"Left"
      if(this.count>=50&&this.count!==100){
        this.by+=1;
        this.count+=1;
      }
      else if(this.count<50){
        this.count+=1;
        this.bx-=1;
      }
      if(this.count===100){
        this.count=0;
        this.mD = maps[this.by/100][(this.bx-50)/100];
        this.posY=this.by/100;
        this.posX=(this.bx-50)/100;
        print(this.mD);
      }
    }
    if(this.mD===9){//"Left"
      this.by+=1;
      this.count+=1;
      if(this.count===100){
        this.count=0;
        this.mD = maps[this.by/100][(this.bx-50)/100];
        this.posY=this.by/100;
        this.posX=(this.bx-50)/100;
        print(this.mD);
      }
    }
    if(this.mD===10){//"Left"
      if(this.count>=50&&this.count!==100){
        this.bx-=1;
        this.count+=1;
      }
      else if(this.count<50){
        this.count+=1;
        this.by+=1;
      }
      if(this.count===100){
        this.count=0;
        this.mD = maps[(this.by-50)/100][(this.bx-100)/100];
        this.posY=(this.by-50)/100;
        this.posX=(this.bx-100)/100;
        print(this.mD);
      }
    }
  } 

  checkIfBallonIsOff(z){
    if(this.mD===undefined){
      game.removeHP();
      ballon.splice(z,1);
    }
  } 

  checkIfTowerIsNears(z){
    for(let a of towers){
      if (a.checkIfTowerIsNear(this.posX,this.posY)){
        this.bhp-=1;
        print(this.bhp);
        if (this.bhp===0){
          game.money(5);
          ballon[z]=undefined;
        }
        
      }
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
    ballon.push(new Ballon(0,350,1));
  }
  game.towerPlaced();
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

