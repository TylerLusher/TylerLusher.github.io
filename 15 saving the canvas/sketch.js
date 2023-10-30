// caving the canvas 
// TylerLusher 
// octbaer 27 

let scaleFactor=5;

function setup() {
  createCanvas(3000, 1000);
  noLoop();
  noStroke();
}

function draw() {
  background(0);
  for (let i = 0; i<1000;i++){
    let x = random(width);
    let y = random(height);
    if (y<height*0.7 && y>height*0.3){
      circle(x,y,10*scaleFactor);
    }

  }
}
function keyPressed(){
  if (key ==="s"){
    save("go.png");
  }
}