// Defining playSound fucntion
function playSound(event) {
  const audioToPlay = document.querySelector(
    `audio[data-key="${event.keyCode}"]`
  );
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  //event.keyCode conatins the code of the key pressed

  if (!audioToPlay) {
    console.log("Press only the keys mentioned on the screen");
    return;
  }

  key.classList.add("playing");
  audioToPlay.currentTime = 0; // if a key is pressed before the audio is completed the audio will start again from 0
  audioToPlay.play();
}

const keys = Array.from(document.querySelectorAll(".key"));

function removeDesign(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

keys.forEach((key) => key.addEventListener("transitionend", removeDesign)); // for each key when transitionend event is triggered , call the function removeDesign

window.addEventListener("keydown", playSound); // Adding event listNer to window object, whenever there is A key pressed, playSound function will be called
