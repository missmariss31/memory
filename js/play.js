
const state = {
    cards: cardDeck,
    timer: 0,
    stars: 3,
    lastCard: null,
    moves: 1,
};

//List of all card elements
console.log(cardEls);

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
        el.className = state.cards[i].class;
        el.id = state.cards[i].id;
        i++;
    }
}

dealTheDeck(cardEls);



/*
 * set up the event listeners
 */

//cards
//deckEl.addEventListener("click", respondToTheClick);
deckEl.addEventListener("click", myRespondToClick);

//restart
const restart = document.querySelector('.restart');
restart.addEventListener("click", () => {
    window.location.reload(false);
});

//timer
setInterval(()=>{state.timer++;},1000);

//stars
const stars = Array.prototype.slice.call(document.querySelectorAll('.star'));
setInterval(()=>{
    if(state.timer % 60 === 0 & state.stars !== 0) {
        stars[state.stars-1].className += " ex";
        state.stars -= 1;
    }
},1000);

//check for changes in state
let checkState = setInterval(()=>{myFlip(state, nodesArray)},60);
checkState;