
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

function Formulario(): React.JSX.Element {

  const [moneda, setMoneda] = useState(' ');
  const [criptoMoneda, setCriptoMoneda] = useState('');

  const handleGetMoneda = (moneda) => {
    console.log('moneda', moneda);
    setMoneda(moneda);
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
         selectedValue={moneda}
         onValueChange={ (valor) => {
             handleGetMoneda(valor)
         }}
      >
        <Picker.Item label='-- Seleccione --' value=""/>
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
