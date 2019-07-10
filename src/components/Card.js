import React, { Component } from 'react';

class Card extends React.Component {
    render() {
        return (
            <div>
                {this.props.cards.map((card) => (
                    card.suit == '♥' || card.suit == '♦' ?
                        <h6 style={{ color: 'red' }}>{card.value} {card.suit}</h6>
                        :
                        <h6 style={{ color: 'black' }}>{card.value} {card.suit}</h6>
                ))}
            </div>
        );
    }

}

export default Card;