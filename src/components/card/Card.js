import React from 'react';
import ReactCardFlip from "react-card-flip";


class Card extends React.Component {
  render() {
    const {id, isFlipped, handleClick, cardNumber} = this.props;
    return (
      <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={1} flipSpeedFrontToBack={1} >
        <button id={id} className={`card card-front ${cardNumber !== -1 ? "" : "hide-card"}`} onClick={handleClick} key="front"> ?
        </button>
        <button id={id} className={`card card-back ${cardNumber !== -1 ? "" : "hide-card"}`} onClick={handleClick} key="back">
          { cardNumber }
        </button>
      </ReactCardFlip>
    );
  }
}

export default Card;
