// Fishing Friends
// Hannah Tremaine
// Start - November 30th, 2023

//shop items
let tinyFishO, tinyFishPi, tinyFishPu, tinyFishR;
let smallFishB, smallFishG, small
//test fish class
let testFish;
//mouseisclicked
let isTriggered = false;
//base menu button
let openMenuButton;
//menus
let shopMenu1, shopMenu2, shopMenu3, shopMenu4, shopMenu5;
let shopMenu6, shopMenu7, shopMenu8, shopMenu9;
let shopMenu10, shopMenu11, shopMenu12, shopMenu13;
let shopMenu14, shopMenu15, shopMenu16, shopMenu17;
//varible controlling what menu is seen
let menuOn = 0; //0 off, 1 shopMenu1, 2 shopMenu2 and so forth

function preload(){
  //tiny Fish
  tinyFishO = loadAnimation('assets/shopItems/fish/Fish1 - 16x16/Orange.png', { frameSize: [16, 16], frames: 32 });
  tinyFishPi = loadAnimation('assets/shopItems/fish/Fish1 - 16x16/Pink.png', { frameSize: [16, 16], frames: 32 });
  tinyFishPu = loadAnimation('assets/shopItems/fish/Fish1 - 16x16/Purple.png', { frameSize: [16, 16], frames: 32 });
  tinyFishR = loadAnimation('assets/shopItems/fish/Fish1 - 16x16/Red.png', { frameSize: [16, 16], frames: 32 });
  //small fish

  //medium fish

}

function setup() {
  createCanvas(800,400);
  textAlign(CENTER);
  testFish = new Fish(0,200,tinyFishR);
  shopMenu1 = new ShopMenu1();
  shopMenu2 = new ShopMenu2();
  shopMenu3 = new ShopMenu3();
  shopMenu4 = new ShopMenu4();
  shopMenu5 = new ShopMenu5();
  shopMenu6 = new ShopMenu6();
  shopMenu7 = new ShopMenu7();
  shopMenu8 = new ShopMenu8();
  shopMenu9 = new ShopMenu9();
  shopMenu10 = new ShopMenu10();
  shopMenu11 = new ShopMenu11();
  shopMenu12 = new ShopMenu12();
  shopMenu13 = new ShopMenu13();
  shopMenu14 = new ShopMenu14();
  shopMenu15 = new ShopMenu15();
  shopMenu16 = new ShopMenu16();
  shopMenu17 = new ShopMenu17();
  openMenuButton = new Button(width*0.02,height*0.02,20,20,"magenta")
}

function draw() {
  clear();
  background(100);
  openMenuButton.update();
  openMenuButton.draw();
  chooseMenu();
  testFish.move();
  testFish.draw();
	animation(tinyFishPu, 200, 100);
}

function mouseClicked(){
  isTriggered = true;
}

function chooseMenu(){
  if(openMenuButton.state === true){
    menuOn=1;
  }
  if(menuOn===1){
    shopMenu1.update();
    shopMenu1.draw();
  }
  if(menuOn===2){
    shopMenu2.update();
    shopMenu2.draw();
  }
  if(menuOn===3){
    shopMenu3.update();
    shopMenu3.draw();
  }
  if(menuOn===4){
    shopMenu4.update();
    shopMenu4.draw();
  }
  if(menuOn===5){
    shopMenu5.update();
    shopMenu5.draw();
  }
  if(menuOn===6){
    shopMenu6.update();
    shopMenu6.draw();
  }
  if(menuOn===7){
    shopMenu7.update();
    shopMenu7.draw();
  }
  if(menuOn===8){
    shopMenu8.update();
    shopMenu8.draw();
  }
  if(menuOn===9){
    shopMenu9.update();
    shopMenu9.draw();
  }
  if(menuOn===10){
    shopMenu10.update();
    shopMenu10.draw();
  }
  if(menuOn===11){
    shopMenu11.update();
    shopMenu11.draw();
  }
  if(menuOn===12){
    shopMenu12.update();
    shopMenu12.draw();
  }
  if(menuOn===13){
    shopMenu13.update();
    shopMenu13.draw();
  }
  if(menuOn===14){
    shopMenu14.update();
    shopMenu14.draw();
  }
  if(menuOn===15){
    shopMenu15.update();
    shopMenu15.draw();
  }
  if(menuOn===16){
    shopMenu16.update();
    shopMenu16.draw();
  }
  if(menuOn===17){
    shopMenu17.update();
    shopMenu17.draw();
  }
}

