import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ResultadoProps {
  resultado: string;
}

export function Resultado(props: ResultadoProps) {
  return (
      <View style={styles.resultadoContainer}>
        <Text style={styles.resultadoTitulo}>Resultado: </Text>
        <Text style={styles.resultado}>{props.resultado}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  resultadoContainer: {
    paddingHorizontal: 20,
    width: '100%',
    flexDirection: 'column',
  },
  resultadoTitulo: {
    textAlign: 'left',
    fontSize: 30,
  },
  resultado: {
    textAlign: 'right',
    fontSize: 30,
  },
});
