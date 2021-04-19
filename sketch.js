var hr,min,sec;
var hourangle,minangle,secangle;

function setup() {
  createCanvas(400,400);
  //using angle in degrees
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  translate(200,200)
  rotate(-90);
  //calculating time using predefined functions from p5 js
  hr=hour();
  min=minute();
  sec=second();
  //creating rotations
  secangle=map(sec,0,60,0,360)
  minangle=map(min,0,60,0,360)
  hourangle=map(hr%12,0,12,0,360);
  //drawing second hand
  push();
  rotate(secangle);
  stroke(255,0,0)
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  push();
  rotate(minangle);
  stroke(0,255,0)
  strokeWeight(7);
  line(0,0,75,0);
  pop();
  push();
  rotate(hourangle);
  stroke(0,0,255)
  strokeWeight(7);
  line(0,0,50,0);
  pop();
  stroke(255,0,255);
  strokeWeight(10);
  noFill();
  arc(0,0,300,300,0,secangle);
  stroke(0,255,0); 
  arc(0,0,260,260,0,minangle);
  stroke(0,0,255); 
  arc(0,0,260,260,0,hourangle);
}