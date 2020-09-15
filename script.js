"use strict";
/* eslint-disable quotes / / eslint-disable no-console / / eslint-disable no-undef / / eslint-disable strict */

// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list

function main() {
  // waiting for the dom to be ready
  $("#js-shopping-list-form").on("submit", (e) => {
    e.preventDefault();
    let addItem = $("#shopping-list-entry").val();
    console.log(addItem);

    let template = `<li>
        <span class="shopping-item">${addItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;

      $('.shopping-list').append(template); 
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', (event) => {
    let toggledButton = $(event.currentTarget).parent().siblings();
    //console.log(toggledButton); 
    //console.log("button was clicked")
    toggledButton.toggleClass('shopping-item__checked');
  });

  $('.shopping-list').on('click', '.shopping-item-delete', (event) => {
    let removeButton = $(event.currentTarget).closest('li');
    removeButton.remove();
  });
}

$(main);
