let matchList = [];


function respondToTheClick(evt) {
    const suit = evt.target.childNodes[1].className;
    const imgUrl = cardDeck[suit];
    console.log(suit + ' was clicked.');
    evt.target.style.backgroundImage = `url("${imgUrl}")`;
    
    if (matchList.includes(suit)) {
        evt.target.style.border = "2px solid yellow";
        matchList = [];
    }
    else {
        if (matchList.length > 0) {
            setTimeout(()=>{evt.target.style.backgroundImage = "none";},2000);
            matchList = [];
        }
        matchList.push(suit);
    }
}

