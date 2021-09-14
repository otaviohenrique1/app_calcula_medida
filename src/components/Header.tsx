import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { GestureResponderEvent, StyleProp, StyleSheet, Text, TextStyle, TouchableHighlight, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export interface HeaderProps {
  titulo: string;
  exibeBotaoVoltar?: boolean;
  exibeBotaoAjuda?: boolean;
  botaoAjudaFuncao?: any;
  styleAdicionalTitulo?: StyleProp<TextStyle>;
}

export function Header(props: HeaderProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.tituloContainer}>
      {(props.exibeBotaoVoltar) && (
        <TouchableHighlight
          onPress={() => navigation.goBack()}
          style={styles.botaoVoltar}
        >
          <AntDesign name="arrowleft" size={40} color="white" />
        </TouchableHighlight>
      )}
      <Text style={[styles.titulo, props.styleAdicionalTitulo]}>
        {props.titulo}
      </Text>
      {(props.exibeBotaoVoltar) && (
        <TouchableHighlight
          onPress={props.botaoAjudaFuncao}
          style={styles.botaoAjuda}
        >
          <Feather name="help-circle" size={40} color="white" />
        </TouchableHighlight>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  tituloContainer: {
    flexDirection: 'row',
    // paddingTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'steelblue',
    height: 80,
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    width: '100%',
    color: 'white',
  },
  botaoVoltar: {
    borderRadius: 20,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 5,
  },
  botaoAjuda: {
    borderRadius: 20,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 5,
  },
});
