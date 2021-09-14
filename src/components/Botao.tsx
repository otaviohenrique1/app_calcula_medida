import React from 'react';
import { GestureResponderEvent, StyleProp, Text, TextStyle, TouchableHighlight, ViewStyle } from 'react-native';

interface BotaoProps {
  styleTouchableHighlight?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  botaoTexto: string;
}

export function Botao(props: BotaoProps) {
  return (
    <TouchableHighlight
      style={props.styleTouchableHighlight}
      onPress={props.onPress}
    >
      <Text style={props.styleText}>
        {props.botaoTexto}
      </Text>
    </TouchableHighlight>
  );
}

