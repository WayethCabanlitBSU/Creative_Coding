
var maxCol = 9;
var maxRow = 7;
var circleD = 90; 

function setup() {
  createCanvas(600, 400);
  noStroke()
  colorMode (HSB, 360, 100, 100);
  background (random(360), 100, 100);
  ellipseMode(CORNER);

var xSpacing = (width/maxCol); 
var ySpacing = (height/maxRow);  
translate(30, 20);
for (var x = 0; x < maxCol; x++) { 
for (var y = 0; y < maxRow; y++) { 

         if (x == 1) { 

            fill(random(360), 100, 100); 

          }

          else { 

             fill(random(360), 100, 100); 

         } 

ellipse(x*xSpacing, y*ySpacing, circleD, circleD); 
    }
}
}
