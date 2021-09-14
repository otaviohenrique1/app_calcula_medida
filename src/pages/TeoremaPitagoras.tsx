import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ContainerApp } from '../components/ContainerApp';
import { RootStackParamList } from './routes';

type NavigationProps = { 
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export function TeoremaPitagoras({ navigation }: NavigationProps) {
  return (
    <ContainerApp
      titulo="Teorema de Pitagoras"
      exibeBotaoVoltar={true}
      styleAdicional={styles.container}
    >
      <Text>Teorema de Pitagoras</Text>
    </ContainerApp>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
