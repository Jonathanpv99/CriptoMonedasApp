
import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';

function App(): React.JSX.Element {

  const [moneda, setMoneda] = useState(' ');
  const [criptoMoneda, setCriptoMoneda] = useState(' ');
  const [cotizando, setCotizando] = useState(false);
  const [cotizacion, setCotizacion] = useState({});

  useEffect( () => {
    if(cotizando){

      const handleCotizarCriptomoneda = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;

        const resp = await axios.get(url);
           
        setTimeout( () => {
          setCotizacion(resp.data.DISPLAY[criptoMoneda][moneda]);
          setCotizando(false);
        }, 3000);
      }

      handleCotizarCriptomoneda();
    }
  },[cotizando]);
 
  return (
      <ScrollView>
        <StatusBar barStyle="light-content" backgroundColor="#5E49E2" />
        <Header/>

        <Image
          style={styles.img}
          source={ require('./assets/img/cryptomonedas.png')}
        />

        <View style={styles.contenido}>
          <Formulario
            moneda={moneda}
            setMoneda={setMoneda}
            criptoMoneda={criptoMoneda}
            setCriptoMoneda={setCriptoMoneda}
            setCotizando={setCotizando}
          />

        </View>
          {cotizando ? (
            <ActivityIndicator 
              style={styles.spinner}
              size={'large'}
            />
          ): (
            <Cotizacion
            cotizacion={cotizacion}
          />
          )}
      </ScrollView>
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
  },
  spinner: {
    marginTop: 20,
  },
});

export default App;
