// 3D Primitives and css cemteromg 
// Tyler Lusher 
// Nov 23, 2032
// Making a fractal in 3D? load an STL

let angle = 5;

function setup() {
  createCanvas(1200, 1200, WEBGL);
}

function draw() {
  background(0);
  rotateY(radians(frameCount));
  angle = map(mouseX,0,width,-120,120);
  boxes(70);
}

function boxes(size){
  if (size>10){
    rotateZ(radians(angle));
    translate(size*1.5,0);
    box(size);

    boxes(size*0.8);
  } 

}