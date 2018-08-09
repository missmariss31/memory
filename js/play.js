/*
 * Created a list that holds all HTML Card Elements
 */
const deckEl = document.querySelector(".deck");
const cardEls = document.querySelectorAll(".card");
console.log(cardEls);

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

function shuffle(deck) {
    deck.sort(function(a,b){ return 0.5 - Math.random() });
    return deck;
}

const shuffledDeck = shuffle(cardDeck);

function dealTheDeck(deckElements) {
    i=0
    for (const el of deckElements) {
        el.className = shuffleDeck[i].class;
        i++;
    }
}


//add HTML to page

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */