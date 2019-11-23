let b = document.querySelectorAll(".play")

for (let element of b) {
  element.addEventListener("click", function() {
    if (element.textContent === "▶") {
      element.textContent = "❚❚"
      music(element.getAttribute("id"), "play")
    } else {
      element.textContent = "▶"
      music(element.getAttribute("id"), "pause")
    }
  })
}

var audio1 = new Audio("assets/Eyes of Madness.mp3");
var audio2 = new Audio("assets/Her Ghost.mp3");
var audio3 = new Audio("assets/Riot.mp3");
var audio4 = new Audio("assets/Horizon.mp3");

function music(id, action) {
  if (action === "play") {
    if (id === "1") {
      audio1.play()
    }
    if (id === "2") {
      audio2.play()
    }
    if (id === "3") {
      audio3.play()
    }
    if (id === "4") {
      audio4.play()
    }
  } else {
    if (id === "1") {
      audio1.pause()
    }
    if (id === "2") {
      audio2.pause()
    }
    if (id === "3") {
      audio3.pause()
    }
    if (id === "4") {
      audio4.pause()
    }
  }
}

// let playing = false;
// element.addEventListener("click", function() {
//   playing = !playing;
//   if (playing) {
//     element.textContent = "❚❚"
//   } else {
//     element.textContent = "▶"
//   }
// })
