let bgColor;

function setup() {
  createCanvas(400, 400);
  bgColor = color('#FFE5FF'); 
}

function draw() {
  background(bgColor);
  
  noStroke();
  fill('#191919');
  quad(100, 350, 100, 160, 300,160,300, 350);
  
  noStroke();
  fill('#003300');
  ellipse(100,300,100,180);
  ellipse(300,300,100,180);
  
  noStroke();
  fill('#006000');
  quad(100, 400, 100, 210, 300,210,300, 400);
  
  noStroke();
  fill('#FFE5E5');
  ellipse(80,380,80,40);
  ellipse(320,380,80,40);
  
  triangle(150,210,250,210,200,280);
  ellipse(200,120,220,250);
  
  noStroke();
  fill('#000000');
  ellipse(200,300,20,20);
  ellipse(200,340,20,20);
  ellipse(200,380,20,20);
  
  noStroke();
  fill('#202020');
  ellipse(140,115,80,50);
  ellipse(260,115,80,50);
  
  noStroke();
  fill('#FFFFFF');
  ellipse(140,120,80,45);
  ellipse(260,120,80,45);
  
  noStroke();
  fill('#191919');
  ellipse(150,120,50,40);
  ellipse(250,120,50,40);
  
  noStroke();
  fill('#606060');
  ellipse(150,120,10,10);
  ellipse(250,120,10,10);
  
  noStroke();
  fill('#FFCCCC');
  triangle(200,100,230,170,200,150);
  
  noStroke();
  fill('#FF0080');
  ellipse(180,200,60,30);
  ellipse(220,200,60,30);  
  ellipse(200,205,80,20);
  
  stroke('#C00060');
  strokeWeight(2);
  line(150, 200, 250, 200);
  
  noStroke();
  fill('#191919');
  ellipse(260,205,5,5);
  
  noStroke();
  fill('#FFE5E5');
  ellipse(80,135,45,80);
  ellipse(320,135,45,80);
  
  noStroke();
  fill('#191919');
  rect(80, 80, 30, 250);
  rect(290, 80, 30, 250);
  
  noStroke();
  fill('#191919');
  arc(100, 0, 200, 170, radians(0), radians(90));
  arc(300, 0, 200, 170, radians(90), radians(0));
  circle(100,20,40);
  circle(300,20,40);
  rect(80,20,20,80);
  rect(300,20,20,80);
  
  let leftTopX = 73;
  let leftTopY = 170;
  let rightTopX = 327;
  let rightTopY = 170;

  let angle = map(mouseX, 0, width, -PI / 12, PI / 12);
  let length = 50;
  
  let leftBottomX = leftTopX + sin(angle) * length;
  let leftBottomY = leftTopY + cos(angle) * length;

  let rightBottomX = rightTopX - sin(angle) * length;
  let rightBottomY = rightTopY + cos(angle) * length;
  
  stroke('#808080');
  strokeWeight(15);
  line(leftTopX, leftTopY, leftBottomX, leftBottomY);
  line(rightTopX, rightTopY, rightBottomX, rightBottomY);
  noStroke();
}

function keyPressed() {
  if (keyCode === ENTER) {
    bgColor = color(random(255), random(255), random(255));
  }

  if (key === 's' || key === 'S') {
    saveGif('mySketch', 5);
  }
}