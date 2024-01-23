// Tower Defense Game
// Tyler Scott Lusher 
// Tuesday, 23 January 2024
//
// 
//  A few comments that are not about anything in particular 
//  This was inspired by many TD games but the enemys are names balloons becasue of a 
//  TD game Named Balloons Tower Defense and also its the only thing I could think of
//  
//  Thanks for the fun class 


// controlls 
//
// m and then a mouse click is mute 
//
// towers
// r = costs 100$ and fires every 20 frames
// t = costs 70$ and fires every 60 frames
// y = costs 300$ and fires every 11 frames
// u = costs 30$ and fires every 70 frames
//
// dev tool
//
// n then mouse click === + 10$



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
//
// _| = 10 going the other way

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
let rounds =[
  [1,1,1],
  [1,1,1,1,1,1],
  [2,2,2],
  [2,2,2,2],
  [1,2,1,2],
  [2,2,2,2],
  [5,5],
  [1,2,3,4,5],
  [1,1,1,1,1,1,1,1,1,1],
  [2,2,5,2,2],
  [6,6,6],
  [5,5,5],
  [5,6,5,6],
  [6,6,6,6],
  [6,6,6,6,6,6],
  [6,7,7,6,6,7],
  [8,8],
  [8,8,9,8],
  [9,9],
  [10,10,10,10]
];

let towers=[];
let balloons=[];
let game;
let count=-1;
let gameStart=0;
let wave=0;
let wb=0;
let bang,pop,place;
let mute=0;
function preload(){
  bang  = loadSound("assets/bang.mp3");
  pop   = loadSound("assets/pop.mp3");
  place = loadSound("assets/woosh.mp3");
}
function setup() {
  createCanvas(1000,800);
  startGame();
  frameRate(60);
}

function draw(){
  if (mute===1){
    bang.setVolume(0);
    place.setVolume(0);
    pop.setVolume(0);
    print("no");
  }
  else{
    bang.setVolume(1);
    place.setVolume(1);
    pop.setVolume(1);
  }
  background(100);
  // this one is the start screen that only moves on to the game when you press the start button
  if (gameStart===0){
    fill(0);
    textSize(50);
    text("Tower defense",(width/2)-100,(height/2)-100);
    fill(255);
    rect(475,330,100,50);
    fill(0);
    textSize(25);
    text("start",494,358);
    fill(0);
    textSize(25);
    text("Open the read me.txt",494,200);
    text("to learn how to play",494,230);
    if (mouseX>=476&&mouseX<=574&&mouseY>=332&&mouseY<=376 && mouseIsPressed){
      gameStart=1;
    }
  }
  // this is the game 
  else{
    drawMap();
    fill(0);
    textSize(50);
    text("wave " +wave+ " of "+ rounds.length,width-360,(height)-50)
    count=-1;
    game.draw();

    //
    for(let a of balloons){
      count++;
      a.display();
      a.move();
      a.checkIfTowerIsNears(count);
      a.checkIfBalloonIsOff(count);
    }


    if(frameCount%30===0){
      if (rounds[wave]===undefined&&balloons[0]===undefined){
        fill(0);
        textSize(25);
        text("You win",494,358);
        text("YAY",494,383);
        noLoop();
      }


      else{ 
        if (rounds[wave].length<wb+1 && balloons[0]===undefined){
          wb=0;
          wave++;
        }
        else if (rounds[wave].length!==wb){
          balloons.push(new Balloon(rounds[wave][wb]));
          wb++
        }
      }
    }
    
    if(game.gameEndCheck()===true){
      noLoop();
    }
  }
}

//this is to get the game going
function startGame(){
  game = new Game();
}

class Game{
  constructor(){
    this.hp=2;
    this.cash=70;
    this.cost=70;
  }

  removeHP(){
    this.hp-=1;
  }
  gameEndCheck(){
    if(this.hp<=0){
      fill(0);
      textSize(50);
      text("you lose press f5 to restart",(width/2)-300,height/2);
      return true;
    }
    return false;
  }

  // this is using a neseled for loop to check every square of the maps
  // array to see where the mouse clicked and change the 0 that is blank
  // into whichever tower is in the var
  towerPlaced(a,c){
    let xCount=0;
    let yCount=0;
    this.cost=c;
    for (let y=0; y<800; y=y+100){
      for (let x=0; x<1000; x=x+100){
        if (mouseX>=x && mouseX<=x+100 && mouseY >=y && mouseY <=y+100 && maps[yCount][xCount]===0){
          if (this.cash>=this.cost){
            place.play();
            towers.push(new Tower(yCount,xCount,a));
            maps[yCount][xCount]=a;
            this.cash-=this.cost;
          }
        }
        xCount++;
      }
      xCount=0;
      yCount++;
    }
  }
  money(a){
    if (a>=20){
      this.cash+=10;
    }
    else{
      this.cash+=a;
    }
  }
  // this draws on the money and hearts 
  draw(){
    fill(0);
    textSize(50);
    text(this.cash+"$",150,(height)-50);
    text(this.hp+"<3",50,(height)-50);
  }
}

