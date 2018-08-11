//Function that responds to click by changing className

let matchList = [];

function respondToTheClick(evt) {
    let suit = evt.target.className.split(' ')[1];
    console.log(suit);
    for (card of cardDeck) {
        if (card.class === suit) {
            card.flip = true;
            break;
        }
    }
    console.log(cardDeck);
}

