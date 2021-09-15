import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { Campo } from '../components/Campo';
import { ContainerApp } from '../components/ContainerApp';
import { FormularioBotoes } from '../components/Formulario';
import { ModalAjuda } from '../components/ModalAjuda';
import { Resultado } from '../components/Resultado';
import { ajudaPerimetroCirculo, CalculaPerimetroCirculo } from '../utils/utils';

const valoresIniciais = {
  campo: '',
  resultado: `${(0).toFixed(2)}`
};

export function PerimetroCirculo() {
  const [resultado, setResultado] = useState<string>(valoresIniciais.resultado);
  const [campoValor, setCampoValor] = useState<string>(valoresIniciais.campo);
  const [modalVisivel, setModalVisivel] = useState(false);
  const navigation = useNavigation();

  function handleSubmitForm() {
    let valor = parseFloat(campoValor);

    const validaCampoA = campoValor.trim().length === 0;
    let validaCampo = validaCampoA ;

    if (validaCampo) {
      return Alert.alert('Erro', 'Campos vazios');
    } else {
      let resultado = CalculaPerimetroCirculo({
        valor
      });
      setCampoValor(valoresIniciais.campo);
      setResultado(`${resultado}`);
    }
  }

  function handleResetForm() {
    setResultado(valoresIniciais.resultado);
    setCampoValor(valoresIniciais.campo);
  }

  return (
    <>
      <ContainerApp
        titulo="Perimetro do Circulo"
        exibeBotaoVoltar={false}
        exibeBotaoAjuda={false}
        styleAdicional={styles.containerApp}
        styleAdicionalTitulo={styles.titulo}
      >
        <View style={styles.containerMain}>
          <Circulo />
          <Campo
            placeholder="Valor"
            keyboardType="numeric"
            onChangeText={setCampoValor}
            value={campoValor}
            styleAdicional={styles.campo}
          />
          <Resultado
            resultado={resultado}
          />
          <FormularioBotoes
            handleSubmitForm={handleSubmitForm}
            handleResetForm={handleResetForm}
            handleAjuda={() => setModalVisivel(true)}
            handleVoltar={() => navigation.goBack()}
          />
        </View>
      </ContainerApp>
      <ModalAjuda
        visible={modalVisivel}
        onRequestClose={() => {
          setModalVisivel(!modalVisivel);
        }}
        onPress={() => setModalVisivel(!modalVisivel)}
        ajudaConteudo={ajudaPerimetroCirculo}
      />
    </>
  );
}

function Circulo() {
  return (
    <View style={styles.circuloContainer}>
      <View style={styles.circulo}/>
      <View style={styles.legendaContainer}>
        <Text style={styles.legendaLinhaTitulo}>Perimetro =</Text>
        <View style={styles.legendaLinha} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerApp: {
    paddingHorizontal: 10,
  },
  titulo: {
    fontSize: 25,
  },
  containerMain: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  circuloContainer: {
    width: "100%",
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 30,
  },
  circulo: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: "green",
    borderColor: 'black',
    borderWidth: 5,
  },
  legendaContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginLeft: 10,
    height: '100%'
  },
  legendaLinha: {
    width: 5,
    height: 20,
    backgroundColor: "black",
    marginLeft: 5,
  },
  legendaLinhaTitulo: {
    fontSize: 20,
  },
  campo: {
    marginBottom: 30,
  },
});
