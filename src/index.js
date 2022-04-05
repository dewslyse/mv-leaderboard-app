import './style.scss';
import sampleScores from './modules/sample.js';

const scoresList = document.querySelector('.scores-list');

const score = (item) => `
    <div class="score-box">
        <p class="score">${item.name}: <span class="number">${item.score}</span></p>
    </div>
`;

scoresList.innerHTML = `${sampleScores.map(score).join('')}`;