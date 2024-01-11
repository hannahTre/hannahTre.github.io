// Fishing Friends
// Hannah Tremaine
// Start - November 30th, 2023

p5.Image.prototype.resizeNN = function (w, h) {
  "use strict";

  // Locally cache current image's canvas' dimension properties:
  const { width, height } = this.canvas;

  // Sanitize dimension parameters:
  w = ~~Math.abs(w), h = ~~Math.abs(h);

  // Quit prematurely if both dimensions are equal or parameters are both 0:
  if (w === width && h === height || !(w | h))  return this;

  // Scale dimension parameters:
  if (!w)  w = h*width  / height | 0; // only when parameter w is 0
  if (!h)  h = w*height / width  | 0; // only when parameter h is 0

  const img = new p5.Image(w, h), // creates temporary image
        sx = w / width, sy = h / height; // scaled coords. for current image

  this.loadPixels(), img.loadPixels(); // initializes both 8-bit RGBa pixels[]

  // Create 32-bit viewers for current & temporary 8-bit RGBa pixels[]:
  const pixInt = new Int32Array(this.pixels.buffer),
        imgInt = new Int32Array(img.pixels.buffer);

  // Transfer current to temporary pixels[] by 4 bytes (32-bit) at once:
  for (var x = 0, y = 0; y < h; x = 0) {
    const curRow = width * ~~(y/sy), tgtRow = w * y++;

    while (x < w) {
      const curIdx = curRow + ~~(x/sx), tgtIdx = tgtRow + x++;
      imgInt[tgtIdx] = pixInt[curIdx];
    }
  }

  img.updatePixels(); // updates temp 8-bit RGBa pixels[] w/ its current state

  // Resize current image to temporary image's dimensions:
  this.canvas.width = this.width = w, this.canvas.height = this.height = h;
  this.drawingContext.drawImage(img.canvas, 0, 0, w, h, 0, 0, w, h);

  return this;
};




//preload stuff
let fishImages = [];
let decorImages = [];
let plantImages = [];
let buttonImages = [];
let uiImages = [];
let backgroundImages = [];
let programStarted = false;
let totalCounter = 0;
//shop items animation
//fish
let tinyFishO, tinyFishPi, tinyFishPu, tinyFishR;
let smallFishB, smallFishG, smallFishO, smallFishP;
let longFishB, longFishP, longFishO, longFishR;
let jellyP, jellyB, sawshark, angler, shark, swordfish, squidR, squidP;
//decor
let bubbles, chest1, chest2, clam;
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
let shopMenu18, shopMenu19, shopMenu20, shopMenu21, shopMenu22, shopMenu23;
let shopMenu24, shopMenu25, shopMenu26, shopMenu27, shopMenu28, shopMenu29;
//varible controlling what menu is seen
let menuOn = 0; //0 off, 1 shopMenu1, 2 shopMenu2 and so forth

//controls for previewing item
let previewMode = false;
let previewTest = [];

//in aquarium
let fishInAquarium = [];

function finishedLoading(){
  totalCounter++;
  print(totalCounter);
}



function setup() {
  createCanvas(800,400);
  for(let i =0; i<18;i++){ //fish images
    fishImages.push(loadImage("assets/shopItems/fish/fish"+(i)+".png",finishedLoading))
  }
  for(let i =0; i<4;i++){ //decor images
    decorImages.push(loadImage("assets/shopItems/decor/decor"+(i)+".png",finishedLoading))
  }
  for(let i =0; i<6;i++){ //plant images
    plantImages.push(loadImage("assets/shopItems/plants/plant"+(i)+".png",finishedLoading))
  }
  for(let i =0; i<51;i++){ //button images
    buttonImages.push(loadImage("assets/buttons/button"+(i)+".jpg",finishedLoading))
  }
  for(let i =0; i<12;i++){ //ui images
    uiImages.push(loadImage("assets/ui/ui buttons/b"+(i)+".png",finishedLoading))
  }
  for(let i =0; i<5;i++){ //plant images
    backgroundImages.push(loadImage("assets/backgrounds/bg"+(i)+".png",finishedLoading))
  }
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
  shopMenu18 = new ShopMenu18();
  shopMenu19 = new ShopMenu19();
  shopMenu20 = new ShopMenu20();
  shopMenu21 = new ShopMenu21();
  shopMenu22 = new ShopMenu22();
  shopMenu23 = new ShopMenu23();
  shopMenu24 = new ShopMenu24();
  shopMenu25 = new ShopMenu25();
  shopMenu26 = new ShopMenu26();
  shopMenu27 = new ShopMenu27();
  shopMenu28 = new ShopMenu28();
  shopMenu29 = new ShopMenu29();
  //openMenuButton = new Button(width*0.02,height*0.02,20,20,"magenta","none");
}

