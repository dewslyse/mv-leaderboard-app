const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const id = '6H5Lm7fIzkXRR1Mm0Eoi';

//Get  game id
const newGame = async () => {
    const response = await fetch(baseURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Game of Games' }),
    });
    const data = await response.json();
    return data;
};

//Create user score
const addScore = async (user, score) => {
    const response = await fetch(`${baseURL}/${id}/scores/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            user,
            score: Number(score)
        }),
    });
    const res = await response.json();
    return res;
};

//Retrieve user scores
const retrieveScores = async () => {
    const response = await fetch(`${baseURL}/${id}/scores/`);
    const allScores = await response.json();
    return allScores;
};

const displayScores = async (userData) => {
    const scoresList = document.querySelector('.scores-list');

    userData = await retrieveScores();

    scoresList.innerHTML = '';

    userData.result.forEach((item) => {
        const score = `
            <div class="score-box">
                <p class="score">${item.user}: <span class="number">${item.score}</span></p>
            </div>
        `;
        scoresList.innerHTML += score;
    });
}

export { addScore, retrieveScores, displayScores };