const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

const maxPlatteBoxe = 32;
const generatePlatte = () => {
  container.innerHTML = ""; // Clear existing colors before generating new ones
  for (let i = 0; i < maxPlatteBoxe; i++) {
    //* Generate a random Hex color
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;

    // Create a new color box
    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `
      <div class="react-box" style="background: ${randomHex}"></div>
      <span class="hex-value">${randomHex}</span>
    `;
    color.addEventListener("click", () => copyColor(color, randomHex));
    container.appendChild(color);
  }
};
const copyColor = (ele, hexVal) => {
  //   console.log(ele, hexVal);
  const colorElement = ele.querySelector(".hex-value");
  navigator.clipboard
    .writeText(hexVal)
    .then(() => {
      colorElement.innerText = "Copied";
      setTimeout(() => {
        colorElement.innerText = hexVal;
      }, 1000);
    })
    .catch(() => {
      alert("Failed to copy the color code!");
    });
};

refreshBtn.addEventListener("click", generatePlatte);