function createSprites(){
  //fish
  tinyFishO = loadAnimation(fishImages[0], { frameSize: [16, 16], frames: 32 });
  tinyFishPi = loadAnimation(fishImages[1], { frameSize: [16, 16], frames: 32 });
  tinyFishPu = loadAnimation(fishImages[2], { frameSize: [16, 16], frames: 32 });
  tinyFishR = loadAnimation(fishImages[3], { frameSize: [16, 16], frames: 32 });
  smallFishB = loadAnimation(fishImages[4], { frameSize: [32, 16], frames: 32 });
  smallFishG = loadAnimation(fishImages[5], { frameSize: [32, 16], frames: 32 });
  smallFishO = loadAnimation(fishImages[6], { frameSize: [32, 16], frames: 32 });
  smallFishP = loadAnimation(fishImages[7], { frameSize: [32, 16], frames: 32 });
  longFishB = loadAnimation(fishImages[8], { frameSize: [32, 16], frames: 32 });
  longFishP = loadAnimation(fishImages[9], { frameSize: [32, 16], frames: 32 });
  longFishO = loadAnimation(fishImages[10], { frameSize: [32, 16], frames: 32 });
  longFishR = loadAnimation(fishImages[11], { frameSize: [32, 16], frames: 32 });
  jellyP = loadAnimation(fishImages[12], { frameSize: [32, 16], frames: 4 });
  jellyB = loadAnimation(fishImages[12], { frameSize: [32, 16], frames: 8 });
  sawshark = loadAnimation(fishImages[13], { frameSize: [48, 32], frames: 16 });
  angler = loadAnimation(fishImages[14], { frameSize: [32, 32], frames: 16 });
  shark = loadAnimation(fishImages[15], { frameSize: [32, 32], frames: 16 });
  swordfish = loadAnimation(fishImages[16], { frameSize: [48, 32], frames: 8 });
  squidR = loadAnimation(fishImages[17], { frameSize: [32, 16], frames: 4 });
  squidP = loadAnimation(fishImages[17], { frameSize: [32, 16], frames: 8 });
  //decor
  bubbles = loadAnimation(decorImages[0], { frameSize: [8, 8], frames: 8 });
  chest1 = loadAnimation(decorImages[0], { frameSize: [16, 32], frames: 3 });
  chest2 = loadAnimation(decorImages[0], { frameSize: [16, 32], frames: 6 });
  clam = loadAnimation(decorImages[0], { frameSize: [16, 16], frames: 4 });
}

function draw() {
  if(!programStarted){
    if(totalCounter<96){
      fill(255,0,0);
      rect(0,0,width,height);
    }
    else{
      createSprites();
      programStarted = true;
    }  
  }
  else{
    clear();
    fill(100);
    backgroundImages[2].resizeNN(800,400);
    backgroundImages[0].resizeNN(800,400);
    image(backgroundImages[2],0,0);
    image(backgroundImages[0],0,0);
    //openMenuButton.update();
    //openMenuButton.draw();
    chooseMenu();
    animation(smallFishO, width/2, 100);
    animation(tinyFishPu, 200, 100);
    animation(jellyP,width/2,height/2);
    for(p of previewTest){
      p.preview();
    }
    for(f of fishInAquarium){
      f.draw();
      f.move();
    }
  }
}

function mousePressed(){
  isTriggered = true;
}

