// @flow
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  PanResponder,
  ScrollView,
  Alert
} from 'react-native';
import CabecalhoGenerico from '../Componentes/CabecalhoGenerico';
import Slider from '@react-native-community/slider';
import styles from './ModalRodape.style';
import {PanGestureHandler} from 'react-native-gesture-handler';
import comFundoModal from '../Enhancers/FundoModal'

const NewModal = ({navigation, handleFecharModal}) => {

  const [altura, setAltura] = useState(0);
  return (
    <>
        {/* <CabecalhoGenerico
          titulo="RODAPE RAIZ"
          possuiBordaInferior
          aoPressionarBotaoFechar={() => handleFecharModal}
        /> */}
        <>
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
        </>
      </>   
  );
};

NewModal.navigationOptions = ({ navigation }) => ({
  title: "Stories",
  headerTitleStyle: {
    textAlign: "left",
    fontFamily: "OpenSans-Regular",
    fontSize: 24
  },
  headerTintColor: "rgba(255,255,255,0.8)",
  headerStyle: {
    marginTop: 50
  }
})
export default comFundoModal(NewModal);
