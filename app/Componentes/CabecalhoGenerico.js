import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import styles from './CabecalhoGenerico.style';

type Props = {
  aoPressionarBotaoFechar: Function,
  titulo: string,
  possuiBordaInferior?: boolean,
};

const HeaderModal = ({
  aoPressionarBotaoFechar,
  possuiBordaInferior,
  titulo,
}: Props) => {
  const containerStyle = [
    styles.container,
    possuiBordaInferior && styles.bordaInferior,
  ];

  return (
    <View style={containerStyle}>
      <Text style={styles.titulo}>{titulo}</Text>
      <View style={styles.containerBotoesDireita}>
        <TouchableHighlight onPress={() => aoPressionarBotaoFechar()}>
          <Text>Close</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default HeaderModal;
