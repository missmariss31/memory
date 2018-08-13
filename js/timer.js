//timer and moves

//update page to reflect current time
function timer () {
    const timerText = document.querySelector(".timer");
    timerText.textContent = state.timer;
}

//update page to reflect current number of moves
function moves () {
    const movesText = document.querySelector(".moves");
    movesText.textContent = state.moves/2 - 0.5;
}