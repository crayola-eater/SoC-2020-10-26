/* Task 3.1 - Your Canvas 

Using the canvas element in the index.html, draw a picture of your choice. It can be as simple or as complex as you like! 

*/

function drawSomething() {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Bunch of squares
  for (let i = 0; i < 10; ++i) {
    ctx.fillStyle = `rgba(${(i / 10) * 255}, 45, 36, 0.5)`;
    ctx.fillRect(i * 10, i * 10, 40, 40);
  }
  // Bunch of circles
  for (let i = 0; i < 10; ++i) {
    ctx.beginPath();
    ctx.strokeStyle = `rgba(150, ${i * 25}, 36, 0.5)`;
    ctx.arc(i * 10, i * 10, 40, 0, Math.PI * 2, true);
    ctx.stroke();
  }
}

drawSomething();
