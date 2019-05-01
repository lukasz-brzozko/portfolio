document.addEventListener("DOMContentLoaded", () => {
  const anchors = document.querySelectorAll(".scroll");
  const btn = document.querySelector(".btn-menu");
  const topBar = document.querySelector(".top-bar");

  // Setting a smooth scroll for all the anchors from the top bar
  const setSmoothScroll = function(e) {
    e.preventDefault();
    const hash = this.hash; //href
    document.querySelector(hash).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  };

  anchors.forEach(anchor => {
    anchor.addEventListener("click", setSmoothScroll);
  });

  // Menu hamburger's click handler
  btn.addEventListener("click", () => {
    topBar.classList.toggle("expand");
  });

  // Shrink the top bar when the window is resized manually
  window.addEventListener("resize", () => {
    if (innerWidth > 900) topBar.classList.remove("expand");
  });
});
