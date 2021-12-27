function include(file) {
    var script  = document.createElement('script');
    script.src  = file;
    script.type = 'text/javascript';
    script.defer = true;
    
    document.getElementsByTagName('head').item(0).appendChild(script);
}

include('IlludeEngine/render.js');
include('IlludeEngine/controller.js');
include('IlludeEngine/physics.js');
include('game.js');