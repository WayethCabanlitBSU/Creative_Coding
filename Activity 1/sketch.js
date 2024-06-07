function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //ray
  fill(100,120,180, 60);
  stroke(240,240,240,20);
  strokeWeight(5);
  triangle(200,200,0,400,400,400);

  //UFO
  fill(20);
  noStroke();
  ellipse(width/2, height/2, 350, 100);
  ellipse(width/2, height/2.5,150,150);


  //Alien
  fill(100,220,50);
  stroke(80,100,170);
  strokeWeight(5);
  ellipse(width/2, height/1.3, 200,50);
  ellipse(width/2, height/1.0, 200,50);
  ellipse(width/2, height/1.4, 10,150);
  ellipse(width/2, height/1.2, 100,150);
  ellipse(width/2, height/1.3, 150,100);
  

  //facial features
  fill(0);
  stroke(0);
  strokeWeight(2);
  ellipse(width / 2, height/1.2, 30);
  ellipse(width/2.25, height/1.4, 30,40);
  ellipse(width/1.8, height/1.4, 30, 40);
  fill(255,255,255)
   ellipse(width/2.25, height/1.37, 20,20);
  ellipse(width/1.8, height/1.37, 20, 20);
}