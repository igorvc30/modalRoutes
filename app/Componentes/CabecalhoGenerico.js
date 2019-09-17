import React, {Component} from 'react';
import {View} from 'react-native' ;
import styles from './CabecalhoGenerico.style' ;

type Props = {
  esquerda: React.Node,
  direita?: React.Node,
  meio?: React.Node,
  separador?: boolean,
  style?: {},
  centralizar?: boolean,
};

export default class CabecalhoGenerico extends Component<Props> {
  render() {
    const {esquerda, direita, meio, separador, style, centralizar} = this.props;

    return (
      <View style={[styles.container, separador && styles.separador, style]}>
        {centralizar && <View style={styles.meio}>{meio}</View>}
        <View style={styles.esquerdaContainer}>
          {esquerda && <View style={styles.esquerda}>{esquerda}</View>}
          {!centralizar && meio}
        </View>
        {direita}
      </View>
    );
  }
}
