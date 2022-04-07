import './style.scss';
import * as APIs from './modules/api.js'

const refreshBtn = document.querySelector('.refresh-btn');
const addBtn = document.querySelector('.add-btn');
const form = document.querySelector('.form');

document.addEventListener('DOMContentLoaded', APIs.displayScores);

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let userName = document.getElementById('add-name').value;
    let userScore = document.getElementById('add-score').value;

    APIs.addScore(userName, userScore);
    form.reset();
});

refreshBtn.addEventListener('click', (e) => {
    e.preventDefault();
    APIs.displayScores();
});