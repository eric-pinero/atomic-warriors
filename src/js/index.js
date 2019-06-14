import Match from "./match";
document.addEventListener("DOMContentLoaded", () => {

  const bgMusic = new Audio("./assets/bgMusic.mp3");

  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = 1000;
  canvasEl.height = 600;
  const ctx = canvasEl.getContext("2d");
  
  ctx.clearRect(0, 0, 1000, 600);
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, 1000, 600);

  ctx.fillStyle = "#00ff00";
  ctx.font = "50px radioactive";
  ctx.textAlign = "center";

  ctx.fillText("Welcome to Atomic Warriors", 500, 100);
  ctx.fillText("Press Enter to Start", 500, 200);
  key("return", () =>  new Match(bgMusic).start());
});