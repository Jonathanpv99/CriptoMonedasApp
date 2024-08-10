
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

function Cotizacion({
  cotizacion,
}): React.JSX.Element {

  if(Object.keys(cotizacion).length === 0) return null;

  return (
    <View style={styles.resultado}>
     <Text style={[styles.texto, styles.precio]}>
      <Text style={styles.span}>{cotizacion.PRICE}</Text>
    </Text>
    <Text style={styles.texto}>Precio más Alto del dia: {' '}
      <Text style={styles.span}>{cotizacion.HIGHDAY}</Text>
    </Text>
    <Text style={styles.texto}>Precio más Bajo del dia: {' '}
      <Text style={styles.span}>{cotizacion.LOWDAY}</Text>
    </Text>
    <Text style={styles.texto}>Ultimas 24 Horas: {' '}
      <Text style={styles.span}>{cotizacion.CHANGEPCT24HOUR} %</Text>
    </Text>
    <Text style={styles.texto}>Ultima Actualización: {' '}
      <Text style={styles.span}>{cotizacion.LASTUPDATE}</Text>
    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  resultado:{
    backgroundColor: '#99B4BF',
    padding: 20,
    marginVertical: 20,
  },
  texto: {
    color: '#253C59',
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    marginBottom: 10,
  },
  span: {
    fontFamily: 'Lato-Black',
    color: '#BF8D30',
  },
  precio: {
    fontSize: 38,
  },
});

export default Cotizacion;
