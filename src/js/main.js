// src/js/main.js

import Modal from 'bootstrap/js/dist/modal';
import Dropdown from 'bootstrap/js/dist/dropdown';

document.addEventListener('DOMContentLoaded', () => {
  const modalElement = document.getElementById('myModal');

  if (modalElement) {
    const myModal = new Modal(modalElement);

    document.getElementById('openModalBtn')?.addEventListener('click', () => {
      myModal.show();
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
    // Initialize all dropdowns on the page
    document.querySelectorAll('.dropdown-toggle').forEach(dropdownToggleEl => {
      new Dropdown(dropdownToggleEl);
    });
});