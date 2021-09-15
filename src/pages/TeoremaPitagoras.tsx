import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Campo } from '../components/Campo';
import { ContainerApp } from '../components/ContainerApp';
import { FormularioBotoes } from '../components/Formulario';
import { ModalAjuda } from '../components/ModalAjuda';
import { Resultado } from '../components/Resultado';
import { ajudaTeoremaPitagoras, CalculaTeoremaPitagoras } from '../utils/utils';

const valoresIniciais = {
  campo: '',
  resultado: `${(0).toFixed(2)}`
};

export function TeoremaPitagoras() {
  const [resultado, setResultado] = useState<string>(valoresIniciais.resultado);
  const [hipotenusa, setHipotenusa] = useState<string>(valoresIniciais.campo);
  const [catetoA, setCatetoA] = useState<string>(valoresIniciais.campo);
  const [catetoB, setCatetoB] = useState<string>(valoresIniciais.campo);
  const [modalVisivel, setModalVisivel] = useState(false);
  const navigation = useNavigation();
  
  function handleSubmitForm() {
    let valorHipotenusa = parseFloat(hipotenusa);
    let valorCatetoA = parseFloat(catetoA);
    let valorCatetoB = parseFloat(catetoB);

    const validaHipotenusa = hipotenusa.trim().length === 0;
    const validaCatetoA = catetoA.trim().length === 0;
    const validaCatetoB = catetoB.trim().length === 0;
    let validaCampo = validaHipotenusa || validaCatetoA || validaCatetoB;

    if (validaCampo) {
      return Alert.alert('Erro', 'Campos vazios');
    } else {
      let resultado = CalculaTeoremaPitagoras({
        hipotenusa: valorHipotenusa,
        catetoA: valorCatetoA,
        catetoB: valorCatetoB
      });
      setResultado(`${resultado}`);
    }
  }

  function handleResetForm() {
    setResultado(valoresIniciais.resultado);
    setHipotenusa(valoresIniciais.campo);
    setCatetoA(valoresIniciais.campo);
    setCatetoB(valoresIniciais.campo);
  }

  return (
    <>
      <ContainerApp
        titulo="Teorema de Pitagoras"
        exibeBotaoVoltar={false}
        exibeBotaoAjuda={false}
        styleAdicional={styles.containerApp}
        styleAdicionalTitulo={styles.titulo}
      >
        <View style={styles.containerMain}>
          <TrianguloRetangulo />
          <Campo
            placeholder="H -> Hipotenusa"
            keyboardType="numeric"
            onChangeText={setHipotenusa}
            value={hipotenusa}
            styleAdicional={styles.campo}
          />
          <Campo
            placeholder="CA -> Cateto A"
            keyboardType="numeric"
            onChangeText={setCatetoA}
            value={catetoA}
            styleAdicional={styles.campo}
          />
          <Campo
            placeholder="CB -> Cateto B"
            keyboardType="numeric"
            onChangeText={setCatetoB}
            value={catetoB}
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
        ajudaConteudo={ajudaTeoremaPitagoras}
      />
    </>
  );
}

function TrianguloRetangulo() {
  return (
    <View style={styles.trianguloContainer}>
      <View style={styles.triangulo}/>
      <Text style={styles.hipotenusa}>H</Text>
      <Text style={styles.catetoA}>CA</Text>
      <Text style={styles.catetoB}>CB</Text>
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
  trianguloContainer: {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 30,
  },
  triangulo: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightWidth: 100,
    borderTopWidth: 100,
    borderRightColor: "transparent",
    borderTopColor: "green",
    transform: [{ rotate: "270deg" }]
  },
  hipotenusa: {
    position: 'absolute',
    top: "25%",
    right: "45%",
  },
  catetoA: {
    position: 'absolute',
    left: "25%",
  },
  catetoB: {
    position: 'absolute',
    bottom: "5%",
  },
  campo: {
    marginBottom: 10,
  }
});
