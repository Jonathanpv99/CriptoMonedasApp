
import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Image,
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
        setCotizacion(resp.data.DISPLAY[criptoMoneda][moneda]);
        setCotizando(false);
      }

      handleCotizarCriptomoneda();
    }
  },[cotizando]);
 
  return (
    <View>
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
        {Object.keys(cotizacion).length > 0 &&(
          <Cotizacion
            cotizacion={cotizacion}
          />
        )}

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
