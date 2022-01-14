const letter = document.getElementById("letter");
const shuffleBtn = document.getElementById("shuffle-btn");

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

shuffleBtn.addEventListener("click", () => {
  let shufflingAnimation = setInterval(startShufflingAnimation, 50);
  setTimeout(() => {
    clearTimeout(shufflingAnimation);
  }, 1500);
});

function startShufflingAnimation() {
  let randomLetter = Math.floor(Math.random() * 26);
  console.log(randomLetter);
  letter.innerHTML = letters[randomLetter];
}

function stopShuffling(time) {
  clearTimeout(time);
}

//SERVICE WORKER

let newWorker;

function showUpdateBar() {
  let snackbar = document.getElementById('snackbar');
  snackbar.className = 'show';
}

// The click event on the pop up notification
document.getElementById('reload').addEventListener('click', function(){
  newWorker.postMessage({ action: 'skipWaiting' });
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").then(registration => {
    registration.addEventListener("updatefound", () => {
      newWorker = registration.installing;
      newWorker.addEventListener("statechange", () => {
        switch (newWorker.state) {
          case "installed":
            if (navigator.serviceWorker.controller) {
              showUpdateBar()
            }
            break;
        }
      })
    })
    console.log("Service worker registered!")
    console.log(registration)
  }).catch(error => {
    console.log("Registration failed!")
    console.log(error)
  })
}