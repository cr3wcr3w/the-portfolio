export const mouseEnterAnimationHandler = ({ sec = 7 }: { sec?: number }) => {
  const starElements = [
    document.getElementById("stars1"),
    document.getElementById("stars2"),
    document.getElementById("stars3"),
    document.getElementById("stars4"),
  ];

  starElements.forEach((element, index) => {
    if (element) {
      element.style.animation = `starGoUp ${sec}s forwards`;
      element.addEventListener("animationend", () => {
        setTimeout(() => {
          element.style.animation = `blink ${index + 1}s infinite`;
        }, index * 1000);
      });
    }
  });
};
