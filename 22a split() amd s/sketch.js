// split() and spread syntax
// Tyler Lusher
// Nov 28
// split()


let grid, img, rows, cols, colorMap; 

function preload(){
  img = loadStrings("assets/image.txt");

}

function setup(){
  //partOne
  // img will hold an array of strings the 
  cols = img[0].length;
  rows = img.length;
  createCanvas(windowWidth,windowHeight);

  // put text fils's data in our 2D array 
  grid = [];
  for (let i = 0; i<img.length;i++){
    grid.push([...img[1]]);
  } 

  // create a Map() to keep track of colors
  colorMap = new Map([
    ["b","black"],
    ["w","white"],
    ["r","sienna"],
    ["l","peru"],
    ["p",color(110,110,255)]
  ]);
}

function renderGrid(){
  //calculate the grid size:
  let cellWidth = width/cols;
  let cellHeight = height/rows;

  // visit each position in the 2d array, draw a grid 
  for (let x=0;x<cols;x++){
    for (let y=0;y<rows;y++){
      let currentKey = grid[y][x];
      fill(colorMap.get(currentKey));
      rect(x*cellWidth,y*cellHeight,cellWidth,cellHeight);
    }
  }
}

function windowResized(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  renderGrid();
}










function partOne(){
  let textFile;

  textFile = loadStrings("/assets/info.txt");

  print("SPLIT INTO WORDS: ");
  let stringSplit = textFile[0].split(" ");
  print(stringSplit);

  print("SPLIT INTO SHARS: ");
  let stringSplit2 = textFile[1].split("");
  print(stringSplit2);

  print("SPREAD SYNTAX FOR CHARS; ");
  let stringSpread = [...textFile[1]];
  print(stringSpread);

}
