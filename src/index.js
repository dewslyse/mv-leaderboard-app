import './style.scss';
import * as APIs from './modules/api.js';

const refreshBtn = document.querySelector('.refresh-btn');
const form = document.querySelector('.form');

document.addEventListener('DOMContentLoaded', APIs.displayScores);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userName = document.getElementById('add-name').value;
  const userScore = document.getElementById('add-score').value;

  APIs.addScore(userName, userScore);
  form.reset();
});

refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  APIs.displayScores();
});