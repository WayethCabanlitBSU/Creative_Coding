let img;



function preload(){

  img=loadImage('Copium.png')

}



function setup() {

  createCanvas(700, 700);

  background(190,555,250);

  

  img.resize(200,200);

  let cnv7 = createGraphics(200,200);

  //cnv7.circle(100,100,190);

  cnv7.ellipse(100,100,190);

  // ctx7 = cnv7.canvas.getContext("2d");

  // ctx7.clip();

  // We can skip the above and achieve the clip like this:

  cnv7.canvas.getContext("2d").clip();

  cnv7.image(img,0,0);

  image(cnv7,350,225);
  
  img.resize(200,200);

  let cnv5 = createGraphics(200,200);

  //cnv5.circle(100,100,190);

  cnv5.triangle(0,0,100,200,200,0);

  img.mask(cnv5);

  image(img,350,450);
}