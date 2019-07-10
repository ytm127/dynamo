export const helloHelper = () => {
    return (
        "hi i'm from a helper file"
    );
}

// attributes of a set of cards 
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const suits = ['♥', '♦', '♠', '♣'];
let cards = [];
let popped = '';

// create this data structure to describe a card
class Card {
    constructor(key, value, suit, color) {
        this.key = key;
        this.value = value;
        this.suit = suit;
        this.color = color;
    }

}

// HELPER FUNCTIONS //

// make a deck of cards
export const makeDeck = () => {
    let key = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < suits.length; j++) {
            if (suits[j] == '♥' || suits[j] == '♦') {
                let card = new Card(key, values[i], suits[j], 'red');
                cards.push(card);
                key++;
            }
            else {
                let card = new Card(key, values[i], suits[j], 'black');
                cards.push(card);
                key++;
            }
        }
    }
    return cards;
}

// shuffle deck of cards and restart if deck if empty
export const shuffle = () => {
    let cards2 = cards;
    if (cards.length != 0) {
        // Fisher-Yates 
        for (let i = cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
            [cards[i], cards[j]] = [cards[j], cards[i]]; // swap elements
        }
        testShuffle(cards2, cards);
        return (cards)
    }
    else {
        return makeDeck()
    }
}

// draw a card. GET DECK
export const drawFromDeck = () => {
    if (cards.length != 0) {
        popped = cards.pop();
        console.log(cards);
        return cards
    }
    else {
        console.log('No more cards to draw!')
    }

}

// draw a card. GET the popped card
export const getPopped = () => {
    console.log(popped);
    return popped;
}

// TESTS
const testShuffle = (cards2, cards) => {
    if (cards2 != cards) {
        alert("Shuffle did NOT work");
    }
    else {
        console.log("Shuffle worked!")
    }
}

