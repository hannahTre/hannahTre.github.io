// Objects and Classes
// Hannah Tremaine
// 10/2/2023
//Random walker class  + multiple objects

//Global Varibles
let w=[];
const NUM_WALKERS = 300;


function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0;i<NUM_WALKERS;i++){
    let randColor = color(random(255),random(255),random(255));
  w.push(new Walker(width/2,height/2,randColor));
  }
}

function draw() {
  //background(220); 
  for (let current of w){
    current.move();
    current.display();
  }
}

class Walker{
  //class Constructor and properties
  constructor(x, y, c){
    this.x = x;
    this.y = y;
    this.c = c;
    this.size = 10;
    this.speed = 10;
  }

  //class methods
  move(){//equally likely chance to move up/down/l/r
    //0- up, 1- down, 2- left, 3-right
    let moveChoice = Math.floor(random(0,4));
    if (moveChoice===0)this.y-=this.speed;
    else if (moveChoice===1)this.y+=this.speed;
    else if(moveChoice===2)this.x -=this.speed;
    else this.x+=this.speed;
  
  }

  display(){ // render our walker on hte screen
    rectMode(CENTER);
    fill(this.c);
    square(this.x,this.y,this.size)
  }
}