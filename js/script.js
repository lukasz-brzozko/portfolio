document.addEventListener("DOMContentLoaded", () => {
  const anchors = document.querySelectorAll(".scroll");
  const btn = document.querySelector(".btn-menu");

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
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    document.querySelector(".top-bar").classList.toggle("expand");
  });
});
