
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
} from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';

function Formulario({
  moneda,
  setMoneda,
  criptoMoneda,
  setCriptoMoneda,
  setCotizando,
}): React.JSX.Element {

  const [criptoMonedaData, setCriptoMonedaData] = useState([]);

  useEffect( () => {
    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const resp = await axios.get(url);
      setCriptoMonedaData(resp.data.Data);
    }

    consultarAPI();
  },[]);

  const handleGetMoneda = (moneda) => {
    setMoneda(moneda);
  }
  const handleGetCriptoMoneda = (cripto) => {
    setCriptoMoneda(cripto);
  }

  const handleCotizar = () => {
    if(moneda === ' ' || criptoMoneda === ' '){
      Alert.alert(
        '!Error...!',
        'Ambos Campos Son Obligatorios'
      );
      return;
    }

    setCotizando(true);
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>Monedas</Text>
      <Picker
        style={styles.picker}
         dropdownIconColor='white'
         dropdownIconRippleColor='gray'
         selectedValue={moneda}
         onValueChange={ (valor) => {
             handleGetMoneda(valor)
         }}
      >
        <Picker.Item label='-- Seleccione --' value=" "/>
        <Picker.Item label='Dolar EUA' value="USD"/>
        <Picker.Item label='Peso Mexicano' value="MXN"/>
        <Picker.Item label='Euro' value="EUR"/>
        <Picker.Item label='Libra Esterlina' value="GBP"/>
        <Picker.Item label='Yen Japones' value="JPY"/>
      </Picker>
      <Text style={styles.label}>Criptomoneda</Text>
      <Picker
         style={styles.picker}
         dropdownIconColor='white'
         dropdownIconRippleColor='gray'
         selectedValue={criptoMoneda}
         onValueChange={ (valor) => {
             handleGetCriptoMoneda(valor)
         }}
      >
        <Picker.Item key={'007'} label='-- Seleccione --' value=" "/>
        { criptoMonedaData.map( (cripto) => (
            <Picker.Item key={cripto.CoinInfo?.id} label={cripto.CoinInfo?.FullName} value={cripto.CoinInfo?.Name}/>
          ))}
      </Picker>

      <TouchableHighlight 
        style={styles.btnCotizar}
        onPress={ () => handleCotizar()}
      >
        <Text style={styles.txtCotizar}>Cotizar</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#2D4B73',
    paddingHorizontal: 10,
  },
  label: {
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    fontSize: 22,
    marginVertical: 20,
    color: '#BF8D30',
  },
  picker: {
    color: '#fff',
  },
  btnCotizar: {
    backgroundColor: '#BF8D30',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  txtCotizar: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Lato-Black', 
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default Formulario;
