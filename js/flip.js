//update css when card is clicked
const deckEl = document.querySelector(".deck");
const cardEls = document.querySelectorAll(".card");
const nodesArray = Array.prototype.slice.call(cardEls); //nodes array -> array

function myFlip(state, cardEls) {
    state.cards.forEach((card, i) => {
        let cardEl = cardEls[i];
        if (card.hide) {
            cardEl.className = card.class + " hide";
        }
        if (card.flip) {
            cardEl.className = card.class + " flip";
        }
        if (card.match) {
            cardEl.className = card.class + " flip match";
        }
    });
}

