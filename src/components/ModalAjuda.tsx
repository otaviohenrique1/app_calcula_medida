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
      animationType="fade"
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onRequestClose}
    >
      <View style={stylesModal.centeredView}>
        <View style={stylesModal.modalView}>
          <ModalConteudo
            titulo={props.ajudaConteudo[0].titulo}
            lista={props.ajudaConteudo[0].lista}
          />
          <ModalSeparador />
          <ModalConteudo
            titulo={props.ajudaConteudo[1].titulo}
            lista={props.ajudaConteudo[1].lista}
          />
          <ModalSeparador />
          <Pressable
            style={[stylesModal.botao, stylesModal.botaoFechar]}
            onPress={props.onPress}
          >
            <Text style={stylesModal.botaoFecharTitulo}>Fechar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

function ModalSeparador() {
  return (
    <View style={stylesModal.modalConteudoSeparador} />
  );
}

interface ModalConteudoProps {
  titulo: string;
  lista: string[];
}

function ModalConteudo(props: ModalConteudoProps) {
  return (
    <View style={stylesModal.modalConteudoContainer}>
      <Text style={stylesModal.modalConteudoTitulo}>
        {props.titulo}
      </Text>
      <View style={stylesModal.modalConteudoLista}>
        {props.lista.map((item, index) => (
          <Text
            key={index}
            style={stylesModal.modalConteudoListaItem}
          >{item}</Text>
        ))}
      </View>
    </View>
  );
}

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
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  botaoFechar: {
    backgroundColor: "#2196F3",
    marginTop: 20,
  },
  botaoFecharTitulo: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalConteudoSeparador: {
    width: 150,
    height: 2,
    backgroundColor: 'lightgray',
    marginVertical: 10
  },
  modalConteudoContainer: {
    width: '100%',
    marginBottom: 10,
    flexDirection: 'column',
  },
  modalConteudoTitulo: {
    fontSize: 20,
    paddingBottom: 5
  },
  modalConteudoLista: {
    paddingLeft: 15,
  },
  modalConteudoListaItem: {
    fontSize: 15,
  }
});
