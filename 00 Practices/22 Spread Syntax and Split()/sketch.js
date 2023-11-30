// Loading from files
// Hannah Tremaine
// 11/28/2023
//loadStrings(), split(), spread syntax

//let textFile;
//Global varibles
let grid, img, rows, cols, colorMap;

function preload(){
  //textFile = loadStrings("assets/info.txt");
  //img = loadStrings("assets/image.txt")
  img = loadStrings("assets/colorImage.txt")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //processText();
  //determine rows/cols
  cols = img[0].length;
  rows = img.length;
  //populate the 2D array (grid)
  grid = []
  for(let i = 0;i<rows;i++){
    grid.push([...img[i]]);

  }
  //create color map
  colorMap = new Map([
    ["b","black"],
    ["w","white"],
    ["r","sienna"],
    ["l","peru"],
    ["p",color(150,150,255)]
  ])
}

function draw() {
  renderGrid();
}

function renderGrid(){
  //calculate the grid size
  let cellWidth = width/cols;
  let cellHeight = height/rows;

  //visit each location in 2D arrat and visualize
  for(let x = 0;x<cols;x++){
    for(let y = 0;y<rows;y++){
      let currentKey = grid[y][x];
      fill(colorMap.get(currentKey));
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }

}

function windowResized(){
  createCanvas(windowWidth,windowHeight)
}

function processText(){
  print("SPLIT INTO WORDS");
  let splitWords = textFile[0].split(" ")
  print(splitWords);

  print("SPLIT INTO CHARATERS");
  let splitChars= textFile[1].split("");
  print(splitChars);

  print("SPREAD INTO CHARS");
  let spreadChars = [...textFile[2]];
  print(spreadChars);

}