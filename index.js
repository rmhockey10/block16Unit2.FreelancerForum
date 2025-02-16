/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// === State ===
function makeListing() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate = Math.floor(
    Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min) + PRICE_RANGE.min
  );
  return { name, occupation, rate };
}

const listings = Array.from({ length: NUM_FREELANCERS }, makeListing);

function averageRate() {
  rateArray = [];
  let total = 0;
  let average = 0;
  for (let i = 0; i < listings.length; i++) {
    rateArray.push(listings[i].rate);
    total = listings[i].rate + total;
    average = total / listings.length;
  }
  return average;
}

// === Component ===

//PascalCase (implies it's a component. Function name is a noun, not a verb)
function Freelancer(listing) {
  const { name, occupation, rate } = listing;
  const $card = document.createElement("article");
  $card.classList.add("card");
  $card.innerHTML = `
    <p class="name">${name}</p>
    <p class="operation">${occupation}</p>
    <p class="answer">${rate}</p>
  `;
  return $card;
}

function Freelancers() {
  const $container = document.createElement("article");
  $container.classList.add("cards");
  const $cards = listings.map(Freelancer);
  $container.replaceChildren(...$cards);

  return $container;
}

function Average() {
  const average = `The average rate is $${averageRate()}`;
  return average;
}

// === Render ===

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
      <h1>Freelancer Forum</h1>
      <Average></Average>      
      <Freelancers></Freelancers>
    `;

  $app.querySelector("Freelancers").replaceWith(Freelancers());
  $app.querySelector("Average").replaceWith(Average());
}

render();
