// Diagonal Line Generator
// Hannah Tremaine
// 10/24/2023
let spacing = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(3);
  drawLines();
}

function diagonalAsending(x,y,s){
  line(x-s/2,y+s/2,x+s/2,y-s/2);
}

function diagonalDesending(x,y,s){
  line(x-s/2,y-s/2,x+s/2,y+s/2);
}

function drawLines(){ //generate x,y x=0,30,60 etc
  for(let x = 0;x<width;x+=spacing){
    for(let y = 0;y<height;y+=spacing){
      let choice = Math.floor(random(2));
      if (choice === 0){
        diagonalAsending(x,y,spacing);
      }
      else{
        diagonalDesending(x,y,spacing);
      }
    }
  }

}