// Terrain Generator
// Hannah Tremaine
// 10/5/2023

//Global Varibles
let terWidth = 1;
let terHeight;
let terHeightTime = 40;
let terHeightTimeShift = 1;
let noiseShift = 0.01;
let topX= 0;
let topY = 0;


function drawClouds(){
  let x = 0;
  noStroke();
  fill(255);
  while(x<width){
    cloud(0,height*0.3);
    cloud(100,height*0.6)
    x+=terWidth;
  }
}

function cloud(cloudWidth,cloudHeight){
  noStroke();
  fill(255);
  circle(cloudWidth+20,cloudHeight*0.3,20);
  circle(cloudWidth+30,cloudHeight*0.29,15);
  circle(cloudWidth+40,cloudHeight*0.3,30);
  circle(cloudWidth+55,cloudHeight*0.3,15)
}

function generateTerrain(){
  //loop varible, also where the bottom left corner of rect is made
  let x = 0;
  rectMode(CORNERS);
  noStroke();
  fill(108, 194, 95);
  //draws the rects to make terrain
  topY=0;
  while (x<width){
    terHeight = noise(terHeightTime);
    terHeight = map(terHeight,0,1,0,height*0.6);
    if (terHeight>topY){
      topY=terHeight;
      topX=x
    }
    terHeightTime+=noiseShift;
    rect(x,height,x+terWidth,height - terHeight);
    x+=terWidth;
  }
}

function drawFlag(x,y){
  stroke(255,0,0);
  fill(225,0,0);
  strokeWeight(2);
  line(x,y,x,y-30);
  strokeWeight(1);
  triangle(x,y-30,x,y-20,x+10,y-20);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(20);
}

function draw() {
  background(167, 232, 230);
  terHeightTime = 40+terHeightTimeShift;
  terHeightTimeShift+=0.1;
  generateTerrain();
  drawFlag(topX,height-topY);
  drawClouds();
}