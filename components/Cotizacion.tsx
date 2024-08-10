
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function Cotizacion({
  cotizacion,
}): React.JSX.Element {

  return (
    <SafeAreaView>
     <Text>cotizacion: {Object.keys(cotizacion).length > 0 ? cotizacion.PRICE : null}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default Cotizacion;
