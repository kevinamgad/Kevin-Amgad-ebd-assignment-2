// 12-dom-write — my work.

// Finds the card whose h3 says `name`. Returns undefined if there is none.
function findCard(name) {
  const cards = Array.from(document.querySelectorAll("#list .card"));
  return cards.find((card) => card.querySelector("h3").textContent === name);
}

export function addProduct(name, price) {
  const card = document.createElement("li");
  card.classList.add("card");

  const heading = document.createElement("h3");
  heading.textContent = name;

  const priceText = document.createElement("p");
  priceText.classList.add("price");
  priceText.textContent = `${price} EGP`;

  card.append(heading, priceText);
  document.querySelector("#list").append(card);
}

export function removeProduct(name) {
  const card = findCard(name);
  if (card) {
    card.remove();
  }
}

export function markSoldOut(name) {
  const card = findCard(name);
  if (card) {
    card.classList.add("sold-out");
  }
}

export function clearProducts() {
  for (const card of document.querySelectorAll("#list .card")) {
    card.remove();
  }
}

export function wireButtons() {
  document.querySelector("#add").addEventListener("click", () => {
    addProduct("Notebook", 45);
  });

  document.querySelector("#reset").addEventListener("click", () => {
    clearProducts();
  });
}

// Attach the listeners when the page loads, so the buttons work in the browser.
wireButtons();
