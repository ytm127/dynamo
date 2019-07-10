import React, { Component } from 'react';
import { helloHelper, makeDeck, shuffle, drawFromDeck, getPopped } from './helpers'
import Card from './Card';

class Deck extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // init a full deck of cards here. 
            cards: makeDeck()
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({ cards: shuffle() })}>SHUFFLE DECK</button>
                <button onClick={() => { this.setState({ cards: drawFromDeck() }) }}>DRAW A CARD</button>
                {/* <h3>{getPopped()}</h3> */}
                <h1><Card cards={this.state.cards} /></h1>
            </div>
        );
    }
}

export default Deck;