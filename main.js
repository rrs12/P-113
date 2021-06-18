function preload() {

}

function setup() {
    canvas = createCanvas(640, 480)
    canvas.position(110, 250)
    video = createCapture(VIDEO)
    video.hide()
}

function draw() {

    image(video, 100, 100, 420, 310);
    stroke(0, 128, 128)
    fill(0, 128, 128)
    rect(520, 100, 10, 310)
    rect(100, 100, 10, 310)
    rect(100, 400, 430, 10)
    rect(100, 100, 430, 10)
    stroke(128, 0, 128)
    fill(128, 0, 128)
    circle(100, 100, 50, 50)
    circle(100, 410, 50, 50)
    circle(525, 100, 50, 50)
    circle(525, 410, 50, 50)
    
}

function take_snapshot() {
    save('picture.png');
}