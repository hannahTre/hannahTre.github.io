// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let button;
function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  

  button = new Button(width/2,height/2,100,100,"red","test");
}

function draw() {
  background(220);
  button.update();
  button.draw();
}

class Button{
  constructor(x,y,w,h,color,text){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.text = text;

    this.state = false;
  }

  draw(){
    if(this.state===false){
      fill(this.color);
      rect(this.x,this.y,this.w,this.h);
      fill("black");
      text(this.text,this.x+this.w/2,this.y+this.h/2);
    }
    else{
      fill("green");
      rect(this.x,this.y,this.w,this.h);
      fill("black");
      text("clicked",this.x+this.w/2,this.y+this.h/2);
    }
  }

  update(){
    if(mouseX>this.x && mouseX<(this.x+this.w)&&mouseY>this.y&&mouseY<this.y+this.h&&mouseIsPressed){
      this.state = true;
    }
    else{
      this.state = false;
    }
  }

}