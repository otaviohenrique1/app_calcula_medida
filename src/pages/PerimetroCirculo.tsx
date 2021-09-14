import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Botao } from '../components/Botao';
import { ContainerApp } from '../components/ContainerApp';
import { RootStackParamList } from './routes';

type NavigationProps = { 
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export function PerimetroCirculo({ navigation }: NavigationProps) {
  return (
    <ContainerApp
      titulo="Perimetro do Circulo"
      exibeBotaoVoltar={true}
      styleAdicional={styles.container}
    >
      <Text>Perimetro do Circulo</Text>
    </ContainerApp>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
