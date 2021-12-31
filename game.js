render.drawGameWindow(600, 500, "white", true);
document.addEventListener("keydown", controller.keyDownHandler, false);
document.addEventListener("keyup", controller.keyUpHandler, false);
physics.setVelocity(5);
physics.setPlayerSize(36);

function GameObjects(){
    let block = render.drawRect(20, 50, 100, 50, "red", false);
    let player = render.drawSprite("Assets/player.png", position.getX(), position.getY(), physics.getPlayerSize(), physics.getPlayerSize());
}

var lastRender = 0;
function RunGame(timestamp){
    var progress = timestamp - lastRender;
    GameObjects();
    lastRender = timestamp;
    window.requestAnimationFrame(RunGame)
}
window.requestAnimationFrame(RunGame)
