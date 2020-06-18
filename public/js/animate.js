import anime from "animejs/lib/anime.es.js";
import AnimatedBgComponent from "./AnimatedBgComponent";

export const animate = () => {
  const svgNamePath = document.querySelector(".svg-name path");
  const svgSurnamePath = document.querySelector(".svg-surname path");
  const svgProfessionPath = document.querySelector(".profession path");
  const svgClouds = document.querySelectorAll(".cloud");
  const svgCloudsPath = document.querySelectorAll(".cloud path");
  const sun = document.querySelector(".sun");

  const colors = {
    cloud: {
      fillColor: "rgba(255, 255, 255, 1)",
      transparent: "rgba(255, 255, 255, 0)",
    },
    sun: {
      fillColor: "rgba(247, 204, 66, 1)",
      fillColorShine: "rgba(247, 204, 66, 0.6)",
      transparent: "rgba(247, 204, 66, 0)",
    },
  };

  const tl = anime.timeline({
    easing: "easeInOutSine",
    duration: 6000,
  });

  tl.add({
    targets: [svgNamePath, svgSurnamePath],
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 7000,
  })
    .add(
      {
        targets: sun,
        translateX: ["50%", "50%"],
        translateY: ["-50%", "-50%"],
        rotateZ: "180deg",
        duration: 3000,
      },
      0
    )
    .add(
      {
        targets: svgCloudsPath,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 3000,
        delay: anime.stagger(100),
      },
      0
    )
    .add(
      {
        targets: [svgNamePath, svgSurnamePath, svgCloudsPath],
        fill: [colors.cloud.transparent, colors.cloud.fillColor],
        stroke: [colors.cloud.fillColor, colors.cloud.transparent],
        duration: 1000,
      },
      "-=3500"
    )
    .add(
      {
        targets: [sun],
        backgroundColor: [colors.sun.transparent, colors.sun.fillColor],
        boxShadow: [
          `0 0 20px 10px ${colors.sun.transparent}`,
          `0 0 20px 10px ${colors.sun.fillColorShine}`,
        ],
        duration: 700,
      },
      "-=3500"
    )
    .add(
      {
        targets: svgProfessionPath,
        strokeDashoffset: [anime.setDashoffset, 0],
      },
      "-=2500"
    )
    .add(
      {
        targets: svgProfessionPath,
        fill: [colors.cloud.transparent, colors.cloud.fillColor],
        stroke: [colors.cloud.fillColor, colors.cloud.transparent],
        duration: 700,
      },
      "-=4500"
    )
    .add(
      {
        targets: svgClouds,
        translateX: [10, 0],
        translateY: [10, 0],
        scale: [1.1, 1],
        duration: 700,
        complete: function (anim) {
          if (svgClouds) {
            const animateBg = new AnimatedBgComponent(".flying");
            const titleEl = document.getElementById("title");
            titleEl.addEventListener("mousemove", (e) => {
              animateBg.moveElements(e);
            });

            sun.classList.add("pulsing");
          }
        },
      },
      "-=3700"
    );
};
