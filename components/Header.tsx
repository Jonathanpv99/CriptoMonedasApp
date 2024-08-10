
import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

function Header(): React.JSX.Element {

  return (
    <Text style={styles.header}>CriptoMonedas</Text>
  );
}

const styles = StyleSheet.create({
  header: {
    fontFamily: 'Lato-Black',
    backgroundColor: '#2D4B73',
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#fff',
  },
});

export default Header;
