import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Botao } from '../components/Botao';
import { ContainerApp } from '../components/ContainerApp';
import { RootStackParamList } from './routes';

type NavigationProps = { 
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export function MenuPage({ navigation }: NavigationProps) {
  return (
    <ContainerApp
      titulo="Menu"
      exibeBotaoVoltar={true}
      styleAdicional={styles.container}
    >
      <Botao
        styleTouchableHighlight={styles.botao}
        styleText={styles.botaoTitulo}
        botaoTexto="Calcula Medida"
        onPress={() => navigation.navigate('CalculaMedida')}
      />
      <Botao
        styleTouchableHighlight={styles.botao}
        styleText={styles.botaoTitulo}
        botaoTexto="Teorema de Pitagoras"
        onPress={() => navigation.navigate('TeoremaPitagoras')}
      />
      <Botao
        styleTouchableHighlight={styles.botao}
        styleText={styles.botaoTitulo}
        botaoTexto="Perimetro do Circulo"
        onPress={() => navigation.navigate('PerimetroCirculo')}
      />
    </ContainerApp>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    paddingVertical: 30,
    borderRadius: 5,
    backgroundColor: 'cornflowerblue',
    marginBottom: 10,
  },
  botaoTitulo: {
    fontSize: 20,
    color: 'white',
  },
});
