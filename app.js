// SELECT ELEMENTS
const inputItem = document.getElementById("input-item");
const addBtn = document.querySelector(".add");
const list = document.querySelector(".list");

class View {
  static displayItem() {
    const storedItems = ["Banana", "Apple", "Milk"];
    const items = storedItems;

    items.forEach(item => View.addItemToList(item));
  }

  static addItemToList(item) {
    const row = document.createElement("div");
    row.classList.add("item");

    row.innerHTML = `
        <p class="text-item">${item}</p>
        <i class="material-icons delete">highlight_off</i>
      `;

    list.appendChild(row);
  }

  static clearField() {
    inputItem.value = "";
  }

  static deleteItem(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.remove();
    }
  }

  static lineThrough(el) {
    if (el.classList.contains("text-item")) {
      if (el.classList.contains("line-through")) {
        el.classList.remove("line-through");
      } else {
        el.classList.add("line-through");
      }
    }
  }
}

// EVENT LISTENERS
// Display Items
document.addEventListener("DOMContentLoaded", View.displayItem());

// Add Item to the List By Clicking the Button
addBtn.addEventListener("click", validation);

// Add Item to the List By Pressing Enter
inputItem.addEventListener("keyup", e => {
  if (e.keyCode === 13) {
    validation();
  }
});

// DELETE ITEMS
list.addEventListener("click", e => {
  View.deleteItem(e.target);
});

// Event : Line-Trough text
list.addEventListener("click", e => {
  View.lineThrough(e.target);
});

// FUNCTIONS

function validation() {
  if (inputItem.value === "") {
    alert("ERROR: Empty Field");
  } else {
    itemAdder();
  }
}

function itemAdder() {
  let item = inputItem.value;

  //Upercase the First Letter
  item = item.charAt(0).toUpperCase() + item.slice(1);

  // Add item to the View
  View.addItemToList(item);

  // Clear the Input Field
  View.clearField();
}
