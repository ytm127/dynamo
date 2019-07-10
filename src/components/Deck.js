import React, { Component } from 'react';
import { helloHelper } from './helpers'

class Deck extends React.Component {

    render() {
        return (
            <div>
                I am the Deck Component
                <h1>{helloHelper()}</h1>
            </div>
        );
    }
}

export default Deck;