function setup() {
  createCanvas(600, 400, WEBGL);
}

function draw() {
  background(200);

  // mengatur sumber cahaya
  directionalLight(255, 255, 255, 0, 0, -1);

  // Penerapan rotasi
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  
  // membuat silinder
  fill(100, 150, 250);
  cylinder(50, 200);
}
