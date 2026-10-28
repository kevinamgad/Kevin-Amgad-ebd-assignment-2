// 13-forms — my work.

// The data lives here. The page is just a picture of this array.
const items = [];

export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);
  return { name, price };
}

export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

export function renderList(items) {
  const list = document.querySelector("#list");

  // Empty the list first, so we replace the old cards instead of adding to them.
  for (const card of list.querySelectorAll(".card")) {
    card.remove();
  }

  for (const item of items) {
    const card = document.createElement("li");
    card.classList.add("card");

    const heading = document.createElement("h3");
    heading.textContent = item.name;

    const priceText = document.createElement("p");
    priceText.classList.add("price");
    priceText.textContent = `${item.price} EGP`;

    card.append(heading, priceText);
    list.append(card);
  }
}

// Stops the listener being attached twice if wireForm is called again.
let wired = false;

export function wireForm() {
  if (wired) {
    return;
  }
  wired = true;

  const form = document.querySelector("#product-form");
  const error = document.querySelector("#error");

  form.addEventListener("submit", (event) => {
    // 1. Stop the browser reloading the page.
    event.preventDefault();

    // 2. Read the form.
    const { name, price } = readForm();

    // 3. No name: show the error and stop.
    if (!name) {
      error.textContent = "Give the product a name.";
      return;
    }

    // 4. Empty, not a number, or 0 or less: show the error and stop.
    if (!(price > 0)) {
      error.textContent = "Give the product a price.";
      return;
    }

    // 5. All good: clear the error, save the item, redraw, empty the boxes.
    error.textContent = "";
    items.push({ name, price });
    renderList(items);
    clearForm();
  });
}

// Attach the listener when the page loads, so the form works in the browser.
wireForm();