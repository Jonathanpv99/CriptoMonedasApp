
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
    backgroundColor: '#5E49E2',
    padding: 20,
    marginTop: 40,
  },
  texto: {
    color: '#fff',
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    marginBottom: 10,
  },
  span: {
    fontFamily: 'Lato-Black',
  },
  precio: {
    fontSize: 38,
  },
});

export default Cotizacion;
