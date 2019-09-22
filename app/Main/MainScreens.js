import React from 'react';
import {Button, View, Text} from 'react-native';

export default class NadaScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'MAIN MAIN',
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
          backgroundColor: '#F96',
        }}>
        <Text>MAIN MAIN Screen</Text>
        <Button
          title="GO TO NADA"
          onPress={() => {
            this.props.navigation.navigate('Nadas');
          }}
        />
        <Button
          title="GO TO USUARIOS"
          onPress={() => {
            this.props.navigation.navigate('Usuarios');
          }}
        />
        <Button
          title="Modal Float"
          onPress={() => this.props.navigation.navigate('UsuarioFlutua')}
        />
        <Button
          title="Modal MAIN MAIN Float"
          onPress={() => this.props.navigation.navigate('FlutuaRaiz')}
        />
      </View>
    );
  }
}
