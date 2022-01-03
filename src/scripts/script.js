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

function stopShuffling(parametro) {
  clearTimeout(parametro);
}
