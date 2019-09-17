import React from 'react';
import {createAppContainer} from 'react-navigation'; // 1.0.0-beta.27
import {createStackNavigator} from 'react-navigation-stack';
import {NadaDetails, NadaScreen} from './NadaScreens';
import {ModalChao, ModalFlutua} from './NadaModal';

const MainStack = createStackNavigator(
  {
    NadaD: {
      screen: NadaDetails,
    },
    NadaH: {
      screen: NadaScreen,
    },
  },
  {
    initialRouteName: 'NadaH',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    NadaChao: {
      screen: ModalChao,
    },
    NadaFlutua: {
      screen: ModalFlutua,
    },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    transparentCard: true,
    cardStyle: {
      backgroundColor: 'transparent',
      opacity: 0.99,
    },
    navigationOptions: {
      gestureResponseDistance: {vertical: 10}, // default is 135 },
      gesturesEnabled: true,
    },
  },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
