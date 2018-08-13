//respond to click by updating card
/*
function respondToTheClick(evt) {
     for (const card of state.cards) {
        if (card.id === evt.target.id) {
            card.flip = true;
            card.hide = false;
            if (state.moves % 2 === 0) {
                if (evt.target === state.lastCard) {
                    card.match = true;
                }else {
                    setTimeout(()=> {
                        card.flip = false;
                        card.hide = true;
                    },3000);
                }
            }
            break;
         }
     }
    state.lastCard = evt.target;
    state.moves += 1;
}
*/

function myRespondToClick(event) {
    // Find the card in the state that corresponds to the clicked card
    const currentCard = state.cards.find(c => c.id.toString() === event.target.id);
    console.log(currentCard);

    // update how it's flipped
    currentCard.flip = true;
    currentCard.hide = false;

    // If it's an even numbered move
    if (state.moves % 2 === 0) {
        // Is it a match?
        if (state.lastCard && state.lastCard.type === currentCard.type) {
            currentCard.match = true;
            state.lastCard.match = true;
        } else {
            setTimeout(()=> {
                // Flip over the current card
                currentCard.flip = false;
                currentCard.hide = true;

                // Flip over the last card
                state.lastCard.flip = false;
                state.lastCard.hide = true;
            }, 3000);
        }
    }else {
        //store current card in lastCard to check for match on next click
        state.lastCard = currentCard;
    }
    //add one to moves
    state.moves += 1;
}

