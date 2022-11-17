Render.drawGameWindow(600, 500, "white", true);
document.addEventListener("keydown", controller.keyDownHandler, false);
document.addEventListener("keyup", controller.keyUpHandler, false);
Physics.setVelocity(5);

var lastRender = 0;
function RunGame(timestamp){
    var progress = timestamp - lastRender;
    let block = Block;
    block.createBlock(100, 100, 50, 50, "red");
    let player = Render.drawSprite("Assets/player.png", Position.getX(), Position.getY(), Physics.getPlayerWidth(), Physics.getPlayerHeight());

    Physics.borderCollision();
    if(Physics.blockCollision(Position.getX(), Position.getY(), Physics.getPlayerWidth(), Physics.getPlayerHeight(), block.getX(), block.getY(), block.getWidth(), block.getHeight())){
        console.log("collision");
        //move player back to previous position
        Position.setX(Position.getX() - Physics.getVelocity());
        Position.setY(Position.getY() - Physics.getVelocity());
    }

    lastRender = timestamp;
    window.requestAnimationFrame(RunGame)
    document.addEventListener('click', (event) => {
        Position.setX(event.clientX - 250);
        Position.setY(event.clientY - 25);
    });
}
window.requestAnimationFrame(RunGame)
