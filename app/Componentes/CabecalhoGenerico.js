import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
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
        <TouchableOpacity onPress={() => aoPressionarBotaoFechar()}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderModal;
