import React, { ReactNode } from 'react';
import { GestureResponderEvent, StyleSheet, View } from 'react-native';
import { Botao } from "./Botao";

interface FormularioBotoesProps {
  handleSubmitForm: ((event: GestureResponderEvent) => void);
  handleResetForm: ((event: GestureResponderEvent) => void);
  handleVoltar: ((event: GestureResponderEvent) => void);
  handleAjuda: ((event: GestureResponderEvent) => void);
}

export function FormularioBotoes(props: FormularioBotoesProps) {
  return (
    <BotaoContainerFormulario>
      <View style={styles.botaoRow}>
        <Botao
          styleTouchableHighlight={[styles.botao, styles.botaoCalcular]}
          styleText={styles.botaoTitulo}
          onPress={props.handleSubmitForm}
          botaoTexto="Calcular"
        />
        <Botao
          styleTouchableHighlight={[styles.botao, styles.botaoLimpar]}
          styleText={styles.botaoTitulo}
          onPress={props.handleResetForm}
          botaoTexto="Limpar"
        />
      </View>
      <View style={styles.botaoRow}>
        <Botao
          styleTouchableHighlight={[styles.botao, styles.botaoVoltar]}
          styleText={styles.botaoTitulo}
          onPress={props.handleVoltar}
          botaoTexto="Voltar"
        />
        <Botao
          styleTouchableHighlight={[styles.botao, styles.botaoAjuda]}
          styleText={styles.botaoTitulo}
          onPress={props.handleAjuda}
          botaoTexto="Ajuda"
        />
      </View>
    </BotaoContainerFormulario>
  );
}

interface BotaoContainerFormularioProps {
  children: ReactNode;
}

function BotaoContainerFormulario(props: BotaoContainerFormularioProps) {
  return (
    <View style={styles.botaoContainer}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  botaoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
    width: '100%',
  },
  botaoRow: {
    flexDirection: 'row',
    marginBottom: 10
  },
  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 50,
    paddingVertical: 30,
    borderRadius: 5,
  },
  botaoTitulo: {
    fontSize: 20,
    color: 'white',
  },
  botaoCalcular: {
    backgroundColor: 'cadetblue',
    marginRight: 10,
  },
  botaoLimpar: {
    backgroundColor: 'blue',
    marginLeft: 10,
  },
  botaoVoltar: {
    backgroundColor: 'blueviolet',
    marginRight: 10,
  },
  botaoAjuda: {
    backgroundColor: 'midnightblue',
    marginLeft: 10,
  },
});
