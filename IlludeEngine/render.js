//Creates Background Canvas for game
let render = {
    windowHeight: 0,
    windowWidth: 0,
    setWindowHeight: function(height){
        this.windowHeight = height;
    },
    setWindowWidth: function(width){
        this.windowWidth = width;
    },
    getWindowHeight: function(){return this.windowHeight},
    getWidnowWidth: function(){return this.windowWidth},
    drawGameWindow: function(widthPX, heightPX, backgroundColor, enableBorder, useBackgroundImage, backgroundImage){
        this.setWindowHeight(heightPX);
        this.setWindowWidth(widthPX);
        let newCanvas = document.createElement('canvas');
        newCanvas.style.display = "block"
        newCanvas.height = this.getWindowHeight();
        newCanvas.width = this.getWidnowWidth();
        if(useBackgroundImage === true){
            newCanvas.style.backgroundImage = "url(" + backgroundImage + ")";
            newCanvas.style.backgroundRepeat = "no-repeat";
        }
        enableBorder === true ? newCanvas.style.border = "2px solid black" : newCanvas.style.border = "none";
        newCanvas.style.margin = "0 auto";
        newCanvas.style.backgroundColor = backgroundColor;
        newCanvas.id = 'gameWindow'
        document.body.appendChild(newCanvas);
    },
    drawSprite: function(sprite, positionX, positionY, width, height){
        var canvas = document.getElementById("gameWindow");
        var ctx = canvas.getContext("2d");
        const image = new Image(width, height);
        image.src = sprite;
        image.onload= function(){
            ctx.clearRect(0, 0, render.windowWidth, render.windowHeight);
            ctx.drawImage(image, positionX, positionY, this.width, this.height);
        }
    },
    drawRect: function(positionX, positionY, width, height, color, useImage, imageSrc){
        var canvas = document.getElementById("gameWindow");
        var ctx = canvas.getContext("2d");
        //const rectImage = new Image(width, height);
        //rectImage.src = imageSrc;
        if(useImage === true){
            // rectImage.onload= function(){
            //     ctx.drawImage(image, positionX, positionY, this.width, this.height);
            // }
        }
        else{
            ctx.rect(positionX, positionY, width, height);
            ctx.fillStyle = color;
            ctx.fill();
        }
    },
}


