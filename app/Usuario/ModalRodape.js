// @flow
import React from 'react';
import {View, Text} from 'react-native';
import CabecalhoGenerico from '../Componentes/CabecalhoGenerico';
import styles from './ModalRodape.style';

const ModalRodape = ({navigation}) => (
  <View style={styles.modal}>
    <View style={styles.container}>
      <CabecalhoGenerico
        titulo="RODAPE OFICIAL"
        possuiBordaInferior
        aoPressionarBotaoFechar={() => navigation.goBack(null)}
      />
      <Text>RODAPE OFICIAL</Text>
    </View>
  </View>
);

export default ModalRodape;
