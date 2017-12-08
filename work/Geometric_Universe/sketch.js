//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//06_Exercise02 - Geometric Universe

function setup() {
  createCanvas(1000, 500);
  strokeWeight(8);
  noFill();
  frameRate(7);
}

function draw() {
  background(50);
  //Create 100 rings using the for-loop
  for (var i = 0; i < 300; i++) {
    push(); //store the matrix before translate
    //Random position between the size of the canvas
    translate(random(width), random(height));
    //Random rotation
    rotate(random(2*PI));
    //Random scale
    scale(random(1.5), random(1.5));
    //Random stroke color
    stroke(random(255), random(255), random(255));
    ellipse(0, 0, 40, 40);
    pop(); //reset the matrix to original state
  }
}
