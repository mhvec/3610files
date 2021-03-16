let img = new Image();
img.src = 'numbers2.png';
img.onload = function() {
  init();
};
const scale = 1;
const width = 120;
const height = 175;
const scaledWidth = scale * width;
const scaledHeight = scale * height;

function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(img,
                frameX * width, frameY * height, width, height,
                canvasX, canvasY, scaledWidth, scaledHeight);
}

const cycleLoop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let currentLoopIndex = 0;
let frameCount = 0;

function step() {
  frameCount++;
  if (frameCount < 120) {
    window.requestAnimationFrame(step);
    return;
  }
  frameCount = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0);
  currentLoopIndex++;
  if (currentLoopIndex >= cycleLoop.length) {
    currentLoopIndex = 0;
  }
  window.requestAnimationFrame(step);
}

function init() {
  window.requestAnimationFrame(step);
}

