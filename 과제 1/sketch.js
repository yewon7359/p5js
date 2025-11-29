let d = 40; 
let lineColor;

function setup() {
  createCanvas(400, 400);
  lineColor = color(0);
}

function draw() {
  background(255);

// 상단원
  noStroke();
  fill('#FFCCE5');
  circle(40, 40, 40);
  fill('#FFC0E0');
  circle(80, 40, 40);
  fill('#FF99CC');
  circle(120, 40, 40);
  fill('#FF80C0');
  circle(160, 40, 40);
  fill('#FF66B2');
  circle(200, 40, 40);
  fill('#FF40A0');
  circle(240, 40, 40);
  fill('#FF3399');
  circle(280, 40, 40);
  fill('#FF0080');
  circle(320, 40, 40);
  fill('#C00060');
  circle(360, 40, 40);

// 오른쪽 원
  fill('#FF0080');
  circle(360, 80, d);
  fill('#FF0080');
  circle(360, 120, d);
  fill('#FF3399');
  circle(360, 160, d);
  fill('#FF40A0');
  circle(360, 200, d);
  fill('#FF66B2');
  circle(360, 240, d);
  fill('#FF80C0');
  circle(360, 280, d);
  fill('#FF99CC');
  circle(360, 320, d);
  fill('#FFC0E0');
  circle(360, 360, d);

// 하단원
  fill('#FFCCE5');
  circle(320, 360, d);
  fill('#FF99CC');
  circle(280, 360, d);
  fill('#FF80C0');
  circle(240, 360, d);
  fill('#FF66B2');
  circle(200, 360, d);
  fill('#FF40A0');
  circle(160, 360, d);
  fill('#FF3399');
  circle(120, 360, d);
  fill('#FF0080');
  circle(80, 360, d);
  fill('#C00060');
  circle(40, 360, d);

// 왼쪽원
  fill('#FF3399');
  circle(40, 320, d);
  fill('#FF40A0');
  circle(40, 280, d);
  fill('#FF66B2');
  circle(40, 240, d);
  fill('#FF66B2');
  circle(40, 200, d);
  fill('#FF80C0');
  circle(40, 160, d);
  fill('#FF99CC');
  circle(40, 120, d);
  fill('#FFC0E0');
  circle(40, 80, d);

// 정사각형1
  stroke(255, 120, 90);
  strokeWeight(3);
  noFill();
  square(60, 60, 280);

// 대각선
  stroke(lineColor);
  strokeWeight(3);
  line(60, 180, 220, 340);
  line(60, 120, 280, 340);
  line(60, 60, 340, 340);
  line(60, 240, 160, 340);
  line(60, 300, 100, 340);
  line(120, 60, 340, 280);
  line(180, 60, 340, 220);
  line(240, 60, 340, 160);
  line(300, 60, 340, 100);

// 정사각형2
  stroke(255, 120, 90);
  strokeWeight(3);
  fill(255);
  square(100, 100, 200);

// 원 두개
  stroke('#FFCCE5');
  strokeWeight(10);
  noFill();
  circle(200, 200, 190);

  stroke('#FFC0FF');
  strokeWeight(10);
  noFill();
  circle(200, 200, 120);

  stroke(180, 140, 255);
  strokeWeight(10);
  noFill();

// 삼각형
  triangle(200, 110, 290, 250, 110, 250);
  triangle(200, 290, 290, 150, 110, 150);
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}