class Fish{
  constructor(x,y,fish){
    this.x = x;
    this.y = y;
    this.fish = fish;
    this.speed = 3;
  }

  draw(){
    animation(this.fish, this.x, this.y);
  }
  move(){
    if(this.x > width || this.x<0){
      this.fish.scale.x *=-1;
      this.speed*=-1;
    }
    this.x += this.speed;
  }

}

class Button{
  constructor(x,y,w,h,color){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;

    this.state = false;
  }

  draw(){
    if(this.state===false){
      fill(this.color);
      rect(this.x,this.y,this.w,this.h);
    }
    else{
      fill("green");
      rect(this.x,this.y,this.w,this.h);
    }
  }

  update(){
    if(mouseX>this.x && mouseX<(this.x+this.w)&&mouseY>this.y&&mouseY<this.y+this.h&&isTriggered===true){
      this.state = true;
      isTriggered = false;
    }
    else{
      this.state = false;
    }
  }

}

class Menu{
  constructor(){
    this.buttons = [];
  }

  draw(){
    fill(200);
    rect(0,height*0.8,width,height*0.2);
    for(let i = 0;i<this.buttons.length;i++){
      this.buttons[i].update();
      this.buttons[i].draw();
    }
  }

}

class ShopMenu1 extends Menu{ //Main shop menu,, pick which TYPE of item
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red"))
    this.buttons.push(new Button(width*0.2,height*0.85,40,40,"red"));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"blue"));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"purple"));
    this.buttons.push(new Button(width*0.8,height*0.85,40,40,"yellow"));
  }

  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 2;
    }
    if(this.buttons[2].state===true){
      menuOn = 3;
    }
    if(this.buttons[3].state===true){
      menuOn = 4;
    }
    if(this.buttons[4].state===true){
      menuOn = 5;
    }

  }

}

class ShopMenu2 extends Menu{ //FISH MAIN MENU
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red")); //exit
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow")); //back
    this.buttons.push(new Button(width*0.2,height*0.85,40,40,"orange")); //fish
    this.buttons.push(new Button(width*0.5,height*0.85,40,40,"green")); //shark
    this.buttons.push(new Button(width*0.8,height*0.85,40,40,"purple")); //other
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 1;
    }
    if(this.buttons[2].state===true){
      menuOn = 6;
    }
  }
}


class ShopMenu3 extends Menu{ //DECOR MAIN MENU
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow"));
    this.buttons.push(new Button(width*0.2,height*0.85,40,40,"teal"));
    this.buttons.push(new Button(width*0.5,height*0.85,40,40,"purple"));
    this.buttons.push(new Button(width*0.8,height*0.85,40,40,"blue"));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 1;
    }
    if(this.buttons[2].state===true){
      menuOn = 10;
    }
    if(this.buttons[3].state===true){
      menuOn = 11;
    }
    if(this.buttons[4].state===true){
      menuOn = 12;
    }
  }
}

class ShopMenu4 extends Menu{ //PLANTS MAIN MENU
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow"));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"salmon"));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"coral"));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 1;
    }
  }
}

class ShopMenu5 extends Menu{ //BACKGROUND MAIN MENU
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow"));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"teal"));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"blue"));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 1;
    }
  }
}

class ShopMenu6 extends Menu{ //types of fish
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red")); //exit
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow")); //back
    this.buttons.push(new Button(width*0.2,height*0.85,40,40,"black")); //tiny
    this.buttons.push(new Button(width*0.5,height*0.85,40,40,"white")); //normal
    this.buttons.push(new Button(width*0.8,height*0.85,40,40,"gray")); //long
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 2;
    }
    if(this.buttons[2].state===true){
      menuOn = 7;
    }
    if(this.buttons[3].state===true){
      menuOn = 8;
    }
    if(this.buttons[4].state===true){
      menuOn = 9;
    }
  }
}

class ShopMenu7 extends Menu{ //tiny fish colors
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow"));
    this.buttons.push(new Button(width*0.2,height*0.85,40,40,"orange"));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"orange"));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"orange"));
    this.buttons.push(new Button(width*0.8,height*0.85,40,40,"orange"));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 6;
    }
  }
}

class ShopMenu8 extends Menu{ //normal fish colors
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow"));
    this.buttons.push(new Button(width*0.2,height*0.85,40,40,"purple"));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"purple"));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"purple"));
    this.buttons.push(new Button(width*0.8,height*0.85,40,40,"purple"));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 6;
    }
  }
}

