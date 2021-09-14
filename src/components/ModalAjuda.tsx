import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { GestureResponderEvent } from "react-native";

interface ModalAjudaContainerProps {
  visible?: boolean;
  onRequestClose?: (() => void);
  onPress?: ((event: GestureResponderEvent) => void);
  ajudaConteudo: {
    titulo: string;
    lista: string[];
  }[];
}

export function ModalAjuda(props: ModalAjudaContainerProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onRequestClose}
    >
      <View style={stylesModal.centeredView}>
        <View style={stylesModal.modalView}>
          <View>
            <Text>
              {props.ajudaConteudo[0].titulo}
            </Text>
            {props.ajudaConteudo[0].lista.map((item, index) => (
              <Text key={index}>{item}</Text>
            ))}
          </View>
          <View>
            <Text>
              {props.ajudaConteudo[1].titulo}
            </Text>
            {props.ajudaConteudo[1].lista.map((item, index) => (
              <Text key={index}>{item}</Text>
            ))}
          </View>
          <Pressable
            style={[stylesModal.botao, stylesModal.botaoFechar]}
            onPress={props.onPress}
          >
            <Text style={stylesModal.botaoFecharTitulo}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const stylesModal = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'column',
  },
  botao: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  botaoFechar: {
    backgroundColor: "#2196F3",
  },
  botaoFecharTitulo: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
});
