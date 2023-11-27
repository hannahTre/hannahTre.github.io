// Puzzle Starter
// Hannah Tremaine
// 11/6/2023
//A first foray into working with 2d arrays

let grid = //gets replaced every refresh with createBoard()
[[0,  255,  255,  0,  255],
 [255,  255,  0,  255,  255],
 [255,  0,  255,  0,  0],
 [0,    0,    0,    255,  0,]];
const NUM_ROWS = 4;
const NUM_COLS= 5;
let rectWidth = 50;
let rectHeight = 50;
let col, row; //x and y pos of mouse
let typeCross = false; //true==cross,false=sqaure

function setup() {
  createCanvas(rectWidth*NUM_COLS, rectHeight*NUM_ROWS);
  //fill grid with either black or white squares
  createBoard();
}

function draw() {
  col = getCurrentX();
  row = getCurrentY();
  background(220);
  renderGrid();
  overlay();
  // if(frameCount%5===0){
  //   let rX = floor(random(NUM_COLS));
  //   let rY = floor(random(NUM_ROWS));
  //   grid[rY][rX] = random(255);
  // }
  if (winner()===true){
    winnerText();
  }
}

function overlay(){
  //draws either a cross or square depending on state of typeCross
  for(let x =0;x<NUM_COLS;x++){
    for(let y=0;y<NUM_ROWS;y++){
      if(x===col&&y===row){
        //green transparent
        fill(36, 150, 46, 100);
        if(typeCross){
          //mouse pos. sqaure
          rect(x*rectWidth,y*rectHeight,rectWidth,rectHeight);
          //one up
          if(row>0)rect(rectWidth*col,rectHeight*(row-1),rectWidth,rectHeight);
          //one down
          if(row<NUM_ROWS-1)rect(rectWidth*col,rectHeight*(row+1),rectWidth,rectHeight);
          //one right
          if(col<NUM_COLS-1)rect(rectWidth*(col+1),rectHeight*row,rectWidth,rectHeight);
          //one left
          if(col>0)rect(rectWidth*(col-1),rectHeight*row,rectWidth,rectHeight);
        }
        if(typeCross===false){
          //mouse pos. square
          rect(x*rectWidth,y*rectHeight,rectWidth,rectHeight);
          //one down
          if(row<NUM_ROWS-1)rect(rectWidth*col,rectHeight*(row+1),rectWidth,rectHeight);
          //one right
          if(col<NUM_COLS-1)rect(rectWidth*(col+1),rectHeight*row,rectWidth,rectHeight);
          //one down and right
          if(row<NUM_ROWS-1 && col<NUM_COLS-1)rect(rectWidth*(col+1),rectHeight*(row+1),rectWidth,rectHeight);
        }
      }
    }
  }
}

function winnerText(){
  //Text style (prints if winner() returns true)
  textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    textAlign(CENTER,CENTER);
    text("You Won!",width/2,height/2);
    strokeWeight(1);
}

function createBoard(){
  //fills each item in grid[] with 0 or 255
  for(let x =0;x<NUM_COLS;x++){
    for(let y = 0;y<NUM_ROWS;y++){
      number = Math.floor(random(1,3)); //returns 1 or 2
      let add = 0;
      if(number===1){
        add = 0;
      }
      if(number===2){
        add = 255;
      }
      grid[y][x]=add;
    }
  }
}

function mousePressed(){
  //if holding shift, only flip one square
  if (keyCode ===SHIFT&&keyIsPressed){
    flip(col,row);
  }
  else{
    //flip sqaures in a cross shape
    if(typeCross){
      flip(col,row) // flip active tile
      if(row>0)flip(col,row-1);
      if(row<NUM_ROWS-1)flip(col,row+1);
      if(col<NUM_COLS-1)flip(col+1,row);
      if(col>0)flip(col-1,row);
    }
    //flip sqaures in a square shape
    if(typeCross===false){
      flip(col,row);
      if(row<NUM_ROWS-1)flip(col,row+1);
      if(col<NUM_COLS-1)flip(col+1,row);
      if(row<NUM_ROWS-1 && col<NUM_COLS-1)flip(col+1,row+1);
    }
  }
}
function keyPressed(){
  //if space bar is pressed, change the shape (cross->sqaure etc.)
  if(key===" "){
    typeCross = !typeCross;
  }
}

function winner(){
  //checks to see if all sqaures are the same color
  //checks to see if all sqaures are equal to the first thing in the array
  let checkFor = grid[0][0];
  let winning = false;
  for(let x = 0;x<NUM_COLS;x++){
    for(let y = 0;y<NUM_ROWS;y++){
      if(grid[y][x]===checkFor){
        winning = true;
      }
      else return false;
    }
  }
  return winning;
}

function flip(x,y){
  //at a given x,y flip value in 2d array
  if(grid[y][x]===0) grid[y][x]=255;
  else grid[y][x]=0;
}

function getCurrentX(){
  //return the curretn column mouse is in
  let constrainX = constrain(mouseX,0,width-1);
  return int(constrainX/rectWidth);
}

function getCurrentY(){
  //return the current row mouse is in
  let constrainY = constrain(mouseY,0,height-1);
  return int(constrainY/rectHeight);
}

function renderGrid(){
  //creates a 2d grid of squares using info from grid array for fill values
  for(let x=0;x<NUM_COLS;x++){
    for(let y=0;y<NUM_ROWS;y++){
      let fillValue = grid[y][x];
      fill(fillValue);
      rect(x*rectWidth,y*rectHeight,rectWidth,rectHeight);
    }
  }
}