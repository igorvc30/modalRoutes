import React from 'react';
import {View, Button, Text} from 'react-native';
import CabecalhoGenerico from '../Componentes/CabecalhoGenerico';

export const ModalChao = ({navigation}) => (
  <View
    style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(128,128,128,0.6)',
    }}>
    <View
      style={{
        height: '80%',
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
      }}>
      <CabecalhoGenerico
        meio={<Text>NADA CHAO</Text>}
        centralizar={true}
        direita={<Button onPress={() => navigation.pop()} title="Close" />}
      />
      <Text style={{fontSize: 30}}>NADA DO CHAO!</Text>
      <Button
        title="Modal Float"
        onPress={() => navigation.navigate('NadaFlutua')}
      />
      <Button onPress={() => navigation.popToTop()} title="PopTop" />
      <Button onPress={() => navigation.goBack(null)} title="Fecha tudo" />
    </View>
  </View>
);

export const ModalFlutua = ({navigation}) => (
  <View
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
        height: '60%',
        width: '70%',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        borderRadius: 20,
        borderColor: '#000',
        borderWidth: 1,
      }}>
      <CabecalhoGenerico
        meio={<Text>NADA FLUTUA</Text>}
        centralizar={true}
        esquerda={<Button onPress={() => navigation.pop()} title="<=" />}
      />
      <Text style={{fontSize: 30}}>This is a modal!</Text>
      <Button onPress={() => navigation.popToTop()} title="PopTop" />
      <Button onPress={() => navigation.goBack(null)} title="Fecha tudo" />
      <Button
        title="Modal from ground"
        onPress={() => navigation.navigate('NadaChao')}
      />
    </View>
  </View>
);
