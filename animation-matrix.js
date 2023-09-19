document.addEventListener("DOMContentLoaded", () => {
  const numOfColumns = window.innerWidth / 12;

  for (let i = 0; i < numOfColumns; i++) {
    const streams = Math.floor(Math.random() * 5) + 1;

    for (let j = 0; j < streams; j++) {
      createMatrixItem(i);
    }
  }
});

function createMatrixItem(columnIndex) {
  const item = document.createElement("div");
  item.classList.add("matrix-item");
  item.style.left = columnIndex * 12 + "px";
  item.style.top = -(Math.random() * window.innerHeight) + "px";
  item.style.animationDuration = Math.random() * 5 + 2 + "s";
  item.style.animationDelay = Math.random() * 5 + "s";
  item.innerText = Math.random() > 0.5 ? "1" : "0";
  document.body.appendChild(item);

  item.addEventListener("animationend", () => {
    document.body.removeChild(item);
    createMatrixItem(columnIndex);
  });
}
