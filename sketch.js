var ball;
var database;
var position;
function setup() {
    database = firebase.database();
    createCanvas(500, 500);
    ball = createSprite(250, 250, 20, 20);
    ball.shapeColor = "red";

    //read from database
    database.ref("ball/position").on("value", readposition, showerr);

}

function draw() {
    background("white");
    if (keyDown(LEFT_ARROW)) {
        writePosition(-1, 0);
    }
    else if (keyDown(RIGHT_ARROW)) {
        writePosition(1, 0);
    }
    else if (keyDown(UP_ARROW)) {
        writePosition(0, -1);
    }
    else if (keyDown(DOWN_ARROW)) {
        writePosition(0, +1);
    }
    drawSprites();
}
//create a write position function
function writePosition(x, y) {
    database.ref("ball/position").set({
        'x': position.x+x,
        'y': position.y+y
    })
}

//create a readposition function with parameter data
function readposition(data) {
    position = data.val();
    ball.x = position.x
    ball.y = position.y
}

//function for show error and log a error mesg
function showerr() {
    console.log("error")
}