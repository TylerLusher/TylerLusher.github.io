// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  clock();
}

function clock(){
  let i = 0;
  let x = width/2;
  let y = height/2;
  circle(width/2,height/2,150);
  while(i !== 12){
    line(x,y-50,x,y-40);
    for(let x = 0;x<=4 ; x++){
      line();
    }
    i++;
  }


}
