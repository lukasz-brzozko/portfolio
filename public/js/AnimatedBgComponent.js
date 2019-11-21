class AnimatedBgComponent {
  constructor(selector) {
    this.elements = document.querySelectorAll(selector);
  }

  moveElements(e) {
    const { clientX, clientY } = e;
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;
    const moveX = clientX - centerX;
    const moveY = clientY - centerY;

    this.elements.forEach(el => {
      const ratioX = el.getAttribute("ratioX");
      const ratioY = el.getAttribute("ratioY");
      el.style.transform = `translate(${moveX * -ratioX}px,${moveY *
        -ratioY}px)`;
    });
  }
}
