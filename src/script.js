import { addClouds, addTitle } from "./helpers/addSVG";
import { animate } from "./helpers/animate";
import MEDIA from "./constants/media";

import './styles/style.scss';

document.addEventListener("DOMContentLoaded", () => {
  if (innerWidth > MEDIA.large) {
    addClouds();
  } else {
    const sun = document.querySelector(".sun");
    sun.style.display = "none";
  }
  const anchors = document.querySelectorAll(".scroll");
  const btn = document.querySelector(".btn-menu");
  const topBar = document.querySelector(".top-bar");

  const media = window.matchMedia("(max-width: 900px)");

  // Setting a smooth scroll for all the anchors from the top bar
  const setSmoothScroll = function (e) {
    e.preventDefault();
    const hash = this.hash;
    document.querySelector(hash).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  // Shrinks the top bar
  const removeExpandClass = () => {
    topBar.classList.remove("expand");
  };

  anchors.forEach((anchor) => {
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
  const setTopbar = (e) => {
    if (e.matches) {
      removeExpandClass();
    }
  };

  const setCurrentYear = () => {
    const yearEl = document.querySelector(".year");
    const date = new Date();
    const currentYear = date.getFullYear();

    yearEl.textContent = currentYear;
  };

  media.addEventListener("change", setTopbar);

  addTitle();
  animate();
  setCurrentYear();
});
