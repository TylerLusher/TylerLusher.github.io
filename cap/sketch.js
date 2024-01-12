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
}

let towers=[];
let ballon=[];
let game;
function draw(){
  background(100);
  drawMap();
  let count=-1;
  // for(let a of towers){
  //   fill(0,255,0);
  //   circle(a[0],a[1],5);
  // }
  count=-1;
  for(let a of ballon){
    count++;
    a.display();
    a.move();
    a.checkIfBallonIsOff(count);
    a.checkIfTowerIsNears();
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
}

class Tower{
  constructor(y,x){
    this.x=x;
    this.y=y;
  }
  checkIfTowerIsNear(q,w){
    if (this.x===q-1){
      if(this.y===w-1){
        print("pop");
      }
      if(this.y===w){
        print("pop");
      }
      if(this.y===w+1){
        print("pop");
      }
    }
    if(this.x===q){
      if(this.y===w-1){
        print("pop");
      }
    }

  }
}

class Ballon{
  constructor(x,y,DtoMove){
    //this.cords=start;
    this.mD=DtoMove;
    this.bx=x;
    this.by=y;
    this.count=0;
    this.posX;
    this.posY;
  }

  display(){
    circle(this.bx,this.by,10);
  }

  move(){ // i think i can combine this and the check square
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
  checkIfTowerIsNears(){
    for(let a of towers){
      a.checkIfTowerIsNear(this.posX,this.posY);
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
