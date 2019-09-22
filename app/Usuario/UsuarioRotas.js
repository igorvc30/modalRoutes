// import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {UsuarioDetails, UsuarioScreen} from './UsuarioScreens';
import {ModalChao, ModalFlutua} from './UsuarioModal';
import ModalRodape from './ModalRodape';

const UsuarioStack = createStackNavigator(
  {
    UsuarioD: UsuarioDetails,
    UsuarioH: UsuarioScreen,
  },
  {
    initialRouteName: 'UsuarioH',
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
    Usuario: UsuarioStack,
    UsuarioChao: ModalChao,
    UsuarioFlutua: ModalFlutua,
    RodapeU: ModalRodape,
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

export default RootStack;