function mouseReleased(){
  isTriggered = false;
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
  if(menuOn===18){
    shopMenu18.update();
    shopMenu18.draw();
  }
  if(menuOn===19){
    shopMenu19.update();
    shopMenu19.draw();
  }
  if(menuOn===20){
    shopMenu20.update();
    shopMenu20.draw();
  }
  if(menuOn===21){
    shopMenu21.update();
    shopMenu21.draw();
  }
  if(menuOn===22){
    shopMenu22.update();
    shopMenu22.draw();
  }
  if(menuOn===23){
    shopMenu23.update();
    shopMenu23.draw();
  }
  if(menuOn===24){
    shopMenu24.update();
    shopMenu24.draw();
  }
  if(menuOn===25){
    shopMenu25.update();
    shopMenu25.draw();
  }
  if(menuOn===26){
    shopMenu26.update();
    shopMenu26.draw();
  }
  if(menuOn===27){
    shopMenu27.update();
    shopMenu27.draw();
  }
  if(menuOn===28){
    shopMenu28.update();
    shopMenu28.draw();
  }
  if(menuOn===29){
    shopMenu29.update();
    shopMenu29.draw();
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
  constructor(x,y,w,h,color,image){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.image = image;

    this.state = false;
  }

  draw(){
    if(this.state===false){
      if(this.image === "x"){
        image(uiImages[1],this.x,this.y);
      }
      else if(this.image === "back"){
        fill(this.color);
        rect(this.x,this.y,this.w,this.h);
      }
      else{
        image(this.image,this.x,this.y);
      }
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

class Preview{
  constructor(item){
    this.item = item
  }

  preview(){
    if(previewMode){
      image(uiImages[9],width-32,0,64,32);
      animation(this.item,mouseX,mouseY);
      if(mousePressed&&isTriggered&&mouseX>width-32&&mouseX<width&&mouseY>0&&mouseY<64){
        previewMode = false;
      }
      else if(mousePressed&&isTriggered){
        previewMode = false;
        fishInAquarium.push(new Fish(mouseX,mouseY,this.item));
      }
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
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x"))
    this.buttons.push(new Button(width*0.2,height*0.85,40,40,"red",buttonImages[0]));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"blue",buttonImages[0]));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"purple",buttonImages[0]));
    this.buttons.push(new Button(width*0.8,height*0.85,40,40,"yellow",buttonImages[0]));
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
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x")); //exit
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow","back")); //back
    this.buttons.push(new Button(width*0.2,height*0.85,40,40,"orange",buttonImages[0])); //fish
    this.buttons.push(new Button(width*0.5,height*0.85,40,40,"green",buttonImages[0])); //shark
    this.buttons.push(new Button(width*0.8,height*0.85,40,40,"purple",buttonImages[0])); //other
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
    if(this.buttons[3].state===true){
      menuOn = 26;
    }
    if(this.buttons[4].state===true){
      menuOn = 27;
    }
  }
}


class ShopMenu3 extends Menu{ //DECOR MAIN MENU
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow","back"));
    this.buttons.push(new Button(width*0.2,height*0.85,40,40,"teal",buttonImages[0]));
    this.buttons.push(new Button(width*0.5,height*0.85,40,40,"purple",buttonImages[0]));
    this.buttons.push(new Button(width*0.8,height*0.85,40,40,"blue",buttonImages[0]));
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

class ShopMenu4 extends Menu{ //BACKGROUND MAIN MENU
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow","back"));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"pink",buttonImages[0]));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"coral",buttonImages[0]));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 1;
    }
    if(this.buttons[2].state===true){
      menuOn = 18;
    }
    if(this.buttons[3].state===true){
      menuOn = 19;
    }
  }
  
}

class ShopMenu5 extends Menu{ //BACKGROUND MAIN MENU
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow","back"));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"teal",buttonImages[0]));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"blue",buttonImages[0]));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 1;
    }
    if(this.buttons[2].state===true){
      menuOn = 24;
    }
    if(this.buttons[3].state===true){
      menuOn = 25;
    }
  }
}

