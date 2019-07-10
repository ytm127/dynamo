import React, { Component } from 'react';

class DrawnCard extends React.Component {
    render() {
        return (
            <div>
                <h3>You drew:</h3>
                {
                    this.props.drawnCard.suit == '♥' || this.props.drawnCard.suit == '♦'
                        ?
                        <h3 style={{ color: 'red' }}>{this.props.drawnCard.value} {this.props.drawnCard.suit}</h3>
                        :
                        <h3 style={{ color: 'black' }}>{this.props.drawnCard.value} {this.props.drawnCard.suit}</h3>
                }

            </div>
        );
    }
}

export default DrawnCard;