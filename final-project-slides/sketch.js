/*
    final project presentation slides
*/
var slide = 0;

var plane, building, desert;

function preload() {
    plane = loadImage("jet.png");
    building = loadImage("building.png");
    desert = loadImage("desert.png");
    dogfight = loadImage("jetaway.gif")
}

function setup() {
    createCanvas(800, 500);
    textSize(60);
    textFont('arial');
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
}

function draw() {
    background(220);
    
    if (slide == 0) {
        text(" Fighter Pilot Project Idea", width/2, height/2);
    } else if (slide == 1) {
        textSize(30);
        image(dogfight, 0, 0, 800, 500);
        text("Animation/Game", 200, 100);
    } else if (slide == 2) {
        image(desert, 0, 0);
        image(plane, 200, 100, 200, 200);
        image(building, 500, 200);
        text("theme: War", 200, 20);
    }
}

function mousePressed() {
    if (mouseX > width/2) {
        if (slide < 3) {
            slide++;
        }
    } else {
        if (slide > 0) {
            slide--;
        }
    }
}







