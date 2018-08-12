
const state = {
    cards: cardDeck,
    timer: 0,
    stars: 3,
    lastCard: null,
    moves: 0,
};

//List of all card elements
console.log(cardEls);

//select restart
const restart = document.querySelector('.restart');

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

//shuffle the cards
function shuffle(deck) {
    deck.sort(function(a,b){ return 0.5 - Math.random() });
    return deck;
}

state.cards = shuffle(state.cards);

//deal the deck with cards face down
function dealTheDeck(deckElements) {
    let i=0;
    for (const el of deckElements) {
        el.className = "card " + state.cards[i].class + " hide";
        i++;
    }
}

dealTheDeck(cardEls);



/*
 * set up the event listeners
 */

//cards
deckEl.addEventListener("click", respondToTheClick);

//timer
setInterval(()=>{state.timer++;},1000);

//stars
const stars = Array.prototype.slice.call(document.querySelectorAll('.star'));
setInterval(()=>{
    if(state.timer % 100 === 0 & state.stars !== 0) {
        stars[state.stars-1].className += " ex";
        state.stars -= 1;
    }
},1000);

//restart
//restart.addEventListener("click", restartGame);