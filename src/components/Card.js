import React, { Component } from 'react';

class Card extends React.Component {
    render() {
        return (
            <div>
                {this.props.cards.map((card) => (
                    card.suit == '♥' || card.suit == '♦' ?
                        <h6 style={{ color: 'red', border: 'black solid 1px', width: '20%', margin: 'auto' }}>{card.value} {card.suit}</h6>
                        :
                        <h6 style={{ color: 'black', border: 'black solid 1px', width: '20%', margin: 'auto' }}>{card.value} {card.suit}</h6>
                ))}
            </div>
        );
    }

}

export default Card;