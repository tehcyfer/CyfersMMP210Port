// Cloud Variables

var cloudOne = 200;
var cloudTwo = 150;
var cloudThree = 300;
var cloudFour = 100;

function setup() {
    createCanvas(500,500);
}

function draw() {
    background(0, 201, 255);
    fill('yellow');
    ellipse(250, 250, 200, 200);

	fill('white');
    ellipse(cloudOne, 100, 200, 50);
    ellipse(cloudTwo, 150, 200, 50);


    ellipse(cloudThree, 400, 200, 50);
    ellipse(cloudFour, 370, 200, 50);

    cloudOne++;
    cloudTwo++;
    cloudThree++;
    cloudFour++;
    
	if (cloudOne > 500) { 
		cloudOne = 0;
	}
	
		if (cloudTwo > 500) { 
		cloudTwo = 0;
	}
	
		if (cloudThree > 500) { 
		cloudThree = 0;
	}
	
		if (cloudFour > 500) { 
		cloudFour = 0;
	}


}