import React from 'react';
import { KeyboardTypeOptions, StyleProp, StyleSheet, TextInput, ViewStyle } from 'react-native';

interface CampoProps {
  styleAdicional?: StyleProp<ViewStyle>;
  value?: string | undefined;
  placeholder?: string | undefined;
  keyboardType?: KeyboardTypeOptions | undefined
  onChangeText?: ((text: string) => void) | undefined
}

export function Campo(props: CampoProps) {
  return (
    <TextInput
      style={[styles.campo, props.styleAdicional]}
      value={props.value}
      placeholder={props.placeholder}
      keyboardType={props.keyboardType}
      onChangeText={props.onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  campo: {
    width: '100%',
    paddingHorizontal: 15,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    fontSize: 15,
  },
});