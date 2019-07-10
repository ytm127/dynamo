import React, { Component } from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="row" >
                {this.props.cards.map((card) => (
                    card.suit == '♥' || card.suit == '♦' ?
                        <div className="col-2 card" style={{ color: 'red' }}>
                            <div style={{ marginRight: '3em' }}>{card.suit}</div>
                            <div className="card-body" >
                                <h3 style={{ margin: 'auto' }}>{card.value} </h3>
                            </div>
                            <div style={{ transform: 'rotate(180deg)', marginLeft: '3em' }}>{card.suit}</div>
                        </div>
                        :
                        <div className="col-2 card" style={{ color: 'black' }}>
                            <div style={{ marginRight: '3em' }}>{card.suit}</div>
                            <div className="card-body" >
                                <h3 style={{ margin: 'auto' }}>{card.value} </h3>
                            </div>
                            <div style={{ transform: 'rotate(180deg)', marginLeft: '3em' }}>{card.suit}</div>
                        </div>
                ))}
            </div>
        );
    }

}

export default Card;