function setup() {
    createCanvas(700, 1100);
}

function preload() {
    black = loadImage("black.jpg");
    singingjay = loadImage("singingjay.jpg");
    pinacolada = loadImage("pinacolada.jpg");
}

function draw() {
    background(220);
    
    image(black, 0, 0, width, height);
    if (mouseY > height / 2) {
    image(singingjay, 0, 550, 700, 550);
    }
    else {
    image(pinacolada, 0, 0, 700, 550);
    }
    
    var words = "dO you liKE PInA CoLADas";
    textSize(55);
    fill("black");
    textFont("Impact");
    text(words, 65, 80);
    
}