function setup() {
    createCanvas(500,500)
}

//let xOffset = 0;
//let yOffset = 10000;

let time = 0;
function draw() {
    background(75);
    //fill(255, 0, 0);
    //let xPosition = map(noise((xOffset)), 0, 1, 0, width);
    //let yPosition = map(noise((yOffset)), 0, 1, 0, height);
    //xOffset += .01;
    //yOffset += .01;
    //ellipse(xPosition, yPosition , 10, 10 );

    noFill();
    drawSineWave(time);
    drawSineWave(time+1);
    drawSineWave(time+2);
    drawSineWave(time+3);
    drawSineWave(time+4);
    drawSineWave(time+5);
    drawSineWave(time+6, true);
    time += 0.0011;
}

function drawSineWave(time, fillBelow){
        beginShape();
        let xLineOffset = time;
        for (var x = 0; x < width; x++) {
            stroke(255);
            var y = map(noise(xLineOffset),0,1,0,height);
            vertex(x, y);
            xLineOffset += .001;
        };
        map(random(1),0,1,0,255)
        fill(200, 150);
        if (fillBelow) {
            vertex(width, height);
            vertex(0, height);
        }
        endShape(CLOSE);
    }

function get