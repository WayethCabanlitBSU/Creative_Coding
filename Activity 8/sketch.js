let song;
let fft;
let button;
let angle = 0;

function preload() {
    song = loadSound('lukrembo.mp3'); 
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100);
    
    fft = new p5.FFT();
    
    button = createButton('Play');
    button.mousePressed(togglePlay);
    button.position(10, 10);
}

function draw() {
    background(0);
    
    let spectrum = fft.analyze();
    noStroke();
    
    translate(width / 2, height / 2);
    
    for (let i = 0; i < spectrum.length; i++) {
        let amp = spectrum[i];
        let r = map(amp, 0, 256, 10, 400); // Map amplitude to radius
        let col = map(amp, 0, 256, 0, 360); // Map amplitude to color
        
        let x = r * cos(angle + i);
        let y = r * sin(angle + i);
        
        fill(col, 100, 100);
        ellipse(x, y, r / 10, r / 10); // Create a circle
    }
    
    angle += 0.01; // Change angle to animate the shapes
}

function togglePlay() {
    if (song.isPlaying()) {
        song.pause();
        button.html('Play');
    } else {
        song.play();
        button.html('Pause');
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
