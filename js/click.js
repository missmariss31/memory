//respond to click by updating cardDeck

let matchCard = [];
const indexEls = [];

function respondToTheClick(evt) {
    let suit = evt.target.className.split(' ')[1];
    console.log(suit);
    for (card of cardDeck) {
        const index = cardDeck.indexOf(card);
        if (card.class === suit & card.flip === false) {
            indexEls.push(index);
            if (matchCard.length > 0) {
                if (card.class === cardDeck[matchCard[0]].class) {
                    card.match = true;
                    cardDeck[matchCard[0]].match = true;
                }
                matchCard = [];
            }
            else {
                matchCard.push(index);
            }

            card.flip = true;
            break;
        }
    }
    state.lastCard = evt.target;
    flip(evt.target,indexEls);
}

