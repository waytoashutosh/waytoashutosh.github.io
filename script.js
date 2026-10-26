'use strict';

// All project copy lives in index.html; no build process or framework is required.
const filterButtons = document.querySelectorAll('[data-filter]');
const projectCards = document.querySelectorAll('[data-categories]');
const filterStatus = document.getElementById('filter-status');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filterButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    let visibleCount = 0;
    projectCards.forEach((card) => {
      const visible = category === 'all' || card.dataset.categories.split(' ').includes(category);
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    const label = category === 'all' ? 'all projects' : button.textContent.trim();
    filterStatus.textContent = `Showing ${visibleCount} projects: ${label}.`;
  });
});

const directionButtons = document.querySelectorAll('[data-direction]');
const terrainPanel = document.querySelector('.terrain-panel');
const directionArrow = document.getElementById('direction-arrow');
const directionStatus = document.getElementById('direction-status');

directionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const descending = button.dataset.direction === 'descent';
    terrainPanel.dataset.direction = button.dataset.direction;
    directionButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    directionArrow.setAttribute('d', descending ? 'm111 286-11 7 12 5' : 'm434 173 11 6-10 7');
    directionStatus.textContent = `The reference path points ${descending ? 'down' : 'up'} the stairs. This is a concept illustration.`;
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
