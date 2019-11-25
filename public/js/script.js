document.addEventListener("DOMContentLoaded", () => {
  if (innerWidth > 1024) {
    const animateBg = new AnimatedBgComponent(".flying");
    const titleEl = document.getElementById("title");
    titleEl.addEventListener("mousemove", e => {
      animateBg.moveElements(e);
    });
  }
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

  //Shrinks the top bar
  const removeExpandClass = () => {
    topBar.classList.remove("expand");
  };

  anchors.forEach(anchor => {
    anchor.addEventListener("click", setSmoothScroll);
    if (anchor.classList.contains("mobile")) {
      anchor.addEventListener("click", removeExpandClass);
    }
  });

  // Menu hamburger's click handler
  btn.addEventListener("click", () => {
    topBar.classList.toggle("expand");
  });

  // Shrink the top bar when the window is resized manually
  window.addEventListener("resize", () => {
    if (innerWidth > 900) removeExpandClass();
  });
});
