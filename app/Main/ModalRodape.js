// @flow
import React from 'react';
import {View, Text, Button} from 'react-native';
import CabecalhoGenerico from '../Componentes/CabecalhoGenerico';
import styles from './ModalRodape.style';

const ModalRodape = ({navigation}) => (
  <View style={styles.modal}>
    <View style={styles.container}>
      <CabecalhoGenerico
        titulo="RODAPE RAIZ"
        possuiBordaInferior
        aoPressionarBotaoFechar={() => navigation.goBack(null)}
      />
      <Text>RODAPE ORIGIN</Text>

      <Button
        title="Modal MAIN MAIN Float"
        onPress={() => navigation.navigate('FlutuaRaiz')}
      />
    </View>
  </View>
);

export default ModalRodape;
