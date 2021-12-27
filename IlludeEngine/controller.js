//Position getter and setters
let position = {
    x: 0,
    y: 0,
    setX: function(x) {
        this.x = x;
    },
    getX: function() { 
        return this.x;
    },
    setY: function(y) {
        this.y = y;
    },
    getY: function() {
        return this.y;
    },
}

//Functions to determine if keys are being pressed
let controller = {
    upIsPressed: false,
    leftIsPressed: false,
    downIsPressed: false,
    rightIsPressed: false,
    keyDownHandler: function(e){
        if(e.key == "w" || e.key == "ArrowUp" || e.key == "up") {
            this.upIsPressed = true; 
            physics.playerMovement("up"); 
            console.log(position.getY());     
        }
        else if(e.key == "a" || e.key == "ArrowLeft" || e.key == "left"){
            this.leftIsPressed = true; 
            physics.playerMovement("left");
            console.log(position.getX());        
        }
        else if(e.key == "s" || e.key == "ArrowDown" || e.key == "down"){
            this.downIsPressed = true; 
            physics.playerMovement("down")
            console.log(position.getY());
        }
        else if(e.key == "d" || e.key == "ArrowRight" || e.key == "right"){
            this.rightIsPressed = true;
            physics.playerMovement("right")
            console.log(position.getX());
        }
    },
    keyUpHandler: function(e){
        if(e.key == "w" || e.key == "ArrowUp" || e.key == "up") {
            this.upIsPressed = false;
        }
        else if(e.key == "a" || e.key == "ArrowLeft" || e.key == "left"){
            this.leftIsPressed = false;
        }
        else if(e.key == "s" || e.key == "ArrowDown" || e.key == "down"){
            this.downIsPressed = false;
        }
        else if(e.key == "d" || e.key == "ArrowRight" || e.key == "right"){
            this.rightIsPressed = false;
        }
    }
}

