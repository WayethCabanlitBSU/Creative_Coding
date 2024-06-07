let table;
let values = [];
let labels = [];

function preload() {
  // Load the CSV file
  table = loadTable('data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800, 600);
  loadData();
  drawBarGraph();
}

function loadData() {
  // Load data from the CSV file into arrays
  for (let i = 0; i < table.getRowCount(); i++) {
    labels.push(table.getString(i, 'Label'));
    values.push(table.getNum(i, 'Value'));
  }
}

function drawBarGraph() {
  background(255);

  // Draw the title
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(0);
  text('Nationalities in BSU', width / 2, 60);

  let barWidth = width / values.length;
  
  for (let i = 0; i < values.length; i++) {
    // Set a random color for each bar
    fill(random(255), random(255), random(255));
    let barHeight = map(values[i], 0, max(values), 0, height - 150);
    rect(i * barWidth, height - barHeight - 80, barWidth - 10, barHeight);
    
    // Draw value numbers
    fill(0);
    textSize(16);
    textAlign(CENTER, BOTTOM);
    text(values[i], i * barWidth + barWidth / 2, height - barHeight - 85);
    
    // Draw labels
    textAlign(CENTER, TOP);
    text(labels[i], i * barWidth + barWidth / 2, height - 70);
  }
}
