// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let spacing=100;
let colors=["#99e2b4","#88d4ab","#78c6a3","#67b99a","#56ab91","#469d89","#358f80","#248277","#14746f","#036666"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noFill();
  drawSquares();
}

function draw(){
  //drawSquares();
}

function drawSquares(){
  colorMode(RGB);
  rectMode(CENTER);
  for(let x = 0;x<width;x+=spacing){
    for(let y =0;y<height;y+=spacing){
      for (let j = spacing;j>0;j-=5){
        stroke(colors[Math.floor(random(colors.length))]);
        strokeWeight(random(1,4));
        square(x,y,j);
      }
    }
  }
}

function keyPressed(){
  if (key==="s"){
    save("art6.png")
  }
}