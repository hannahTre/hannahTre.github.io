// Colors Demo
// Hannah Tremaine
// 10/25/2023

let rectWidth = 50;
let rectHeight = 10;
let colors = ["#0B0033","#370031","#832232","#CE8964","#F7E8B7"]; // "#A514CC" //RRGGBB base16 0123456789ABCDEF


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  //RBG
  drawRGB(width*0.1);
  //HSB
  drawHSB(width*0.4);
  //CUSTOM
  drawCustom(width*0.7);
}

function drawCustom(x){
  colorMode(RGB);
  let index = 0;
  for(let y = 0;y<height;y+=rectHeight){
    //option 1 cycle through pallet
    //fill(colors[index%5]);

    //option 2 random pallete selection
    fill(colors[Math.floor(random(colors.length))]);
    rect(x,y,rectWidth,rectHeight);
    index++; //part of option 1
  }
}

function drawHSB(x){
  colorMode(HSB); //0-360 (360 "degrees")
  for(let y = 0;y<height;y+=rectHeight){
    fill(y/3%360,360,360); //y%360 eill alwys result in 0-359
    rect(x,y,rectWidth,rectHeight);
  }

}

function drawRGB(x){
  colorMode(RGB); //0-255
  for(let y=0;y<height;y+=rectHeight){
    fill(random(255),random(255),random(255));
    rect(x,y,rectWidth,rectHeight);
  }
}