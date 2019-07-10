import React, { Component } from 'react';
import { helloHelper, makeDeck } from './helpers'
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
                I am the Deck Component
                <h1>{helloHelper()}</h1>
                <h1><Card /></h1>
            </div>
        );
    }
}

export default Deck;