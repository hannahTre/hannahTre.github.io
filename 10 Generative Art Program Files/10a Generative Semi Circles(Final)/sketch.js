// Generative Art
// Hannah Tremaine
// 10/2/2023
let spacing = 100;
let colors = ["#0B0033","#370031","#832232","#CE8964","#F7E8B7"];

function setup() {
  createCanvas(2000,2000);
  noStroke();
  drawSquares();
  drawSemiCircles();
}

function arcRight(x,y,s){
  arc(x,y,s,s,radians(90),radians(270));
}

function arcLeft(x,y,s){
  arc(x,y,s,s,radians(270),radians(90));
}

function drawSemiCircles(){
  for (let x = spacing/2;x<width;x+=spacing){
    for (let y = spacing/2;y<height;y+=spacing){
      fill(colors[Math.floor(random(colors.length))]);
      let choice = Math.floor(random(2));
      if (choice===0){
        arcRight(x,y,spacing);
      }
      else{
        arcLeft(x,y,spacing);
      }
    }
  }
}

function drawSquares(){
  colorMode(RGB);
  for(let x = 0;x<width;x+=spacing){
    for(let y =0;y<height;y+=spacing){
      fill(colors[Math.floor(random(colors.length))]);
      square(x,y,spacing)
    }
  }
}

function keyPressed(){
  if(key==="s"){
    save("art1.png");
  }
}