class ShopMenu6 extends Menu{ //types of fish
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x")); //exit
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow","back")); //back
    this.buttons.push(new Button(width*0.2,height*0.85,40,40,"black",buttonImages[0])); //tiny
    this.buttons.push(new Button(width*0.5,height*0.85,40,40,"white",buttonImages[0])); //normal
    this.buttons.push(new Button(width*0.8,height*0.85,40,40,"gray",buttonImages[0])); //long
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
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow","back"));
    this.buttons.push(new Button(width*0.2,height*0.85,40,40,"orange",buttonImages[0]));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"orange",buttonImages[0]));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"orange",buttonImages[0]));
    this.buttons.push(new Button(width*0.8,height*0.85,40,40,"orange",buttonImages[0]));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 6;
    }
    if(this.buttons[2].state===true){
      previewMode = true;
      previewTest.push(new Preview(tinyFishO));
    }
  }
}

class ShopMenu8 extends Menu{ //normal fish colors
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow","back"));
    this.buttons.push(new Button(width*0.2,height*0.85,40,40,"purple",buttonImages[0]));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"purple",buttonImages[0]));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"purple",buttonImages[0]));
    this.buttons.push(new Button(width*0.8,height*0.85,40,40,"purple",buttonImages[0]));
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
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow","back"));
    this.buttons.push(new Button(width*0.2,height*0.85,40,40,"pink",buttonImages[0]));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"pink",buttonImages[0]));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"pink",buttonImages[0]));
    this.buttons.push(new Button(width*0.8,height*0.85,40,40,"pink",buttonImages[0]));
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
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow","back"));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"pink",buttonImages[0]));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"pink",buttonImages[0]));
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
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow","back"));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"yellow",buttonImages[0]));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"yellow",buttonImages[0]));
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
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow","back"));
    this.buttons.push(new Button(width*0.2,height*0.85,40,40,"blue",buttonImages[0]));
    this.buttons.push(new Button(width*0.35,height*0.85,40,40,"cyan",buttonImages[0]));
    this.buttons.push(new Button(width*0.5,height*0.85,40,40,"blue",buttonImages[0]));
    this.buttons.push(new Button(width*0.65,height*0.85,40,40,"cyan",buttonImages[0]));
    this.buttons.push(new Button(width*0.8,height*0.85,40,40,"blue",buttonImages[0]));
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
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow","back"));
    this.buttons.push(new Button(width*0.12,height*0.85,40,40,"blue",buttonImages[0]));
    this.buttons.push(new Button(width*0.28,height*0.85,40,40,"blue",buttonImages[0]));
    this.buttons.push(new Button(width*0.44,height*0.85,40,40,"blue",buttonImages[0]));
    this.buttons.push(new Button(width*0.60,height*0.85,40,40,"blue",buttonImages[0]));
    this.buttons.push(new Button(width*0.76,height*0.85,40,40,"blue",buttonImages[0]));
    this.buttons.push(new Button(width*0.92,height*0.85,40,40,"blue",buttonImages[0]));
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
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow","back"));
    this.buttons.push(new Button(width*0.12,height*0.85,40,40,"pink",buttonImages[0]));
    this.buttons.push(new Button(width*0.28,height*0.85,40,40,"pink",buttonImages[0]));
    this.buttons.push(new Button(width*0.44,height*0.85,40,40,"pink",buttonImages[0]));
    this.buttons.push(new Button(width*0.60,height*0.85,40,40,"pink",buttonImages[0]));
    this.buttons.push(new Button(width*0.76,height*0.85,40,40,"pink",buttonImages[0]));
    this.buttons.push(new Button(width*0.92,height*0.85,40,40,"pink",buttonImages[0]));
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
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow","back"));
    this.buttons.push(new Button(width*0.12,height*0.85,40,40,"purple",buttonImages[0]));
    this.buttons.push(new Button(width*0.28,height*0.85,40,40,"purple",buttonImages[0]));
    this.buttons.push(new Button(width*0.44,height*0.85,40,40,"purple",buttonImages[0]));
    this.buttons.push(new Button(width*0.60,height*0.85,40,40,"purple",buttonImages[0]));
    this.buttons.push(new Button(width*0.76,height*0.85,40,40,"purple",buttonImages[0]));
    this.buttons.push(new Button(width*0.92,height*0.85,40,40,"purple",buttonImages[0]));
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
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow","back"));
    this.buttons.push(new Button(width*0.12,height*0.85,40,40,"orange",buttonImages[0]));
    this.buttons.push(new Button(width*0.28,height*0.85,40,40,"orange",buttonImages[0]));
    this.buttons.push(new Button(width*0.44,height*0.85,40,40,"orange",buttonImages[0]));
    this.buttons.push(new Button(width*0.60,height*0.85,40,40,"orange",buttonImages[0]));
    this.buttons.push(new Button(width*0.76,height*0.85,40,40,"orange",buttonImages[0]));
    this.buttons.push(new Button(width*0.92,height*0.85,40,40,"orange",buttonImages[0]));
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
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow","back"));
    this.buttons.push(new Button(width*0.12,height*0.85,40,40,"red",buttonImages[0]));
    this.buttons.push(new Button(width*0.28,height*0.85,40,40,"red",buttonImages[0]));
    this.buttons.push(new Button(width*0.44,height*0.85,40,40,"red",buttonImages[0]));
    this.buttons.push(new Button(width*0.60,height*0.85,40,40,"red",buttonImages[0]));
    this.buttons.push(new Button(width*0.76,height*0.85,40,40,"red",buttonImages[0]));
    this.buttons.push(new Button(width*0.92,height*0.85,40,40,"red",buttonImages[0]));
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

