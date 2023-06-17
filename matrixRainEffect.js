function generateRainEffect() {
  const visualCanvas = document.createElement("canvas");
  visualCanvas.width = window.innerWidth;
  visualCanvas.height = window.innerHeight;
  visualCanvas.style.position = "fixed";
  visualCanvas.style.top = 0;
  visualCanvas.style.left = 0;
  visualCanvas.style.zIndex = -1;
  document.body.appendChild(visualCanvas);

  window.addEventListener("resize", () => {
    visualCanvas.width = window.innerWidth;
    visualCanvas.height = window.innerHeight;
  });

  const visualContext = visualCanvas.getContext("2d");
  const pixelSize = 14;
  const columnCount = visualCanvas.width / pixelSize;

  let raindrops = [];
  for (let i = 0; i < columnCount; i++) {
    raindrops[i] = 1;
  }

  function renderRainEffect() {
    visualContext.fillStyle = "rgba(0, 0, 0, 0.1)";
    visualContext.fillRect(0, 0, visualCanvas.width, visualCanvas.height);

    visualContext.fillStyle = "#00FF00";
    visualContext.font = pixelSize + "px Courier";

    for (let i = 0; i < raindrops.length; i++) {
      const symbol = String.fromCharCode(Math.random() * 128);
      const x = i * pixelSize;
      const y = raindrops[i] * pixelSize;

      visualContext.fillText(symbol, x, y);

      if (y > visualCanvas.height && Math.random() > 0.975) {
        raindrops[i] = 0;
      }

      raindrops[i]++;
    }
  }

  setInterval(renderRainEffect, 50);
}

generateRainEffect();
