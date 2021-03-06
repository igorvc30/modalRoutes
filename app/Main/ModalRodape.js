// @flow
import React, {useState, useEffect} from 'react';
import {
  Animated,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  PanResponder,
  ScrollView,
  Alert,
  BackHandler
} from 'react-native';
import CabecalhoGenerico from '../Componentes/CabecalhoGenerico';
import Slider from '@react-native-community/slider';
import styles from './ModalRodape.style';
import {PanGestureHandler} from 'react-native-gesture-handler';

const ModalRodape = ({navigation}) => {

  const [altura, setAltura] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0
  const saidera = () => Animated.timing(
    fadeAnim,
    {
      toValue: 0,
      duration: 1000,
    }
  ).start(() => navigation.goBack(null))         

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 0.6,
        duration: 1000,
      }
    ).start()
    BackHandler.addEventListener('hardwareBackPress', function() {
      Alert.alert('WTF?')
      Animated.timing(
        fadeAnim,
        {
          toValue: 0,
          duration: 1000,
        }
      ).start();
    })
  return () => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 0,
        duration: 1000,
      }
    ).start();
  }
})
  return (
    <View style={styles.modal}>
      <Animated.View style={{opacity: fadeAnim, flex: 1, flexGrow: 1, backgroundColor: 'rgb(128,128,128)',
      }}/>
 <View style={{ backgroundColor: 'rgb(128,128,128,0.6)'}}> 
      <View style={styles.container}>
        <CabecalhoGenerico
          titulo="RODAPE RAIZ"
          possuiBordaInferior
          aoPressionarBotaoFechar={() => saidera()}
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
      </View>
    
  );
};

export default ModalRodape;
