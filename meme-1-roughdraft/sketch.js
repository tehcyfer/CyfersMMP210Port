var hulk_loki;
var hulk;
var imgX = 0;
var imgY = 0;
var b = 45;
var textX = 0;
var textY = 400;
 
function setup() {
	createCanvas(600, 550); 
}

function preload() {
    hulk = loadImage("hulk-smile-avengers-banner.jpg");
    hulk_loki = loadImage("avengers-loki-hulk-smash.jpg");
}

function draw() {
    background(b);
    image(hulk, imgX, imgY, width, height/2);  
    image(hulk_loki, imgX, height/2, width, height/2);
    fill("white");
    textSize(35);
    textFont("Arial");
    text("It Will Be Fun They Said", textX, textY -350);
    
}