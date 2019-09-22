import React from 'react';
import {createAppContainer} from 'react-navigation'; // 1.0.0-beta.27
import {createStackNavigator} from 'react-navigation-stack';
import {NadaDetails, NadaScreen} from './NadaScreens';
import {ModalChao, ModalFlutua} from './NadaModal';
import ModalRodape from './ModalRodape';

const MainStack = createStackNavigator(
  {
    NadaD: NadaDetails,
    NadaH: NadaScreen,
  },
  {
    initialRouteName: 'NadaH',
    headerMode: 'none',
  },
);

const RootStack = createStackNavigator(
  {
    Usuario: MainStack,
    NadaChao: ModalChao,
    NadaFlutua: ModalFlutua,
    Rodape: ModalRodape,
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
// export default createAppContainer(RootStack);
