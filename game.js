drawGameWindow(500, 900, "white", true);
document.addEventListener("keydown", controller.keyDownHandler, false);
document.addEventListener("keyup", controller.keyUpHandler, false);
physics.setVelocity(5);

var lastRender = 0;
function loop(timestamp){
    var progress = timestamp - lastRender;
    drawSprite("Assets/player.png", position.getX(), position.getY(), 36, 36);
    lastRender = timestamp;
    window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)