

// 11-dom-read — my work.

export function pageHeading() {
  return document.querySelector("h1").textContent.trim();
}

export function productCount() {
  return document.querySelectorAll(".card").length;
}

export function productNames() {
  const headings = document.querySelectorAll(".card h3");
  return Array.from(headings).map((h3) => h3.textContent.trim());
}

export function priceOf(name) {
  const cards = Array.from(document.querySelectorAll(".card"));
  const card = cards.find((c) => c.querySelector("h3").textContent.trim() === name);
  if (!card) {
    return null;
  }
  return card.querySelector(".price").textContent.trim();
}

export function soldOutNames() {
  const headings = document.querySelectorAll(".card.sold-out h3");
  return Array.from(headings).map((h3) => h3.textContent.trim());
}
