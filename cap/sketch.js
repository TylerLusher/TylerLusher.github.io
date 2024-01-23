// this is not totaly playable yet 
// to place towers you press t then press the mouse 
// to spawn the an enemy press b the press the mouse 
// money is in the top right 
//  








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
let rounds =[[1,1,1],[2,2,2],[1,2,1,2],[2,2,2,2],[5,5]];
function setup() {
  createCanvas(1000,800);
  startGame();
  frameRate(60);
}

let towers=[];
let ballon=[];
let game;
let count=-1;
let gameStart=0;
let wave=0;
let wb=0;
function draw(){
  background(100);
  if (gameStart===0){
    fill(0);
    textSize(50);
    text("Tower defense",(width/2)-100,(height/2)-100);
    fill(255);
    rect(475,330,100,50);
    fill(0);
    textSize(25);
    text("start",494,358);
    if (mouseX>=476&&mouseX<=574&&mouseY>=332&&mouseY<=376 && mouseIsPressed){
      gameStart=1;
    }
  }
  else{
    drawMap();
    fill(0);
    textSize(50);
    text("wave " +wave+ " of 5",300,(height)-50)
    count=-1;
    for(let a of ballon){
      count++;
      a.display();
      a.move();
      a.checkIfTowerIsNears(count,a);
      a.checkIfBallonIsOff(count);
    }
    count=-1;
    game.draw();
    if(frameCount%60===0){
      for (let a of towers){
        a.shootset();
      }
    }
    if(frameCount%30===0){
      if (rounds[wave]===undefined&&ballon[0]===undefined){
        fill(0);
        textSize(25);
        background(200);
        text("You win",494,358);
        noLoop();
      }
      else{ 
        if (rounds[wave].length<wb+1 && ballon[0]===undefined){
          wb=0;
          wave++;
        }
        else if (rounds[wave].length!==wb){
          ballon.push(new Ballon(rounds[wave][wb]));
          wb++
        }
      }
    }
    
    if(game.gameEndCheck()===true){
      noLoop();
    }
  }
}

function startGame(){
  //ballon.push(new Ballon(0,350,1));
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
  gameEndCheck(){
    if(this.hp<=0){
      fill(0);
      textSize(50);
      text("you lose press f5 to restart",(width/2)-100,height/2);
      return true;
    }
    return false;
  }
  towerPlaced(){
    let xCount=0;
    let yCount=0;
    for (let y=0; y<800; y=y+100){
      for (let x=0; x<1000; x=x+100){
        if (mouseX>=x && mouseX<=x+100 && mouseY >=y && mouseY <=y+100 && maps[yCount][xCount]===0){
          if (this.cash>=50){
            towers.push(new Tower(yCount,xCount));
            maps[yCount][xCount]=11;
            this.cash-=50;
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
  draw(){
    fill(0);
    textSize(50);
    text(this.cash+"$",150,(height)-50);
    text(this.hp+"<3",50,(height)-50);
  }
}

class Tower{
  constructor(y,x){
    this.x=x;
    this.y=y;
    this.shoot=0;
  }
  shootset(){
    this.shoot=0;
  }
  checkIfTowerIsNear(q,w,c){
    let nums=[-1,0,1];
    if (this.shoot===0 && c !==0){
    for (let a of nums){
      if (this.x===q-(a)){
        if(this.y===w-1){
          this.shoot=1;
          return true;
        }
        if(this.y===w){
          this.shoot=1;
          return true;
        }
        if(this.y===w+1){
          this.shoot=1;
          return true;
        }
      }
    }
    }
    else{
      return false;
    }
  }
}

class Ballon{
  constructor(hp){
    this.mD=1;
    this.bx=0;
    this.by=350;
    this.count=0;
    this.posX;
    this.posY;
    this.bhp=hp;
    this.ogbhp=hp;
  }

  display(){
    fill(255,0,0);
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
        //print(this.mD);
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
        //print(this.mD);
        
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
        //print(this.mD);
        
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
        //print(this.mD);
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
        //print(this.mD);
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
        //print(this.mD);
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
        //print(this.mD);
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
        //print(this.mD);
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
        //print(this.mD);
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
        //print(this.mD);
      }
    }
  } 

  checkIfBallonIsOff(z){
    if(this.mD===undefined){
      game.removeHP();
      ballon.splice(z,1);
    }
  } 

  checkIfTowerIsNears(z,c){
    for(let a of towers){
      if (a.checkIfTowerIsNear(this.posX,this.posY,this.bhp)){
        this.bhp-=1;
        print(this.bhp);
        if (this.bhp===0){
          game.money(5*this.ogbhp);
          ballon.splice(z,1);
        }
      }
    }
  }
}

function mousePressed(){
  if (key === "t"){
    game.towerPlaced();
  }
  /*
  if (key === "b"){
    ballon.push(new Ballon(0,350,1));
  }
  */
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
      if (maps[yCount][xCount]===11){
        fill(0,255,0);
        circle(x+50,y+50,50);
      }
      xCount++;
    }
    xCount=0;
    yCount++;
  }
}