class ShopMenu18 extends Menu{ //coral options
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow","back"));
    this.buttons.push(new Button(width*0.2,height*0.85,40,40,"orange",buttonImages[0]));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"yellow",buttonImages[0]));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"purple",buttonImages[0]));
    this.buttons.push(new Button(width*0.8,height*0.85,40,40,"green",buttonImages[0]));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 4;
    }
    if(this.buttons[2].state===true){
      menuOn = 20;
    }
    if(this.buttons[3].state===true){
      menuOn = 21;
    }
    if(this.buttons[4].state===true){
      menuOn = 22;
    }
    if(this.buttons[5].state===true){
      menuOn = 23;
    }
  }
}

class ShopMenu19 extends Menu{ //seaweed
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow","back"));
    this.buttons.push(new Button(width*0.2,height*0.85,40,40,"red",buttonImages[0]));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"red",buttonImages[0]));
    this.buttons.push(new Button(width*0.5,height*0.85,40,40,"red",buttonImages[0]));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"red",buttonImages[0]));
    this.buttons.push(new Button(width*0.8,height*0.85,40,40,"red",buttonImages[0]));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 4;
    }
  }
}

class ShopMenu20 extends Menu{ //coral 1
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow","back"));
    this.buttons.push(new Button(width*0.2,height*0.85,40,40,"orange",buttonImages[0]));
    this.buttons.push(new Button(width*0.3,height*0.85,40,40,"orange",buttonImages[0]));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"orange",buttonImages[0]));
    this.buttons.push(new Button(width*0.5,height*0.85,40,40,"orange",buttonImages[0]));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"orange",buttonImages[0]));
    this.buttons.push(new Button(width*0.7,height*0.85,40,40,"orange",buttonImages[0]));
    this.buttons.push(new Button(width*0.8,height*0.85,40,40,"orange",buttonImages[0]));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 18;
    }
  }
}

class ShopMenu21 extends Menu{ //coral 2
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow","back"));
    this.buttons.push(new Button(width*0.2,height*0.85,40,40,"green",buttonImages[0]));
    this.buttons.push(new Button(width*0.3,height*0.85,40,40,"green",buttonImages[0]));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"green",buttonImages[0]));
    this.buttons.push(new Button(width*0.5,height*0.85,40,40,"green",buttonImages[0]));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"green",buttonImages[0]));
    this.buttons.push(new Button(width*0.7,height*0.85,40,40,"green",buttonImages[0]));
    this.buttons.push(new Button(width*0.8,height*0.85,40,40,"green",buttonImages[0]));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 18;
    }
  }
}

