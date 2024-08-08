
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';

function Formulario(): React.JSX.Element {

  const [moneda, setMoneda] = useState(' ');
  const [criptoMoneda, setCriptoMoneda] = useState(' ');
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

  return (
    <View>
      <Text style={styles.label}>Monedas</Text>
      <Picker
         //dropdownIconColor='black'
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
         //dropdownIconColor='black'
         dropdownIconRippleColor='gray'
         selectedValue={criptoMoneda}
         onValueChange={ (valor) => {
             handleGetCriptoMoneda(valor)
         }}
      >
        <Picker.Item label='-- Seleccione --' value=" "/>
        { criptoMonedaData.map( (cripto) => (
            <Picker.Item key={cripto?.CoinInfo?.id} label={cripto?.CoinInfo?.FullName} value={cripto?.CoinInfo?.Name}/>
          ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    fontSize: 22,
    marginVertical: 20,
  }
});

export default Formulario;
