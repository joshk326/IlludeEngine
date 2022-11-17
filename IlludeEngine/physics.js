let Physics = {
    velocity: 0,
    playerHeight: 32,
    playerWidth: 24,
    getPlayerHeight: function(){return this.playerHeight;},
    getPlayerWidth: function(){return this.playerWidth;},
    setVelocity: function(playerVelocity) {
        this.velocity = playerVelocity;
    },
    getVelocity: function() {return this.velocity},
    playerMovement: function(direction) {
        switch (direction) {
            case 'up':
                Position.setY(Position.getY() - this.getVelocity());
                break;
            case 'down':
                Position.setY(Position.getY() + this.getVelocity());
                break;
            case 'left':
                Position.setX(Position.getX() - this.getVelocity());
                break;
            case 'right':
                Position.setX(Position.getX() + this.getVelocity());
                break;
        }
    },
    borderCollision: function() {
        if(Position.getX() < 0) {
            Position.setX(0);
        }
        if(Position.getX() > Render.getWidnowWidth() - this.getPlayerWidth()) {
            Position.setX(Render.getWidnowWidth() - this.getPlayerWidth());
        }
        if(Position.getY() < 0) {
            Position.setY(0);
        }
        if(Position.getY() > Render.getWindowHeight() - this.getPlayerHeight()) {
            Position.setY(Render.getWindowHeight() - this.getPlayerHeight());
        }
    },
    blockCollision: function(playerX, playerY, playerWidth, playerHeight, blockX, blockY, blockWidth, blockHeight) {
        if(playerX < blockX + blockWidth && playerX + playerWidth > blockX && playerY < blockY + blockHeight && playerY + playerHeight > blockY) {
            return true;
        }
        else {
            return false;
        }
    },
}