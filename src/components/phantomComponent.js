import Pizza from "../assets/Pizza";

export function phantomComponent() {
  return `
    ${Pizza()} // inject the Pizza component from above
  `;
}
