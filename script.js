document.querySelectorAll("video").forEach(video => {
  video.addEventListener("mouseenter", () => video.play());
  video.addEventListener("mouseleave", () => video.pause());

  video.addEventListener("click", () => {
    video.muted = false;
    video.controls = true;
  });
});

const toggle = document.getElementById("toggleTheme");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});