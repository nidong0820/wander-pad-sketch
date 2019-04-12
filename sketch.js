let x = 0;
let y = 0;
let easing = 0.1;



function setup() {
    createCanvas(windowWidth, windowHeight);
    smooth();
    frameRate(60);
    noStroke();
    }

function draw() {

  colorMode(RGB, 100);
    fill(255, 10);
    rect(0, 0, width, height);

        
    if (mouseIsPressed) {
        fill(65);
        textSize(70);
        textAlign(CENTER, CENTER);
        // text('Ready',windowWidth/2, windowHeight/3);
        // setTimeout( function() {
        fill(255, 10);
            rect(0, 0, width, height);
            fill(65);
            text('Adjust your breathing',windowWidth/2, windowHeight/3);
        // }, 5000);

  colorMode(HSB);
        x += (mouseX - x) * easing;
        y += (mouseY - y) * easing;
        fill((frameCount/2)%360, 100, 100);
        ellipse(x,y, 300, 300);
        noStroke();
        }
}

