import { items } from "./items.js";

// Draws the given items into #list, replacing whatever was there.
export function renderItems(list) {
  const ul = document.querySelector("#list");
  ul.innerHTML = "";

  for (const item of list) {
    const li = document.createElement("li");
    li.classList.add("listing");
    li.textContent = `${item.name} - ${item.price} EGP`;
    ul.append(li);
  }
}

// Only the items over 100 EGP.
export function matching() {
  return items.filter((item) => item.price > 100);
}

// Draws everything now, and only the matching items when #apply is clicked.
export function start() {
  renderItems(items);

  document.querySelector("#apply").addEventListener("click", () => {
    renderItems(matching());
  });
}

// Start the page once the browser has finished reading the HTML.
document.addEventListener("DOMContentLoaded", start);
