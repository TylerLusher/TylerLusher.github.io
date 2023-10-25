// Generative art Colors demo 
// Tyler Lusher 
// October 25, 2023

let rectWidth = 50;
let rectHeight = 20;
let colors = ["#CD0003","#FC000F","#F78900","#B3C404","#94D15A"];
// rrggbb 012345678ABCDEF
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  drawColRGB(width*0.1); // col at 10% of the canvas 
  drawColHSB(width*0.4); // col at 40% of the canvas
  drawColCustom(width*0.7); // col at 70% of the canvas
}

function drawColCustom(xPos){
  colorMode(RGB);
  let counter = 0;
  for(let y=0;y<height; y+=rectHeight){
    // option one: cycle through Palette
    fill(colors[counter % 5]); // %5 right 0,1,2,3,4
    // option 2 random selsecton 
    fill(colors[Math.floor(random(colors.length))]);

    rect(xPos,y,rectWidth,rectHeight);
    counter++;
  }

}
function drawColHSB(xPos){
  colorMode(HSB, 360);
  for(let y=0;y<height; y+=rectHeight){
    //fill HUE 0-360, SATURATION, BRIGHTNESS
    // y 0 - 800
    // y % 360 rifht (y<360)
    // m % n right 0-(n-1) 
    fill(y % 360, 360, 360);
    rect(xPos,y,rectWidth,rectHeight);
  }
}

function drawColRGB(xPos){
  colorMode(RGB); // back to defult 
  for (let y=0; y<height; y +=rectHeight){
    fill(random(255),random(255),random(255));
    rect(xPos,y,rectWidth,rectHeight);
  }


}

function draw() {
  //background(220);
}
