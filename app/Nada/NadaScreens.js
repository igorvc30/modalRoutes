import React from 'react';
import {Button, View, Text} from 'react-native';

export class NadaScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'NADA MAIN',
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('NadaFlutua')}
          title="Info"
          color="#000"
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
          justifyContent: 'center',
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
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
