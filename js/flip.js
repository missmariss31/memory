//update css when card is clicked
const deckEl = document.querySelector(".deck");
const cardEls = document.querySelectorAll(".card");
const nodesArray = Array.prototype.slice.call(cardEls); //nodes array -> array

function myFlip(state, cardEls) {
    
    //keep track of how many cards match
    let matched = 0
    state.cards.forEach((card, i) => {
        let cardEl = cardEls[i];
        //should the card be hidden?
        if (card.hide) {
            cardEl.className = card.class + " hide";
        }
        //should the card flip over?
        if (card.flip) {
            cardEl.className = card.class + " flip";
        }
        //does the card have a match?
        if (card.match) {
            cardEl.className = card.class + " flip match";
            if (matched !== null) {
                matched++;
            }
        }
    });

    //alert player and show stats
    if (matched === 16) {
        document.querySelector("#win").innerHTML = `Congratulations! Your time was ${state.timer} seconds, 
        you got ${state.stars} stars, and you completed the game in ${state.moves/2-0.5} moves! 
        Let's try again!  Click "Restart" to try again.`;  
        clearInterval(checkState);
    }else {
        //update timer and moves
        timer();
        moves();
    }
}
