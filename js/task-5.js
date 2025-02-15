function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorSpan = document.querySelector(".color");

document.querySelector(".change-color").addEventListener("click", () => {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});