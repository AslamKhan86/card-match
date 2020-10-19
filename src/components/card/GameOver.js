
import React from 'react';


class GameOver extends React.Component {
  render() {
    const {restartGame, totalCount} = this.props;
    return (
      <div className="justify-center">
        <h1>Game Over!</h1>
        <h3>You completed in {totalCount} steps</h3>
        <button className="restart-button" onClick={restartGame}>Restart Game</button>
      </div>
    );
  }
}

export default GameOver;
