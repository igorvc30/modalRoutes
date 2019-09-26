import React from 'react';
import {
  View,
  Button,
  Text,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import CabecalhoGenerico from '../Componentes/CabecalhoGenerico';

const ModalFlutua = ({navigation}) => (
  <TouchableWithoutFeedback
    onPress={() => Alert.alert('Clicked')}
    style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'space-between',
      backgroundColor: 'rgba(128,128,128,0.6)',
    }}>
    <View
      style={{
        height: '90%',
        width: '90%',
        backgroundColor: '#155',
        justifyContent: 'space-between',
        borderRadius: 20,
        borderColor: '#000',
        borderWidth: 1,
      }}>
      <CabecalhoGenerico
        titulo="MAIN FLUTUA"
        aoPressionarBotaoFechar={() => navigation.pop()}
        possuiBordaInferior
      />
      <Text style={{fontSize: 30}}>This is a freaking FLOAT MAIN MODAL!</Text>
      <Button onPress={() => navigation.popToTop()} title="PopTop" />
      <Button onPress={() => navigation.goBack(null)} title="Fecha tudo" />
      <Button
        title="Modal from ground"
        onPress={() => navigation.navigate('ModalRaiz')}
      />
    </View>
  </TouchableWithoutFeedback>
);

export default ModalFlutua;
