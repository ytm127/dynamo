import React, { Component } from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="row">
                {this.props.cards.map((card) => (
                    card.suit == '♥' || card.suit == '♦' ?
                        <div className="col-3 card">
                            <div className="card-body">
                                <h6 style={{ color: 'red', margin: 'auto' }}>{card.value} {card.suit}</h6>
                            </div>
                        </div>
                        :
                        <div className="col-3 card">
                            <div className="card-body">
                                <h6 style={{ color: 'black', margin: 'auto' }}>{card.value} {card.suit}</h6>
                            </div>
                        </div>
                ))}
            </div>
        );
    }

}

export default Card;