class ShopMenu22 extends Menu{ //coral 3
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow","back"));
    this.buttons.push(new Button(width*0.2,height*0.85,40,40,"pink",buttonImages[0]));
    this.buttons.push(new Button(width*0.3,height*0.85,40,40,"pink",buttonImages[0]));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"pink",buttonImages[0]));
    this.buttons.push(new Button(width*0.5,height*0.85,40,40,"pink",buttonImages[0]));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"pink",buttonImages[0]));
    this.buttons.push(new Button(width*0.7,height*0.85,40,40,"pink",buttonImages[0]));
    this.buttons.push(new Button(width*0.8,height*0.85,40,40,"pink",buttonImages[0]));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 18;
    }
  }
}

class ShopMenu23 extends Menu{ //coral 4
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow","back"));
    this.buttons.push(new Button(width*0.2,height*0.85,40,40,"red",buttonImages[0]));
    this.buttons.push(new Button(width*0.3,height*0.85,40,40,"red",buttonImages[0]));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"red",buttonImages[0]));
    this.buttons.push(new Button(width*0.5,height*0.85,40,40,"red",buttonImages[0]));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"red",buttonImages[0]));
    this.buttons.push(new Button(width*0.7,height*0.85,40,40,"red",buttonImages[0]));
    this.buttons.push(new Button(width*0.8,height*0.85,40,40,"red",buttonImages[0]));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 18;
    }
  }
}

class ShopMenu24 extends Menu{ //water colors
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow","back"));
    this.buttons.push(new Button(width*0.2,height*0.85,40,40,"red",buttonImages[0]));
    this.buttons.push(new Button(width*0.3,height*0.85,40,40,"red",buttonImages[0]));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"red",buttonImages[0]));
    this.buttons.push(new Button(width*0.5,height*0.85,40,40,"red",buttonImages[0]));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"red",buttonImages[0]));
    this.buttons.push(new Button(width*0.7,height*0.85,40,40,"red",buttonImages[0]));
    this.buttons.push(new Button(width*0.8,height*0.85,40,40,"red",buttonImages[0]));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 5;
    }
  }
}

class ShopMenu25 extends Menu{ //ground types
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow","back"));
    this.buttons.push(new Button(width*0.2,height*0.85,40,40,"red",buttonImages[0]));
    this.buttons.push(new Button(width*0.3,height*0.85,40,40,"red",buttonImages[0]));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"red",buttonImages[0]));
    this.buttons.push(new Button(width*0.5,height*0.85,40,40,"red",buttonImages[0]));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"red",buttonImages[0]));
    this.buttons.push(new Button(width*0.7,height*0.85,40,40,"red",buttonImages[0]));
    this.buttons.push(new Button(width*0.8,height*0.85,40,40,"red",buttonImages[0]));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 5;
    }
  }
}

class ShopMenu26 extends Menu{ //sharks
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow","back"));
    this.buttons.push(new Button(width*0.2,height*0.85,40,40,"teal",buttonImages[0]));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"blue",buttonImages[0]));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"blue",buttonImages[0]));
    this.buttons.push(new Button(width*0.8,height*0.85,40,40,"blue",buttonImages[0]));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 2;
    }
  }
}

class ShopMenu27 extends Menu{ //other
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow","back"));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"purple",buttonImages[0]));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"purple",buttonImages[0]));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 2;
    }
    if(this.buttons[2].state===true){
      menuOn = 28;
    }
    if(this.buttons[3].state===true){
      menuOn = 29;
    }
  }
}

class ShopMenu28 extends Menu{ //other
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow","back"));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"blue",buttonImages[0]));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"blue",buttonImages[0]));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 27;
    }
  }
}

class ShopMenu29 extends Menu{ //other
  constructor(){
    super();
    this.buttons.push(new Button(width*0.02,height*0.81,10,10,"red","x"));
    this.buttons.push(new Button(width*0.03,height*0.81,10,10,"yellow","back"));
    this.buttons.push(new Button(width*0.4,height*0.85,40,40,"yellow",buttonImages[0]));
    this.buttons.push(new Button(width*0.6,height*0.85,40,40,"yellow",buttonImages[0]));
  }
  update(){
    if(this.buttons[0].state === true){
      menuOn = 0;
    }
    if(this.buttons[1].state===true){
      menuOn = 27;
    }
  }
}
