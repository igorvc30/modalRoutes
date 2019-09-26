// @flow
import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import CabecalhoGenerico from '../Componentes/CabecalhoGenerico';
import Slider from '@react-native-community/slider';
import styles from './ModalRodape.style';

const ModalRodape = ({navigation}) => {
  const [altura, setAltura] = useState(0);
  return (
    <View style={styles.modal}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack(null)}>
        <View style={{flex: 1, flexGrow: 1}} />
      </TouchableWithoutFeedback>
      <View style={styles.container}>
        <CabecalhoGenerico
          titulo="RODAPE RAIZ"
          possuiBordaInferior
          aoPressionarBotaoFechar={() => navigation.goBack(null)}
        />
        <ScrollView style={{width: '100%'}}>
          <Text style={{marginVertical: 40, textAlign: 'center'}}>
            RODAPE ORIGIN
          </Text>

          <Button
            title="Modal MAIN MAIN Float"
            onPress={() => navigation.navigate('FlutuaRaiz')}
          />

          <Slider
            style={{height: 40}}
            minimumValue={0}
            maximumValue={3}
            step={1}
            onValueChange={valor => setAltura(valor)}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />

          {altura >= 1 && (
            <View style={{height: 200, backgroundColor: '#ad4'}} />
          )}
          {altura >= 2 && (
            <View style={{height: 400, backgroundColor: '#d31'}} />
          )}
          {altura >= 3 && (
            <View style={{height: 500, backgroundColor: '#1da'}} />
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default ModalRodape;
