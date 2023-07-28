let colorElements;
let paddingElements;

export function getColumnMarginElements() {
  colorElements = document.querySelectorAll(".column");
  paddingElements = document.querySelectorAll(".content");
  console.log("colorElements", colorElements);
  console.log("paddingElements", paddingElements);
}

export default function backgroundMarginRemover() {
  const arr = [0, 1, 2, 3];
  arr.map((item) => {
    colorElements[item].classList.remove(`background${item}`);
    paddingElements[item].classList.remove("extra-margin");
  });
}

export function backgroundMarginAdder(index) {
  console.log(colorElements[index]);
  colorElements[index].classList.add(`background${index}`);
  paddingElements[index].classList.add("extra-margin");
}
