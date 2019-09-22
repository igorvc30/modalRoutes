import React from 'react';
import {Button, View, Text} from 'react-native';

export class NadaScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    header: ({state, setParams}, defaultHeader) => ({
      ...defaultHeader,
    }),
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          backgroundColor: '#a89',
        }}>
        <Text>NADA Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('NadaD');
          }}
        />
        <Button
          onPress={() => this.props.navigation.popToTop()}
          title="PopTop"
        />

        <Button
          title="Modal Float"
          onPress={() => this.props.navigation.navigate('UsuarioFlutua')}
        />

        <Button onPress={() => this.props.navigation.pop()} title="POP" />
      </View>
    );
  }
}

export class NadaDetails extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      title: 'A NADA Details Screen',
      /* These values are used instead of the shared configuration! */
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
          justifyContent: 'space-around',
          backgroundColor: '#880',
        }}>
        <Text>NADA Details Screen</Text>
        <Button
          title="Modal Bottom"
          onPress={() => this.props.navigation.navigate('NadaChao')}
        />
        <Button
          title="Modal Float"
          onPress={() => this.props.navigation.navigate('NadaFlutua')}
        />

        <Button
          title="Modal Rodape"
          onPress={() => this.props.navigation.navigate('Rodape')}
        />

        <Button
          title="Modal DOS OUTROS USUARIOS"
          onPress={() => this.props.navigation.navigate('RodapeU')}
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
