
const buttons = document.querySelectorAll('.pick');
const scoreElement = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const reset = document.getElementById('reset');
const user_selection = document.getElementById('user_selection');
const computer_selection = document.getElementById('computer_selection');
const winner = document.getElementById('winner');
const choices = ['paper', 'rock', 'scissors'];


//model buttons

const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const model = document.getElementById('model');


let userChoice = undefined;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');


        checkWinner();

    });
});

reset.addEventListener('click', () => {
    // show the selection and hide the main
    main.style.display = 'flex';
    selection.style.display = 'none';
});

openBtn.addEventListener('click', () => {
    model.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    model.style.display = 'none';
});


function checkWinner() {
    const computerChoice = pickRandomChoice();

    //update the view
    updateSelection(user_selection, userChoice);
    updateSelection(computer_selection, computerChoice);

    if (userChoice === computerChoice) {
        // draw
        winner.innerText = 'draw';
    }

    else if (
        (userChoice === 'paper' && computerChoice === 'rock')
        ||
        (userChoice === 'rock' && computerChoice === 'scissors')
        ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        //user wins
        updateScore(1);
        winner.innerText = 'win';
    }
    else {
        // user lost
        updateScore(-1);
        winner.innerText = 'lost';
    }

    // show the selection and hide the main
    main.style.display = 'none';
    selection.style.display = 'flex';

}

let score = 0;
function updateScore(value) {
    score += value;

    if (score < 0) {
        score = 0;
    }

    scoreElement.innerText = score;

}

console.log(pickRandomChoice());
function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
        ;
}

function updateSelection(selectionElement, choice) {

    //class reset

    selectionElement.classList.remove('btn-paper');
    selectionElement.classList.remove('btn-rock');
    selectionElement.classList.remove('btn-scissors');

    //update image

    const img = selectionElement.querySelector('img')
    selectionElement.classList.add(`btn-${choice}`);
    img.src = `./images/icon-${choice}.svg`;
    img.alt = choice;

}

