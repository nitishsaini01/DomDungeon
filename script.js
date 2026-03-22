const container = document.getElementById("container");

function createGrid(size) {
  container.innerHTML = ""; // clear old grid

  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("square");

    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;

    // hover effect
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
    });

    container.appendChild(div);
  }
}

createGrid(16);

const button = document.getElementById("resize");

button.addEventListener("click", () => {
  let size = prompt("Enter grid size (max 100)");

  size = parseInt(size);

  if (size > 100) size = 100;

  if (size > 0) {
    createGrid(size);
  }
});

div.addEventListener("mouseover", () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

div.addEventListener("mouseover", () => {
  let opacity = div.dataset.opacity || 0;
  opacity = Number(opacity) + 0.1;

  div.style.backgroundColor = "black";
  div.style.opacity = opacity;

  div.dataset.opacity = opacity;
});

