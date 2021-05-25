var laser = new Audio("laser.mp3");
var blip = new Audio("blip.mp3");
var ayaya = new Audio("ayaya.mp3");
var homerun = new Audio("homerun.mp3");
var rich = new Audio("rich.mp3");
var slider = document.getElementById("volume");
var output = document.getElementById("volumeValue");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function playSound(x)
{
  var volume = document.getElementById('volume').value;

  console.log(x + " sound is playing...");
  console.log("The volume is: " + volume*0.01);

  x.volume = volume*0.01;
  x.currentTime=0;
  x.play();
}

const laserButton = document.getElementById('laserButton');
laserButton.onclick = function() {
  playSound(laser);
}

const blipButton = document.getElementById('blipButton');
blipButton.onclick = function() {
  playSound(blip);
}

const ayayaButton = document.getElementById('ayayaButton');
ayayaButton.onclick = function() {
  playSound(ayaya);
}

const homerunButton = document.getElementById('homerunButton');
homerunButton.onclick = function() {
  playSound(homerun);
}

const richButton = document.getElementById('richButton');
richButton.onclick = function() {
  playSound(rich);
}
