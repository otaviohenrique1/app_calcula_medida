import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { RootStackParamList } from '../pages/routes';

type NavigationProps = { 
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export interface HeaderProps {
  titulo: string;
  exibeBotaoVoltar?: boolean;
}

export function Header(props: HeaderProps, { navigation }: NavigationProps) {
  return (
    <View style={styles.tituloContainer}>
      {(props.exibeBotaoVoltar) && (
        <TouchableHighlight
          onPress={() => navigation.navigate('Menu')}
        >
          <Text style={styles.titulo}>{'<'}</Text>
        </TouchableHighlight>
      )}
      <Text style={styles.titulo}>
        {props.titulo}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tituloContainer: {
    paddingTop: 30,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  titulo: {
    fontSize: 30,
    width: '100%',
  },
  botaoVoltar: {
    width: 40,
  },
  botaoVoltarTexto: {
    fontSize: 30,
  }
});
