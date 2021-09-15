import { StatusBar } from 'expo-status-bar';
import React, { ReactNode } from 'react';
import { View, StyleProp, Text, TouchableHighlight, ViewStyle, StyleSheet, ScrollView } from 'react-native';
import { Header, HeaderProps } from './Header';

interface ContainerProps {
  styleAdicional?: StyleProp<ViewStyle>
  children: ReactNode;
}

export function Container(props: ContainerProps) {
  return (
    <View style={[styles.container, props.styleAdicional]}>
        {props.children}
    </View>
  );
}

export function ContainerApp(props: ContainerProps & HeaderProps ) {
  return (
    <Container>
      <Header
        titulo={props.titulo}
        exibeBotaoVoltar={props.exibeBotaoVoltar}
        styleAdicionalTitulo={props.styleAdicionalTitulo}
      />
      <ScrollView>
        {props.children}
      </ScrollView>
      <StatusBar style="auto" />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
