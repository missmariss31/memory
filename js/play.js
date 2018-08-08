/*
 * Created a list that holds all cards
 */
const cards = document.querySelectorAll(".card");


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

function shuffle(deck) {
    const array = Array.prototype.slice.call(deck);
    array.sort(function(a,b){ return 0.5 - Math.random() });
    return array;
}

console.log(cards);
const shuffleCards = shuffle(cards);
console.log(shuffleCards);

//get image source for each card
for (const card of shuffleCards) {
    const suit = card.childNodes[1].className;
    source = cardDeck[suit];
    console.log(source);
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