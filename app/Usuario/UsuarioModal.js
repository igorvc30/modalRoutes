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
        titulo="USUARIO CHAO"
        aoPressionarBotaoFechar={() => navigation.pop()}
        possuiBordaInferior
      />
      <Text style={{fontSize: 30}}>USUARIO DO CHAO!</Text>
      <Button
        title="Modal Float"
        onPress={() => navigation.navigate('UsuarioFlutua')}
      />
      <Button onPress={() => navigation.popToTop()} title="PopTop" />
      <Button onPress={() => navigation.pop()} title="POP" />
      <Button
        onPress={() => navigation.goBack(null)}
        title="Fecha tudo GoBACK null"
      />
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
        titulo="USUARIO FLUTUA"
        aoPressionarBotaoFechar={() => navigation.pop()}
        possuiBordaInferior
      />
      <Text style={{fontSize: 30}}>This is a modal! USUARIO</Text>
      <Button onPress={() => navigation.popToTop()} title="PopTop" />
      <Button onPress={() => navigation.goBack(null)} title="Fecha tudo" />
      <Button
        title="Modal from ground"
        onPress={() => navigation.navigate('UsuarioChao')}
      />
    </View>
  </View>
);
