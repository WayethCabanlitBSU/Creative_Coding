let player;
let platforms = [];
let obstacles = [];
let gravity = 0.4;
let jump = -10;
let score = 0;
let gameOver = false;
let gameStarted = false;
let platformSpeed = 2.5;
let platformGap = 100; // Horizontal gap between platforms

function setup() {
  createCanvas(800, 600); // Set canvas size
  resetGame(); // Initialize the game state
}

function draw() {
  background(135, 206, 235); // Set background color

  if (!gameStarted) {
    showStartScreen(); // Display start screen if game hasn't started
  } else if (gameOver) {
    showGameOver(); // Display game over screen if game is over
  } else {
    player.update(); // Update player position and state
    player.show(); // Render the player

    // Update and show platforms
    for (let platform of platforms) {
      platform.update();
      platform.show();
      if (player.hits(platform) && player.vy > 0) {
        player.jump();
        score++;
      }
    }

    // Update and show obstacles
    for (let obstacle of obstacles) {
      obstacle.update();
      obstacle.show();
      if (player.hits(obstacle)) {
        gameOver = true;
      }
    }

    // Remove platforms that are out of the screen
    platforms = platforms.filter(p => p.y < height);

    // Add new platforms to maintain the number
    while (platforms.length < 30) {
      let lastPlatformY = platforms.length ? platforms[platforms.length - 1].y : height;
      let newPlatformY = lastPlatformY - platformGap;
      let newPlatform = new Platform(random(width - 120), newPlatformY, 120, 30); // Platform size
      platforms.push(newPlatform);

      if (platforms.length % 3 === 0) { // Create an obstacle every third platform
        obstacles.push(new Obstacle(random(width - 40), newPlatformY - 30, 40, 40));
      }
    }

    showScore(); // Display current score
  }
}

class Player {
  constructor() {
    this.x = width / 2;
    this.y = height - 40;
    this.w = 40;
    this.h = 40;
    this.vx = 0;
    this.vy = 0;
  }

  update() {
    this.vy += gravity; // Apply gravity to vertical velocity
    this.y += this.vy; // Update vertical position
    this.x += this.vx; // Update horizontal position

    // Prevent player from moving out of canvas horizontally
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.x + this.w > width) {
      this.x = width - this.w;
    }

    // End game if player falls below the canvas
    if (this.y > height) {
      gameOver = true;
    }
  }

  show() {
    fill(255); // Set player color
    rect(this.x, this.y, this.w, this.h); // Draw player as a rectangle
  }

  jump() {
    this.vy = jump; // Apply jump force
  }

  hits(platform) {
    // Check for collision with platform
    return (
      this.x < platform.x + platform.w &&
      this.x + this.w > platform.x &&
      this.y + this.h > platform.y &&
      this.y + this.h < platform.y + platform.h
    );
  }

  hits(obstacle) {
    // Check for collision with obstacle
    return (
      this.x < obstacle.x + obstacle.w &&
      this.x + this.w > obstacle.x &&
      this.y < obstacle.y + obstacle.h &&
      this.y + this.h > obstacle.y
    );
  }
}

class Platform {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  update() {
    this.y += platformSpeed; // Move platform downward
  }

  show() {
    fill(124, 252, 0); // Set platform color
    rect(this.x, this.y, this.w, this.h); // Draw platform as a rectangle
  }
}

class Obstacle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  update() {
    this.y += platformSpeed; // Move obstacle downward
  }

  show() {
    fill(255, 0, 0); // Set obstacle color
    // Draw obstacle as a triangle (spikes)
    triangle(this.x, this.y + this.h, this.x + this.w / 2, this.y, this.x + this.w, this.y + this.h);
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player.vx = -5; // Move player left
  } else if (keyCode === RIGHT_ARROW) {
    player.vx = 5; // Move player right
  } else if (gameOver && keyCode === ENTER) {
    resetGame(); // Reset game on Enter key if game over
  } else if (!gameStarted && keyCode === ENTER) {
    startGame(); // Start game on Enter key if not started
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    player.vx = 0; // Stop player horizontal movement
  }
}

function showScore() {
  fill(255); // Set text color
  textSize(24); // Set text size
  textAlign(RIGHT, TOP); // Align text to the top right
  text('Score: ' + score, width - 10, 10); // Display score
}

function showGameOver() {
  fill(255); // Set text color
  textSize(32); // Set text size for game over message
  textAlign(CENTER, CENTER); // Center align text
  text('Game Over', width / 2, height / 2 - 20); // Display game over message
  textSize(24); // Set text size for score
  text('Score: ' + score, width / 2, height / 2 + 20); // Display score
  textSize(16); // Set text size for restart instruction
  text('Press Enter to Restart', width / 2, height / 2 + 60); // Display restart instruction
}

function showStartScreen() {
  fill(255); // Set text color
  textSize(32); // Set text size for title
  textAlign(CENTER, CENTER); // Center align text
  text('Infinite Climbing Game', width / 2, height / 2 - 20); // Display game title
  textSize(24); // Set text size for start instruction
  text('Press Enter to Start', width / 2, height / 2 + 20); // Display start instruction
}

function startGame() {
  gameStarted = true; // Set game started flag to true
}

function resetGame() {
  player = new Player(); // Create a new player
  platforms = []; // Initialize platforms array
  obstacles = []; // Initialize obstacles array
  platforms.push(new Platform(width / 2 - 60, height - 20, 120, 30)); // Add starting platform

  // Add initial platforms and obstacles
  for (let i = 1; i <= 30; i++) {
    let platformY = height - i * platformGap;
    platforms.push(new Platform(random(width - 120), platformY, 120, 30)); // Platform size
    if (i % 3 === 0) { // Create an obstacle every third platform
      obstacles.push(new Obstacle(random(width - 40), platformY - 30, 40, 40));
    }
  }

  score = 0; // Reset score
  gameOver = false; // Reset game over flag
  gameStarted = false; // Reset game started flag
}
