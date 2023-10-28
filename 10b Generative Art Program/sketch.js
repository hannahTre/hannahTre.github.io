// Generative Art Program 2
// Hannah Tremaine
// 10/28/2023

let spacing = 100;
let colors =["d9ed92","b5e48c","99d98c","76c893","52b69a","34a0a4","168aad","1a759f","1e6091","184e77"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  drawSquares
}

function drawSquares(){
  for(let x =spacing/2;x<width;x+=spacing){
    for(let y=spacing/2;y<height;x+=spacing){
      rectMode(CENTER);
      for(let b = spacing;b>0;b-=10){
        fill(colors[Math.floor(random(colors.length))]);
        strokeWeight(random(1,4));
        square(x,y,b);
      }
    }
  }
}