//update css when card is clicked

const deckEl = document.querySelector(".deck");
const cardEls = document.querySelectorAll(".card");
const nodesArray = Array.prototype.slice.call(cardEls); //nodes array -> array

//takes in two arguments, the event target and the element index list
function flip(card, indexList) {
    const classes = card.className.split(' ');
    card.className = `${classes[0]} ${classes[1]} flip`;
    for (i of cardDeck) {
        if (i.class === classes[1] & i.match) {
            const matchedIndex = indexList[indexList.length - 2];
            const matchedCard = nodesArray[matchedIndex].className;
            card.className += ' match';
            nodesArray[matchedIndex].className = matchedCard + ' match';
            break;
        }
        else {
            if(indexList.length % 2 === 0){
                setTimeout(()=>{
                    card.className = classes.join(' ');
                },2000);
            }
        }
    }

}