"use strict";

var Scene = {
    canvas : undefined,
    canvasContext : undefined,
	sprite: undefined
};

Scene.start = function () {
	// Get the canvas and it's context.
    Scene.canvas = document.getElementById("myCanvas");
    Scene.canvasContext = Scene.canvas.getContext("2d");
	
	// Seup the parrot to be displayed.
    Scene.sprite = parrot;
	
	// Attach the image to be used for the sprite.
	Scene.sprite.img = new Image();
    Scene.sprite.img.src = Scene.sprite.src;
	
	// Wait till the parrot image is loaded before starting the animation.
	Scene.sprite.img.onload = function() {		
		Scene.sprite.offset=-0;
    	Scene.mainLoop();
	}
};

// Once the basic HTML document is loaded and its parsing has taken place, start the scene.
document.addEventListener( 'DOMContentLoaded', Scene.start);

Scene.clearCanvas = function () {
    Scene.canvasContext.fillStyle = "white";
    Scene.canvasContext.fillRect(0, 0, Scene.canvas.width, Scene.canvas.height);
};

Scene.textBubble = function(){
    Scene.canvasContext.font = "20px Arial";
    Scene.canvasContext.fillStyle = "white";
    Scene.canvasContext.fillText("do you want to work together", 350, 100);
}

Scene.mainLoop = function() {
    Scene.clearCanvas();
    Scene.update();
    Scene.draw();

	if(Scene.sprite.frame >= 8){
	if(Scene.sprite.frame <= 9){
        Scene.textBubble();
    }
    }
	
	// Animate at 24 frames a second.
    window.setTimeout(Scene.mainLoop, 1000/2);
};

Scene.update = function () {
	// Set the canvas width to be that of the display Window. Which helps if you resize the window.
  	Scene.canvas.width = window.innerWidth;
};

Scene.draw = function () {
	Scene.canvasContext.drawImage(Scene.sprite.img,Scene.sprite.frames[Scene.sprite.frame].frame.x,Scene.sprite.frames[Scene.sprite.frame].frame.y,Scene.sprite.frames[Scene.sprite.frame].frame.w,Scene.sprite.frames[Scene.sprite.frame].frame.h,Scene.sprite.offset,0,Scene.sprite.frames[Scene.sprite.frame].frame.w,Scene.sprite.frames[Scene.sprite.frame].frame.h);
	
	// Advance to the next frame.
	Scene.sprite.frame++;

	// At the end of the sprite sheet, start at the first frame.
	if(Scene.sprite.frame==Scene.sprite.frames.length)
		Scene.sprite.frame=0;
};

