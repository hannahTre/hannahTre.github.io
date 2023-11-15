// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let spacing = 40;
let colors = ["#C5414F","#DCD7BF","#A9B3C2","#EB9E8D",];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#01214C");
  drawSquares();
}

function drawSquares(){
  colorMode(RGB);
  strokeWeight(3);
  for(let x = 0;x<width;x+=spacing){
    for(let y =0;y<height;y+=spacing){
      let choice = Math.floor(random(3));
      if (choice===0){
        noFill();
        stroke(colors[Math.floor(random(colors.length))]);
      }
      else if(choice===1){
        noFill();
        noStroke()
      }
      else{
        fillColor = color(colors[Math.floor(random(colors.length))]);
        fill(fillColor);
        stroke(fillColor);
      }
      square(x,y,spacing,10);
      // x+=1;
      // y+=1;
    }
  }
}

function keyPressed(){
  if (key === "s"){
    save("image8.png")
  }
}