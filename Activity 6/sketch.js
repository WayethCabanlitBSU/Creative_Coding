let shapes = [];
let maxShapes = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(0);

  // Add a new shape at the mouse position
  let newShape = {
    x: mouseX,
    y: mouseY,
    size: random(10, 40),
    shapeType: floor(random(3)), // 0 for circle, 1 for square, 2 for triangle
    r: random(255),
    g: random(255),
    b: random(255)
  };
  shapes.push(newShape);

  // Remove the oldest shape if we have too many
  if (shapes.length > maxShapes) {
    shapes.shift();
  }

  // Draw all shapes in the trail
  for (let i = 0; i < shapes.length; i++) {
    let s = shapes[i];
    fill(s.r, s.g, s.b);

    if (s.shapeType === 0) {
      ellipse(s.x, s.y, s.size);
    } else if (s.shapeType === 1) {
      rect(s.x, s.y, s.size, s.size);
    } else if (s.shapeType === 2) {
      triangle(s.x, s.y - s.size / 2, s.x - s.size / 2, s.y + s.size / 2, s.x + s.size / 2, s.y + s.size / 2);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
