// Snake Mechanics
// Hannah Tremaine
// 10/11/2023
// Practice in working with classes and arrays

//Globl Varibles
let points = []; //smake coords
let speed = 6; //snake speed
let snakeLength = 20;
let snakeLocation; //a point for where the head is


function setup() {
  createCanvas(windowWidth, windowHeight);
  snakeLocation = new Point(width/2,height/2);
  strokeWeight(15);
  initSnake(); //populatw the array 
}

function initSnake(){
  //place a bunch of starting points in points[]
  for(let i = 0; i<snakeLength; i++){
    points.push(createPoint());
  }
}

function createPoint(){
  //return a new point object 
  if(keyCode===UP_ARROW)snakeLocation.y -= speed;
  else if(keyCode===DOWN_ARROW)snakeLocation.y += speed;
  else if (keyCode===LEFT_ARROW)snakeLocation.x -= speed;
  else if (keyCode===RIGHT_ARROW)snakeLocation.x += speed;
  //if a differend key was pressed, no change
  return new Point(snakeLocation.x,snakeLocation.y);
}

function draw() {
  background(220);
  moveAndDisplay();
}

function moveAndDisplay(){
  //loop through the array and connect the points
  for(let i =0; i<points.length-1; i++){
    let cur = points[i]; //point .x .y
    let next = points[i+1];
    let alpha = map(i,0,points.length-1,0,155);
    stroke(255,0,0,alpha);
    line(cur.x,cur.y,next.x,next.y)
  }

  //move - delete first element, push new point
  points.splice(0,1); //deletes element 0
  points.push(createPoint());
}

class Point{ //a class for an (x,y) point
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
}
