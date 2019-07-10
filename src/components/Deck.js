import React, { Component } from 'react';
import { helloHelper, makeDeck, shuffle, drawFromDeck, getPopped } from './helpers'
import Card from './Card';
import DrawnCard from './DrawnCard';

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

                {this.state.cards.length == 0 ?
                    <div>
                        <h3>No more cards!</h3><br />
                        <button className="btn btn-success" onClick={() => this.setState({ cards: shuffle() })}>START OVER</button>
                    </div>

                    :
                    <div>
                        <button className="btn btn-success" onClick={() => this.setState({ cards: shuffle() })}>SHUFFLE DECK</button>
                        <button className="btn btn-success" onClick={() => { this.setState({ cards: drawFromDeck() }) }}>DRAW A CARD</button>
                        <br /><br />

                    </div>

                }
                <hr />
                <DrawnCard drawnCard={getPopped()} />
                <h1><Card cards={this.state.cards} /></h1>
            </div>
        );
    }
}

export default Deck;