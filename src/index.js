import phantom from "@sidiousvic/phantom";
import reduxStore from "./store.js";
import Pizza from "./components/Pizza.js";

function phantomComponent() {
  const { slices } = data();
  return `
    ${Pizza(slices)}
  `;
}

export const { fire, data, launch } = phantom(reduxStore, phantomComponent);

launch(); // initial render

document.addEventListener("click", eatPizza);

function eatPizza(e) {
  if (e.target.id === "slices-h1") {
    fire({ type: "EAT_SLICE" }); // fire an action to the store
  }
}
