import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { ajudaCalculaMedida, CalculaMedida } from '../utils/utils';
import { ContainerApp } from '../components/ContainerApp';
import { Resultado } from '../components/Resultado';
import { FormularioBotoes } from '../components/Formulario';
import { Campo } from '../components/Campo';
import { ModalAjuda } from '../components/ModalAjuda';
import { useNavigation } from '@react-navigation/core';

const valoresIniciais = {
  campo: '',
  resultado: `${(0).toFixed(2)}`
};

export function CalculaMedidaPage() {
  const [resultado, setResultado] = useState<string>(valoresIniciais.resultado);
  const [campoA, setCampoA] = useState<string>(valoresIniciais.campo);
  const [campoB, setCampoB] = useState<string>(valoresIniciais.campo);
  const [campoC, setCampoC] = useState<string>(valoresIniciais.campo);
  const [modalVisivel, setModalVisivel] = useState(false);
  const navigation = useNavigation();

  function handleSubmitForm() {
    let valorA = parseFloat(campoA);
    let valorB = parseFloat(campoB);
    let valorC = parseFloat(campoC);

    const validaCampoA = campoA.trim().length === 0;
    const validaCampoB = campoB.trim().length === 0;
    const validaCampoC = campoC.trim().length === 0;
    let validaCampo = validaCampoA || validaCampoB || validaCampoC;

    if (validaCampo) {
      return Alert.alert('Erro', 'Campos vazios');
    } else {
      let resultado = CalculaMedida({
        campoA: valorA,
        campoB: valorB,
        campoC: valorC,
      });
      setCampoC(valoresIniciais.campo);
      setResultado(`${resultado}`);
    }
  }

  function handleResetForm() {
    setResultado(valoresIniciais.resultado);
    setCampoA(valoresIniciais.campo);
    setCampoB(valoresIniciais.campo);
    setCampoC(valoresIniciais.campo);
  }
  return (
    <>
      <ContainerApp
        titulo="Calcula Medida"
        exibeBotaoVoltar={false}
        exibeBotaoAjuda={false}
      >
        <View style={styles.campoContainer}>
          <Campo
            value={campoA}
            placeholder='Campo A'
            keyboardType='numeric'
            onChangeText={setCampoA}
          />
          <Campo
            value={campoB}
            placeholder='Campo B'
            keyboardType='numeric'
            onChangeText={setCampoB}
          />
          <Campo
            value={campoC}
            placeholder='Campo C'
            keyboardType='numeric'
            onChangeText={setCampoC}
          />
        </View>
        <Resultado
          resultado={resultado}
        />
        <FormularioBotoes
          handleSubmitForm={handleSubmitForm}
          handleResetForm={handleResetForm}
          handleAjuda={() => setModalVisivel(true)}
          handleVoltar={() => navigation.goBack()}
        />
      </ContainerApp>
      <ModalAjuda
        visible={modalVisivel}
        onRequestClose={() => {
          setModalVisivel(!modalVisivel);
        }}
        onPress={() => setModalVisivel(!modalVisivel)}
        ajudaConteudo={ajudaCalculaMedida}
      />
    </>
  );
}

const styles = StyleSheet.create({
  campoContainer: {
    marginTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
});
