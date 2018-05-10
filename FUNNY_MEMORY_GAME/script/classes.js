function Card(id, backCard, faceCard) {
    var self = this;
    self.id = id;
    self.backCard = backCard;
    self.faceCard = faceCard;
};
self.getDOMElem = function() {
    var card = document.createElement("div");
    card.className="wrapper_card";
    
    var back = document.createElement("span");
    back.className="back_card";
    
    var front = document.createElement("span");
    front.className="face_card"

    card.appendChild(front);
    card.appendChild(back);

    return card;
};
    static turnCard(event) {
    // cancel if not clicked on card
    if (!event.target.classList.contains('back')) {
        return;
    }

    // cancel if clicked on the first flipped card again
    if (game.getFlippedCards()[0] === event.target.parentNode) {
        return;
    }

    // flip card
    if (game.flippedCardsAmount < 2) {
        event.target.parentNode.classList.add('flipped');
    }

    // increase counter of flipped cards
    game.flippedCardsAmount = game.flippedCardsAmount + 1;

    // compare two flipped cards and remove them or flip them back
    if (game.flippedCardsAmount === 2) {
        const flippedCards = game.getFlippedCards();

        if (game.compareCards(flippedCards)) {
            flippedCards.forEach((elem) => {
                const timeout1 = setTimeout(() => {
                    elem.parentNode.style.opacity = '0';
                }, 1000);
                const timeout2 = setTimeout(() => {
                    game.cards.splice(game.cards.indexOf(elem.parentNode), 1);
                    elem.classList.remove('flipped');
                    elem.style.display = 'none';

                    // stop game if all cards disappeared
                    if (game.cards.length === 0) {
                        // stop timer
                        timer.stop();

                        // clear field, show result
                        game.showResult();

                        // save result into localStorage
                        storeResult();
                    }

                    game.flippedCardsAmount = 0;
                }, 1900);
                game.timeouts.push(timeout1, timeout2);
            });
        } else {
            flippedCards.forEach((elem) => {
                const timeout1 = setTimeout(() => {
                    elem.classList.remove('flipped');
                }, 1000);
                const timeout2 = setTimeout(() => {
                    game.flippedCardsAmount = 0;
                }, 1500);
                game.timeouts.push(timeout1, timeout2);
            });
        }
    }
}
