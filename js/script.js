document.addEventListener("DOMContentLoaded", () => {
  const anchors = document.querySelectorAll("a");

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
});
