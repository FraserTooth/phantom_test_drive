import phantom from "@sidiousvic/phantom";
import reduxStore from "./store.js";
import Pizza from "./components/phantomComponent.js";

export const { fire, data, launch } = phantom(reduxStore, Pizza);

launch(); // initial render
