//respond to click by updating card

function myRespondToClick(event) {
    // Find the card in the state that corresponds to the clicked card
    const currentCard = state.cards.find(c => c.id.toString() === event.target.id);
    console.log(currentCard);

    // update how it's flipped
    currentCard.flip = true;
    currentCard.hide = false;

    // If it's an even numbered move
    if (state.moves % 2 === 0) {
        // Is there a lastCard?  Is it a match?  Was a different card clicked?
        if (state.lastCard && 
            state.lastCard.type === currentCard.type &&
            state.lastCard.id !== currentCard.id) {
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
            }, 600);
        }
    }else {
        //store current card in lastCard to check for match on next click
        state.lastCard = currentCard;
    }
    //add one to moves
    state.moves += 1;
}

