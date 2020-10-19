import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Button } from 'react-native';
import { withTheme, Icon, Toolbar } from 'react-native-material-ui';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    padding: 20,
    flex: 1,
    flexDirection: 'row'
  },
  textContainer: {
    flex: 1
  },
  leftItem: {
    fontSize: 16,
    paddingTop: 10
  },
  rightItem: {
    fontSize: 26,
    textAlign: 'right'
  }
});

class Header extends React.Component {
  render() {
    const {restartGame, totalCount } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
        <Text style={styles.leftItem} onClick={restartGame}>Restart Game</Text>
        </View>
        <View style={styles.textContainer}>
        <Text style={styles.rightItem}><span style={{fontSize:22}}>STEPS:</span>{totalCount}</Text>
        </View>
      </View>
    );
  }
}

export default Header;
