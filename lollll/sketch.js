// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let arry = [];
let yps=50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //drawLine(100);
  noLoop();
}

function draw() {
  for (let count = 0; count!==90;count=count+1){
    drawLine(yps);
    yps+=2.5;
  }
}

function drawLine(yPos) {
  let up=1;
  let ogy = yPos;
  let go = 0;
  for (let x = 50; x < width-50; x=x+5) {
    if (ogy===yPos-30){
      up=1;
      go+=1;
    }
    if (ogy===yPos+10){
      up=0;
    }
    if (up===0){
      if (go===1){
        ogy-=0.75;
      }
      if (go===2){
        ogy-=1;
      }
      else{
        ogy-=0.5;
      }
    }
    if(up===1){
      if (go === 0){
        ogy+=0.5;
      }
      if (go===1){
        ogy+=0.75;
      }
      if (go===2){
        ogy+=1;
      }
      else{
        ogy+=0.5;
      }
    }
    line(x,ogy,x-5,ogy);
  }
}