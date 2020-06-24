import phantom from "@sidiousvic/phantom";
import reduxStore from "./store.js";
import Pizza from "./components/Pizza.js";

function phantomComponent() {
  return `
    ${Pizza()} // inject the Pizza component from above
  `;
}

export const { fire, data, launch } = phantom(reduxStore, phantomComponent);

launch(); // initial render
