import React, { Component } from 'react';

class Card extends React.Component {
    render() {
        return (
            <div>
                {this.props.cards.map((card) => (
                    <h6>{card.value} {card.suit} {card.color}</h6>
                ))}
            </div>
        );
    }

}

export default Card;