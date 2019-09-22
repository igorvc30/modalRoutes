import React from 'react';
import {Button} from 'react-native';
import {createAppContainer} from 'react-navigation'; // 1.0.0-beta.27
import {createStackNavigator} from 'react-navigation-stack';
import NadaStack from '../Nada/NadaRotas';
import UsuarioStack from '../Usuario/UsuarioRotas';
import ModalScreen from './ModalRodape';
import FlutuaModal from './ModalFlutua';
import MainScreen from './MainScreens';

const MainStack = createStackNavigator(
  {
    Principal: MainScreen,
    Usuarios: UsuarioStack,
    Nadas: NadaStack,
  },
  {
    initialRouteName: 'Principal',
    headerMode: 'screen',
    defaultNavigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('ModalRaiz')}
          title="Info"
          color="#04F"
        />
      ),
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
  },
);

const RootStack = createStackNavigator(
  {
    Main: MainStack,
    ModalRaiz: ModalScreen,
    FlutuaRaiz: FlutuaModal,
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
      cardStack: {
        gesturesEnabled: true,
      },
    },
  },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
    // return <UsuarioStack />;
  }
}
