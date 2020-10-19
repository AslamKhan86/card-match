import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Button } from 'react-native';
import { withTheme, Icon, Toolbar } from 'react-native-material-ui';
import Card from '../card/Card';
import GameOver from '../card/GameOver';

const styles = StyleSheet.create({
});

class CardView extends React.Component {
  render() {
    const {restartGame, totalCount, isGameOver, shuffledCard, isFlipped, handleClick} = this.props;
    return (
      <div>
        { isGameOver() ? <GameOver restartGame={restartGame} totalCount={totalCount}/> :
        <div className="grid-container">
           {
             shuffledCard.map((cardNumber, index) =>
               <Card
                 key={index}
                 id={index}
                 cardNumber={cardNumber}
                 isFlipped={isFlipped[index]}
                 handleClick={handleClick}
               />
             )
           }
         </div>
        }
      </div>
    );
  }
}

export default CardView;
