var drums = document.querySelectorAll(".drum");
var len = drums.length;
for (var i = 0; i < len; ++i) {
  drums[i].addEventListener("click", function() {
    sound(this.innerHTML);
    animate(this.innerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  sound(event.key);
  animate(event.key);
});



function sound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("sounds/crash.mp3").play();
      break;
    case "l":
      new Audio("sounds/kick-bass.mp3").play();
      break;
  }
}

function animate(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed")
  }, 100);
}
