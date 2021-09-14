import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { ajudaCalculaMedida, CalculaMedida } from '../utils/utils';
import { ContainerApp } from '../components/ContainerApp';
import { Resultado } from '../components/Resultado';
import { FormularioBotoes } from '../components/Formulario';
import { Campo } from '../components/Campo';
import { ModalAjuda } from '../components/ModalAjuda';

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
        exibeBotaoVoltar={true}
        exibeBotaoAjuda={true}
        botaoAjudaFuncao={() => setModalVisivel(true)}
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

/*
import React, { FormEvent, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, GestureResponderEvent, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { CalculaMedida } from '../utils/utils';

const valoresIniciais = {
  campo: '',
  resultado: `${(0).toFixed(2)}`
};

export function CalculaMedidaPage() {
  const [resultado, setResultado] = useState<string>(valoresIniciais.resultado);
  const [campoA, setCampoA] = useState<string>(valoresIniciais.campo);
  const [campoB, setCampoB] = useState<string>(valoresIniciais.campo);
  const [campoC, setCampoC] = useState<string>(valoresIniciais.campo);

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
      let resultado =CalculaMedida({
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
    <View style={styles.container}>
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>Calcula Medida</Text>
      </View>
      <View style={styles.campoContainer}>
        <TextInput
          style={styles.campo}
          value={campoA}
          placeholder='Campo A'
          keyboardType='numeric'
          onChangeText={setCampoA}
        />
        <TextInput
          style={styles.campo}
          value={campoB}
          placeholder='Campo B'
          keyboardType='numeric'
          onChangeText={setCampoB}
        />
        <TextInput
          style={styles.campo}
          value={campoC}
          placeholder='Campo C'
          keyboardType='numeric'
          onChangeText={setCampoC}
        />
        <View style={styles.botaoContainer}>
          <TouchableHighlight
            style={[styles.botao, styles.botaoCalcular]}
            onPress={handleSubmitForm}
          >
            <Text style={styles.botaoTitulo}>Calcular</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.botao, styles.botaoLimpar]}
            onPress={handleResetForm}
          >
            <Text style={styles.botaoTitulo}>Limpar</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.resultadoContainer}>
        <Text style={styles.resultadoTitulo}>Resultado: </Text>
        <Text style={styles.resultado}>{resultado}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  formularioContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  tituloContainer: {
    paddingTop: 30,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  titulo: {
    fontSize: 30,
  },
  campoContainer: {
    marginTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  campo: {
    width: '100%',
    paddingHorizontal: 15,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    fontSize: 15,
  },
  resultadoContainer: {
    paddingHorizontal: 20,
    width: '100%',
    flexDirection: 'column',
  },
  resultadoTitulo: {
    textAlign: 'left',
    fontSize: 30,
  },
  resultado: {
    textAlign: 'right',
    fontSize: 30,
  },
  botaoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
    width: '100%',
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
    marginRight: 10
  },
  botaoLimpar: {
    backgroundColor: 'red',
  },
});
*/
