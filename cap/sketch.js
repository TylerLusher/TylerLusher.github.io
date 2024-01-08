function setup() {
  createCanvas(windowWidth, windowHeight);
}

let towers=[];
let ballon=[];
function draw(){
  background(100);
  for(let a of towers){
    fill(255,0,0);
    circle(a[0],a[1],5);
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

  }
}
