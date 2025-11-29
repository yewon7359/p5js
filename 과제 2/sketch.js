let d=40
let lineColor;
let 마지막색상변경시점 = 0; 
let 직선색바뀜시간간격 = 200; 
let 별의회전각도 = 0;

function setup() {
  createCanvas(400, 400);
  colorMode(RGB);
  lineColor = color(random(255),random(255), random(255) )
  
}

function draw() {
  background(255);
  
  let 현시점 = millis();
  if( 현시점 - 마지막색상변경시점 > 직선색바뀜시간간격) {
    lineColor = color(random(255),random(255), random(255) );
    마지막색상변경시점 = 현시점 ;
  }

// 상단원
  noStroke();
  fill('#FFCCE5');
  circle(40, 40, d);
  fill('#FFC0E0');
  circle(80, 40, d);
  fill('#FF99CC');
  circle(120, 40, d);
  fill('#FF80C0');
  circle(160, 40, d);
  fill('#FF66B2');
  circle(200, 40, d);
  fill('#FF40A0');
  circle(240, 40, d);
  fill('#FF3399');
  circle(280, 40, d);
  fill('#FF0080');
  circle(320, 40, d);
  fill('#C00060');
  circle(360, 40, d);
  


//원오른쪽원

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
  


//하단원
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


//왼쪽원
  fill('#FF3399');
  circle(40, 320, d);
  fill('#FF40A0');
  circle(40, 280, d);
  fill('#FF66B2')
  circle(40, 240, d);
  fill('#FF66B2')
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

  
  
//대각선


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
  
//정사각형 2

  stroke(255, 120, 90);
  strokeWeight(3);
  fill(255,255,255);

  square(100, 100, 200);


// 원 두개

  stroke('#FFCCE5');
  strokeWeight(10);
  noFill();

  circle(200, 200, 190);
  
  stroke('	#FFC0FF');
  strokeWeight(10);
  noFill();
  circle(200, 200, 120);



  stroke(180, 140, 255);
  strokeWeight(10);
  noFill();

  
  
// 정삼각형 1
   push();
  translate(200,200);
  rotate(별의회전각도);
  translate(-200,-200);
  
  
  triangle(200, 110, 290, 250, 110, 250);

// 정삼각형2

  triangle(200, 290, 290, 150, 110, 150);
  
  pop();
  
  별의회전각도+=0.01;

     d-=0.7;
  if(d<0){
    d=40;
  }
}


function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 5);
  }

}