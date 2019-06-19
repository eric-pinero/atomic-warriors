import Match from "./match";
import Sound from "./sound";

document.addEventListener("DOMContentLoaded", () => {


  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = 1000;
  canvasEl.height = 600;
  const ctx = canvasEl.getContext("2d");
  
  ctx.clearRect(0, 0, 1000, 600);
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, 1000, 600);

  ctx.fillStyle = "#00ff00";
  ctx.font = "40px radioactive";
  ctx.textAlign = "center";

  ctx.textAlign = "left";

  ctx.fillText("⊗ Hit your opponent with your shield to destroy them", 20, 100);
  ctx.fillText("⊗ When shields touch, they repel", 20, 150);
  ctx.fillText("⊗ Jump on your opponent to crush them", 20, 200);
  ctx.fillText("⊗ The first to 3 wins is the true ATOMIC WARRIOR!!!", 20, 250);

  ctx.textAlign = "center";

  ctx.fillText("Press Enter to Fight", 500, 325);

  const match = new Match(ctx);
  key("return", () => {
    const bgMusic = new Sound("./assets/bgMusic.mp3");
    const deathSound = new Sound("./assets/deathSound.mp3");
    const sounds = [bgMusic, deathSound];
    match.start(sounds);}
  );
});