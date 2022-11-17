//Creates Background Canvas for game
let Render = {
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
            ctx.clearRect(0, 0, Render.windowWidth, Render.windowHeight);
            ctx.drawImage(image, positionX, positionY, this.width, this.height);
        }
    },
    drawRect: function(positionX, positionY, width, height, color, useImage, imageSrc){
        var canvas = document.getElementById("gameWindow");
        var ctx = canvas.getContext("2d");
        if(useImage === true){
            const rectImage = new Image(width, height);
            rectImage.src = imageSrc;
            rectImage.onload = function(){
                ctx.drawImage(rectImage, positionX, positionY, this.width, this.height);
            }
        }
        else{
            ctx.rect(positionX, positionY, width, height);
            ctx.fillStyle = color;
            ctx.fill();
        }
    },
}
let Block = {
    positionX: 0,
    positionY: 0,
    width: 0,
    height: 0,
    color: "",
    useImage: false,
    imageSrc: "",
    setPositionX: function(x){
        this.positionX = x;
    },
    setPositionY: function(y){
        this.positionY = y;
    },
    setWidth: function(width){
        this.width = width;
    },
    setHeight: function(height){
        this.height = height;
    },
    setColor: function(color){
        this.color = color;
    },
    setUseImage: function(useImage){
        this.useImage = useImage;
    },
    setImageSrc: function(imageSrc){
        this.imageSrc = imageSrc;
    },
    getX: function(){return this.positionX},
    getY: function(){return this.positionY},
    getWidth: function(){return this.width},
    getHeight: function(){return this.height},
    getColor: function(){return this.color},
    getUseImage: function(){return this.useImage},
    getImageSrc: function(){return this.imageSrc},
    createBlock: function(positionX, positionY, width, height, color, useImage, imageSrc){
        this.setPositionX(positionX);
        this.setPositionY(positionY);
        this.setWidth(width);
        this.setHeight(height);
        this.setColor(color);
        this.setUseImage(useImage);
        this.setImageSrc(imageSrc);
        Render.drawRect(this.getX(), this.getY(), this.getWidth(), this.getHeight(), this.getColor(), this.getUseImage(), this.getImageSrc());
    }
}