class Tower{
  constructor(y,x,w){
    this.x=x;
    this.y=y;
    this.shoot=0;
    this.lastShootFrame=0;
    this.towerType=w;
  }
  // this subtracks the current frame and the last frame that the tower
  // was shot agenst the type of the tower 
  shootset(){
    if (frameCount-this.lastShootFrame>=this.towerType){
      this.shoot=0;
    }
    else{
      this.shoot=1;
    }
  }

  // this uses a for loop to see if the balloon is near one tile of the tower
  checkIfTowerIsNear(q,w,c){
    let nums=[-1,0,1];
    this.shootset();
    if (this.shoot===0 && c !==0){
    for (let a of nums){
      textSize(25);
      if (this.x===q-(a)){
        if(this.y===w-1){
          text("bang",(this.x*100)+10,(this.y*100)+20);
          bang.play();
          this.lastShootFrame=frameCount;
          return true;
        }
        if(this.y===w){
          text("bang",(this.x*100)+10,(this.y*100)+20);
          bang.play();
          this.lastShootFrame=frameCount;
          return true;
        }
        if(this.y===w+1){
          text("bang",(this.x*100)+10,(this.y*100)+20);
          bang.play();
          this.lastShootFrame=frameCount;
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

class Balloon{
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
    circle(this.bx,this.by,15);
  }

  // this is a bunch on if statments that check the spaces around the balloon to see 
  // where to move next after moving to the edge of the square
  move(){
    if(this.mD===1){
      this.bx+=1;
      this.count+=1;
      if (this.count===100){
        this.count=0;
        this.mD = maps[(this.by-50)/100][this.bx/100];
        this.posY=(this.by-50)/100;
        this.posX=this.bx/100;
      }
    }
    if(this.mD===2){
      this.by-=1;
      this.count+=1;
      if(this.count===100){
        this.count=0;
        this.mD = maps[(this.by-100)/100][(this.bx-50)/100];
        this.posY=(this.by-100)/100;
        this.posX=(this.bx-50)/100;
      }
    }
    if(this.mD===3){
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
      }
    }
    if(this.mD===4) {
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
      }
    }
    if(this.mD===5){
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
      }
    }
    if(this.mD===6){
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
      }
    }
    if(this.mD===7){
      this.bx-=1;
      this.count+=1;
      if(this.count===100){
        this.count=0;
        this.mD = maps[(this.by-50)/100][(this.bx-100)/100];
        this.posY=(this.by-50)/100;
        this.posX=(this.bx-100)/100;
      }
    }
    if(this.mD===8){
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
      }
    }
    if(this.mD===9){
      this.by+=1;
      this.count+=1;
      if(this.count===100){
        this.count=0;
        this.mD = maps[this.by/100][(this.bx-50)/100];
        this.posY=this.by/100;
        this.posX=(this.bx-50)/100;
      }
    }
    if(this.mD===10){
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
      }
    }
  } 

  
  checkIfBalloonIsOff(z){
    if(this.mD===undefined){
      game.removeHP();
      balloons.splice(z,1);
    }
  } 

  // this send it to the Tower class because it needs to know 
  // the balloon x and y and also the tower x and y
  checkIfTowerIsNears(z){
    for(let a of towers){
      if (a.checkIfTowerIsNear(this.posX,this.posY,this.bhp)){
        this.bhp-=0.5;
        print(this.bhp);
        if (this.bhp===0){
          pop.play();
          game.money(10*this.ogbhp);
          balloons.splice(z,1);
        }
      }
    }
  }
}

function mousePressed(){
  // game.towerPlaced(60,70) the first var is the fire rate/tower type
  // and the second one is cost of the tower
  if (key === "t"){
    game.towerPlaced(60,70);
  }
  if (key === "r"){
    game.towerPlaced(20,100);
  }
  if (key === "y"){
    game.towerPlaced(11,300);
  }
  if (key === "u"){
    game.towerPlaced(70,30);
  }
  if (key === "n"){
    game.money(10);
  }
  if (key === "m"){
    if (mute===1){
      mute=0;
    }
    else{
      mute=1;
    }
  }
}

// this one uses neseled for loops to go through the whole maps array to draw what it needs
function drawMap(){
  let xCount=0;
  let yCount=0;
  for (let y=0; y<800; y=y+100){
    for (let x=0; x<1000; x=x+100){
      if (maps[yCount][xCount]===0){
        fill(0,255,0);
        square(x,y,100);
      }
      if (maps[yCount][xCount]===60){
        fill(0,255,0);
        square(x,y,100);
        fill(55,100,200);
        circle(x+50,y+50,50);
      }
      if (maps[yCount][xCount]===20){
        fill(0,255,0);
        square(x,y,100);
        fill(155,100,100);
        circle(x+50,y+50,50);
      }
      if (maps[yCount][xCount]===11){
        fill(0,255,0);
        square(x,y,100);
        fill(255,100,200);
        circle(x+50,y+50,50);
      }
      if (maps[yCount][xCount]===70){
        fill(0,255,0);
        square(x,y,100);
        fill(155,200,200);
        circle(x+50,y+50,50);
      }
      xCount++;
    }
    xCount=0;
    yCount++;
  }
}

