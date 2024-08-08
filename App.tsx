
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App(): React.JSX.Element {

  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor="#5E49E2" />
      <Header/>

      <Image
        style={styles.img}
        source={ require('./assets/img/cryptomonedas.png')}
      />

      <View style={styles.contenido}>
        <Formulario/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
  contenido: {
    marginHorizontal: '2.5%',
  }
});

export default App;
