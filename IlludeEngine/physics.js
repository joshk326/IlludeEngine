let physics = {
    velocity: 0,
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
                if(position.getY() < render.getWindowHeight() / 1.09 ){
                    position.setY(position.getY() + this.getVelocity());
                }
                break;
            case 'left':
                if(position.getX() >= 0){
                    position.setX(position.getX() - this.getVelocity());
                }
                break;
            case 'right':
                if(position.getX() < render.getWidnowWidth() / 1.04 ){
                    position.setX(position.getX() + this.getVelocity());
                }
                break;
        }
    }
}