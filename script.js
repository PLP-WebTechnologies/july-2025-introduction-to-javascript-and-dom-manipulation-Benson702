// ======================================================
// 🎯 PART 1: BASICS (Variables, Data Types, Conditionals)
// ======================================================

// Grab DOM elements
const ageInput = document.getElementById("ageInput");
const checkAgeBtn = document.getElementById("checkAgeBtn");
const ageResult = document.getElementById("ageResult");

// Check if user is eligible (conditional example)
checkAgeBtn.addEventListener("click", () => {
  const age = parseInt(ageInput.value);

  if (isNaN(age)) {
    ageResult.textContent = "⚠️ Please enter a valid age.";
  } else if (age >= 18) {
    ageResult.textContent = "✅ You are eligible!";
  } else {
    ageResult.textContent = "❌ You are not eligible.";
  }
});


// ======================================================
// ❤️ PART 2: FUNCTIONS (Reusable Logic)
// ======================================================

// Function to calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function to format currency
function formatCurrency(amount) {
  return "$" + amount.toFixed(2);
}

// DOM interaction
const priceInput = document.getElementById("priceInput");
const qtyInput = document.getElementById("qtyInput");
const calcTotalBtn = document.getElementById("calcTotalBtn");
const totalResult = document.getElementById("totalResult");

calcTotalBtn.addEventListener("click", () => {
  const price = parseFloat(priceInput.value);
  const qty = parseInt(qtyInput.value);

  if (isNaN(price) || isNaN(qty)) {
    totalResult.textContent = "⚠️ Enter valid values.";
  } else {
    const total = calculateTotal(price, qty);
    totalResult.textContent = "Total: " + formatCurrency(total);
  }
});


// ======================================================
// 🔁 PART 3: LOOPS (for, while, etc.)
// ======================================================

// Show multiplication table of 5
const showTableBtn = document.getElementById("showTableBtn");
const tableResult = document.getElementById("tableResult");

showTableBtn.addEventListener("click", () => {
  let output = "<h3>Multiplication Table of 5</h3>";
  for (let i = 1; i <= 10; i++) {
    output += `5 × ${i} = ${5 * i} <br>`;
  }
  tableResult.innerHTML = output;
});


// ======================================================
// 🌐 PART 4: DOM Manipulation
// ======================================================

const toggleColorBtn = document.getElementById("toggleColorBtn");
const addItemBtn = document.getElementById("addItemBtn");
const dynamicList = document.getElementById("dynamicList");

// 1. Toggle background color
toggleColorBtn.addEventListener("click", () => {
  document.body.classList.toggle("highlight");
});

// 2. Add new list item dynamically
let itemCount = 0;
addItemBtn.addEventListener("click", () => {
  itemCount++;
  const li = document.createElement("li");
  li.textContent = "New Item " + itemCount;
  dynamicList.appendChild(li);
});

// 3. Change content with a click (extra DOM interaction)
dynamicList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.textContent += " ✅";
  }
});
