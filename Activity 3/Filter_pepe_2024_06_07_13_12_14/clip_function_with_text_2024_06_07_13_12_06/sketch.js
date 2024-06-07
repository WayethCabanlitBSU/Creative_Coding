//Variables declared by let are only available inside the block where they're defined. 

//clip - allows to hide all parts of the bottom
//
let img;

function preload(){
  img=loadImage("sunflower.jpg")
}

function setup() {
  createCanvas(700, 700);
  background(0,323,250);
  
  cnv3 = createGraphics(width, height);
  cnv3.fill(200,400,0);  
  cnv3.ellipse(200, 300, 200);
  cnv3.erase();
  cnv3.textSize(55);
  cnv3.text('Banana', 100, 320);
  cnv3.noErase();
  image(cnv3, 0, 0);
}


