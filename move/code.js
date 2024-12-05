let canvas_element = document.getElementById("myc");
let toolbox = canvas_element.getContext("2d");
let x = 180;
let y = 10;
let g = 1;
let dy = 0;
let dx = 10;
let isLeft = false;
let isRight = false;
let isFlying = false;
let bullet_x = x + (20 - 4)/2;
let bullet_y = y + (20 - 4)/2;


document.body.addEventListener("keydown", onkeydown)
document.body.addEventListener("keyup", onkeyup)
setInterval(drawFrame, 20);

function onkeydown (e) {
        if (e.key === " "){
            dy += -10;
        } else if (e.key === "d"){
            isRight = true;
        } else if (e.key === "a") {
            isLeft = true;
        } else if (e.key === "f") {
            isFlying = true;
        }
}

function onkeyup (e) {
    if (e.key === " "){
        
    } else if (e.key === "d"){
        isRight = false;
    } else if (e.key === "a") {
        isLeft = false;
    }
}
function drawBackground () {
       toolbox.fillStyle = "#000000"
       toolbox.fillRect(0, 0, 400, 400);
}
function drawPlayer (x,y) {
    toolbox.fillStyle = "#FF0000"
    toolbox.fillRect(x, y, 20, 20);
}
function drawBullet (x,y) {
    toolbox.fillStyle = "#FFFF00"
    toolbox.fillRect(x, y, 4, 4);
}
function updatePlayerPostion () {
    dy += g;
    y += dy;
    if (y > 380 ){
        y = 380;
        dy = 0;
    }
    if (isRight) {
        x += dx;
    } else if (isLeft) {
        x -= dx;
    } 
    if (x < -20){
        x = 400;
    }
     if  (x > 400){
        x = -20;
    }  

}
function updateBulletposition () {
        if (isFlying) {
           bullet_x += 20;
        } else {
       bullet_x = x + (20 - 4)/2;
       bullet_y = y + (20 - 4)/2;
        }
      
        if (bullet_x > 400) {
        isFlying = false;
    }

}
function drawFrame () {
    updatePlayerPostion();
    updateBulletposition();
    drawBackground ();
    drawPlayer (x, y);
    drawBullet (bullet_x, bullet_y);
}