class ShopMenu9 extends Menu{ //long fish colors
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow"));
    this.buttons.push(new Button(width*0.2,height*0.85,40,40,"pink"));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"pink"));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"pink"));
    this.buttons.push(new Button(width*0.8,height*0.85,40,40,"pink"));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 6;
    }
  }
}

class ShopMenu10 extends Menu{ //bubble and clam
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow"));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"pink"));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"pink"));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 3;
    }
  }
}

class ShopMenu11 extends Menu{ //chest options
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow"));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"yellow"));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"yellow"));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 3;
    }
  }
}

class ShopMenu12 extends Menu{ //shell shapes
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow"));
    this.buttons.push(new Button(width*0.2,height*0.85,40,40,"blue"));
    this.buttons.push(new Button(width*0.35,height*0.85,40,40,"cyan"));
    this.buttons.push(new Button(width*0.5,height*0.85,40,40,"blue"));
    this.buttons.push(new Button(width*0.65,height*0.85,40,40,"cyan"));
    this.buttons.push(new Button(width*0.8,height*0.85,40,40,"blue"));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 3;
    }
    if(this.buttons[2].state===true){
      menuOn = 13;
    }
    if(this.buttons[3].state===true){
      menuOn = 14;
    }
    if(this.buttons[4].state===true){
      menuOn = 15;
    }
    if(this.buttons[5].state===true){
      menuOn = 16;
    }
    if(this.buttons[6].state===true){
      menuOn = 17;
    }
  }
}

class ShopMenu13 extends Menu{ //shell shapes
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow"));
    this.buttons.push(new Button(width*0.12,height*0.85,40,40,"blue"));
    this.buttons.push(new Button(width*0.28,height*0.85,40,40,"blue"));
    this.buttons.push(new Button(width*0.44,height*0.85,40,40,"blue"));
    this.buttons.push(new Button(width*0.60,height*0.85,40,40,"blue"));
    this.buttons.push(new Button(width*0.76,height*0.85,40,40,"blue"));
    this.buttons.push(new Button(width*0.92,height*0.85,40,40,"blue"));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 12;
    }
  }
}

class ShopMenu14 extends Menu{ //shell shapes
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow"));
    this.buttons.push(new Button(width*0.12,height*0.85,40,40,"pink"));
    this.buttons.push(new Button(width*0.28,height*0.85,40,40,"pink"));
    this.buttons.push(new Button(width*0.44,height*0.85,40,40,"pink"));
    this.buttons.push(new Button(width*0.60,height*0.85,40,40,"pink"));
    this.buttons.push(new Button(width*0.76,height*0.85,40,40,"pink"));
    this.buttons.push(new Button(width*0.92,height*0.85,40,40,"pink"));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 12;
    }
  }
}

class ShopMenu15 extends Menu{ //shell shapes
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow"));
    this.buttons.push(new Button(width*0.12,height*0.85,40,40,"purple"));
    this.buttons.push(new Button(width*0.28,height*0.85,40,40,"purple"));
    this.buttons.push(new Button(width*0.44,height*0.85,40,40,"purple"));
    this.buttons.push(new Button(width*0.60,height*0.85,40,40,"purple"));
    this.buttons.push(new Button(width*0.76,height*0.85,40,40,"purple"));
    this.buttons.push(new Button(width*0.92,height*0.85,40,40,"purple"));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 12;
    }
  }
}

class ShopMenu16 extends Menu{ //shell shapes
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow"));
    this.buttons.push(new Button(width*0.12,height*0.85,40,40,"orange"));
    this.buttons.push(new Button(width*0.28,height*0.85,40,40,"orange"));
    this.buttons.push(new Button(width*0.44,height*0.85,40,40,"orange"));
    this.buttons.push(new Button(width*0.60,height*0.85,40,40,"orange"));
    this.buttons.push(new Button(width*0.76,height*0.85,40,40,"orange"));
    this.buttons.push(new Button(width*0.92,height*0.85,40,40,"orange"));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 12;
    }
  }
}

class ShopMenu17 extends Menu{ //shell shapes
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow"));
    this.buttons.push(new Button(width*0.12,height*0.85,40,40,"red"));
    this.buttons.push(new Button(width*0.28,height*0.85,40,40,"red"));
    this.buttons.push(new Button(width*0.44,height*0.85,40,40,"red"));
    this.buttons.push(new Button(width*0.60,height*0.85,40,40,"red"));
    this.buttons.push(new Button(width*0.76,height*0.85,40,40,"red"));
    this.buttons.push(new Button(width*0.92,height*0.85,40,40,"red"));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 12;
    }
  }
}


