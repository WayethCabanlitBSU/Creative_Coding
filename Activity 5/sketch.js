
var font;



function preload() { 

font = loadFont('PermanentMarker-Regular.ttf'); }



 var points;

 function setup() { 

createCanvas(1000, 400); 

stroke(0); 

points = font.textToPoints('Bath spa University', 100, 200, 90, { sampleFactor: 0.15 });



background(575,123,563); 

for (var i = 0; i < points.length; i++) { 

    var p = points[i]; 

    rect(p.x, p.y, 9, 20); 

  } 

}