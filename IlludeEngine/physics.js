let physics = {
    velocity: 0,
    playerSize: 0,
    setPlayerSize: function(size){
        this.playerSize = size;
    },
    getPlayerSize: function(){return this.playerSize;},
    setVelocity: function(playerVelocity) {
        this.velocity = playerVelocity;
    },
    getVelocity: function() {return this.velocity},
    playerMovement: function(direction) {
        switch (direction) {
            case 'up':
                if(position.getY() >= 0){
                    position.setY(position.getY() - this.getVelocity());
                }  
                break;
            case 'down':
                if(position.getY() < render.getWindowHeight() - this.getPlayerSize() ){
                    position.setY(position.getY() + this.getVelocity());
                }
                break;
            case 'left':
                if(position.getX() >= 0){
                    position.setX(position.getX() - this.getVelocity());
                }
                break;
            case 'right':
                if(position.getX() < render.getWidnowWidth() - this.getPlayerSize() ){
                    position.setX(position.getX() + this.getVelocity());
                }
                break;
        }
    },
}