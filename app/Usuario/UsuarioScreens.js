import React from 'react';
import {Button, View, Text} from 'react-native';

export class UsuarioScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'USUARIO MAIN',
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('ModalRaiz')}
          title="Info"
          color="#050"
        />
      ),
    };
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          backgroundColor: '#165',
        }}>
        <Text>USUARIO Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('UsuarioD');
          }}
        />

        <Button
          title="Modal DOS OUTROS USUARIOS"
          onPress={() => this.props.navigation.navigate('NadaChao')}
        />
        <Button
          onPress={() => this.props.navigation.popToTop()}
          title="PopTop"
        />

        <Button onPress={() => this.props.navigation.pop()} title="POP" />
      </View>
    );
  }
}

export class UsuarioDetails extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      title: 'A USUARIO Details Screen',
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          backgroundColor: '#080',
        }}>
        <Text>USUARIO Details Screen</Text>
        <Button
          title="Modal Bottom"
          onPress={() => this.props.navigation.navigate('UsuarioChao')}
        />
        <Button
          title="Modal Float"
          onPress={() => this.props.navigation.navigate('UsuarioFlutua')}
        />

        <Button
          title="Modal Rodape"
          onPress={() => this.props.navigation.navigate('RodapeU')}
        />

        <Button
          title="Modal DO NADA =S"
          onPress={() => this.props.navigation.navigate('Rodape')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />

        <Button
          title="RAIZ MODAL RAIZ"
          onPress={() => this.props.navigation.navigate('ModalRaiz')}
        />
      </View>
    );
  }
}
