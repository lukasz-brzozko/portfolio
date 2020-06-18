import cloud from "../img/cloud.svg";
import name from "../img/name.svg";
import surname from "../img/surname.svg";
import profession from "../img/profession.svg";

const cloudParameters = [
  {
    ratioX: 0.13,
    ratioY: 0.11,
    viewBox: "0 0 277 175",
  },
  {
    ratioX: 0.07,
    ratioY: 0.06,
    viewBox: "0 0 280 167",
  },
  {
    ratioX: 0.05,
    ratioY: 0.04,
    viewBox: "0 0 277 175",
  },
  {
    ratioX: 0.03,
    ratioY: 0.02,
    viewBox: "0 0 280 390",
  },
  {
    ratioX: 0.02,
    ratioY: 0.01,
    viewBox: "0 0 300 410",
  },
];

export const addClouds = () => {
  const headerEl = document.querySelector("#title");
  const div = document.createElement("div");
  div.classList.add("clouds");

  cloudParameters.forEach((param) => {
    const paramedCloud = cloud.replace(
      "<svg",
      `<svg ratioX="${param.ratioX}" ratioY="${param.ratioY}" viewBox="${param.viewBox}"`
    );

    div.innerHTML += paramedCloud;
  });

  headerEl.appendChild(div);
};

export const addTitle = () => {
  const svgWrapper = document.querySelector(".svg-title-wrapper");
  const svgNameWrapper = document.querySelector(".svg-name-wrapper");

  svgNameWrapper.innerHTML = name + surname;
  svgWrapper.innerHTML += profession;
};
