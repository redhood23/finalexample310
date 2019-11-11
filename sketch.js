
var xClicked = -1;
var yClicked = -1;






function setup() {
  createCanvas(650, 650);
  textAlign(CENTER);
}

function draw() {
  background(220);

    
    
    
    
    
    
  if (xClicked == -1 && yClicked == -1) { 
    background('red'); 
    textSize(40);
    text('A Traveling Ghost', width / 2, height / 2);
    textSize(20);
    strokeWeight(1);
    text('follow the black steps', width / 2, height / 2 + 30);
    drawGhostButton();
    
  } else if (GhostButtonPressed() == true) { // checking that this function returns true
    drawGhost();
    drawGhostButton();
    drawHouseButton();
//    text('WATERFALL', 350, 628);

  } else if (HouseButtonPressed()) { // more concise way of writing the condition (without "== true")
    drawHouse(); 				// note: these 'drawing' functions do not return anything
    drawGhostButton();  		//      ... they just execute commands.
    drawHouseButton();	//      i put those commands in separate functions
    drawGardenButton();			//      to reduce redundance and improve readability.

  } else if (gardenButtonPressed()) {
    drawFlowerGarden();
    drawGhostButton();
    drawHouseButton();
    drawGardenButton();
  }

  // the following lines are executed regardless of which if-branch gets executed
  strokeWeight(1);
  text('Press ENTER at any time to start over.', 175, 25);
}



function drawGhostButton() {
  stroke('black');
  strokeWeight(2);
  fill('black');
  rect(50, 600, 100, 40);
  fill('white');
  textSize(20);
  text('Ghost', 100, 628);
}

// When called, this function draws
// a button labeled "WATERFALL".
function drawHouseButton() {
  stroke('black');
  strokeWeight(2);
  fill('red');
  rect(275, 600, 100, 40);
  fill('white');
  textSize(25);
  text('House', 325, 628);
}

// When called, this function draws
// a button labeled "GARDEN".
function drawGardenButton() {
  stroke('black');
  strokeWeight(2);
  fill('grey');
  rect(500, 600, 100, 40);
  fill('white');
  textSize(20);
  text('GARDEN', 550, 628);
}


// If the ENTER key is pressed, the program 
// goes to the "no button pressed" state.
function keyPressed() {
  if (keyCode == ENTER) {
    xClicked = -1;
    yClicked = -1;
  }
}

// This function saves the location of the
// most recent mouse click.
function mouseClicked() {
  xClicked = mouseX;
  yClicked = mouseY;
}


// Returns true if most recent mouse click was on the bridge button,
// returns false otherwise.
function GhostButtonPressed() {
  if (xClicked > 50 && xClicked < 200 && yClicked > 600 && yClicked < 640) {
    return true;
  } else {
    return false;
  }
}

// Returns true if most recent mouse click was on the waterfall button,
// returns false otherwise.
function HouseButtonPressed() {
  if (xClicked > 275 && xClicked < 425 && yClicked > 600 && yClicked < 640) {
    return true;
  } else {
    return false;
  }
}

// Returns true if most recent mouse click was on the garden button,
// returns false otherwise.
function gardenButtonPressed() {
  if (xClicked > 500 && xClicked < 650 && yClicked > 600 && yClicked < 640) {
    return true;
  } else {
    return false;
  }
}


function drawGhost() {
    background(220);
	noStroke();
   
//Body//
	fill(255, 0, 0);
	ellipse(200, 150, 100, 100);
	rect(150, 150, 100, 75);
	triangle(150, 220, 150, 250, 170, 220);
	triangle(170, 220, 190, 250, 210, 220);
	triangle(200, 220, 220, 250, 240, 220);
	triangle(230, 220, 250, 250, 250, 220);
  
    //eye//
    fill('white');
	ellipse(200, 150, 50);
     fill('black');
	ellipse(200, 150, 20);
 
}


function drawHouse() {
 
}


function drawFlowerGarden() {

    
    
    
  background('grey');
  

  
  //tulip centers L to R
  fill(255, 153, 153, 155)
  noStroke();
//  
  arc(502, 397, 70, 70, 0, PI + QUARTER_PI);

 
  //flower stems L to R
  stroke('#86b300');
  strokeWeight(4);
  
  line(500, 440, 500, 600);

  //ground
  fill('#86b300');
  rect(0, 570, 700, 30);

  //leaves L to R
  fill('#86b300');
 
  ellipse(500, 475, 40, 10);

 
  //cloud
  fill('#F8F9F9');
  noStroke();
  ellipse(225, 50, 200, 40);

  fill('#F2F3F4');
  noStroke();
  ellipse(150, 65, 200, 40);

  fill('#F8F9F9');
  noStroke();
  ellipse(250, 75, 250, 40);

  fill('#F2F3F4');
  noStroke();
  ellipse(150, 100, 300, 45);

  fill('#F8F9F9');
  noStroke();
  ellipse(250, 125, 450, 40);

  
    
    //Body//
	fill(255, 0, 0);
	ellipse(200, 150, 100, 100);
	rect(150, 150, 100, 75);
	triangle(150, 220, 150, 250, 170, 220);
	triangle(170, 220, 190, 250, 210, 220);
	triangle(200, 220, 220, 250, 240, 220);
	triangle(230, 220, 250, 250, 250, 220);
  
    //eye//
    fill('white');
	ellipse(200, 150, 50);
     fill('black');
	ellipse(200, 150, 20);
 
    
    
    
    
    
}