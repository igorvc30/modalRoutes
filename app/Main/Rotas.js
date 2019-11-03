import React from 'react';
import {Button, Animated, Easing, Dimensions, View} from 'react-native';
import {createAppContainer, StackViewTransitionConfigs} from 'react-navigation'; // 1.0.0-beta.27
import {createStackNavigator} from 'react-navigation-stack';
import NadaStack from '../Nada/NadaRotas';
import UsuarioStack from '../Usuario/UsuarioRotas';
import ModalScreen from './ModalRodape';
import NewModal from './NewModal'
import FlutuaModal from './ModalFlutua';
import MainScreen from './MainScreens';
import TransitionConfiguration from './TransitionConfiguration'

import opacity from './OpacityTransition'
import options from './TransitionOptions'

let fadeTransition = (index, position) => {
  const inputRange = [index - 1, index, index + 1]
  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1],
  })

  return {
    opacity
  }
};

const MainStack = createStackNavigator(
  {
    Principal: MainScreen,
    Usuarios: UsuarioStack,
    Nadas: NadaStack,
  },
  {
    initialRouteName: 'Principal',
    headerMode: 'none',
    // defaultNavigationOptions: ({navigation}) => ({
    //   headerStyle: {
    //     backgroundColor: '#f4511e',
    //     borderTopLeftRadius: 15,
    // borderTopRightRadius: 15,
    //     marginTop: 50,
    //     borderBottomWidth: 0
    //   },
    //   headerLeft: (
    //     <Button
    //       onPress={() => navigation.navigate('ModalRaiz')}
    //       title="Info"
    //       color="#04F"
    //     />
    //   ),
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //   },
    // }),
  },
);

const RootStack = createStackNavigator(
  {
    Main: MainStack,
    ModalRaiz: NewModal,
    FlutuaRaiz: FlutuaModal,
  },
  {
    headerMode: 'screen',
    mode: 'modal',
    // transparentCard: true,
    cardStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      opacity: 1
    },
    transitionConfig : TransitionConfiguration,

    defaultNavigationOptions: ({navigation}) => ({
      gestureResponseDistance: {vertical: 10}, // default is 135 },
      cardStack: {
        gesturesEnabled: true,
      }, 
      headerStyle: {marginTop: 0.25 * Dimensions.get('window').height, borderTopLeftRadius: 30, borderTopRightRadius: 30},
      headerLeft: (
            <Button
              onPress={() =>
                //  navigation.navigate('ModalRaiz')
                navigation.navigate({
                  routeName: 'ModalRaiz',
                  params: {
                      transition: 'myCustomTransition'
                  }
                })
                
              }
              title="Info"
              color="#04F"
            />
          ),
    }),
  },
);


const RootPage = ({navigation}) => (
  <View style={{flex:1, flexGrow: 1 ,backgroundColor: '#234'}}>
    <Button
              onPress={() => navigation.navigate('RootS')}
              title="Info"
              color="#04F"
            />
    </View>
)

const Root = createStackNavigator(
  {
    Root: RootPage,
    RootS: RootStack
  },
  {
    initialRouteName: 'Root',
    headerMode: 'none',
    mode: 'card',
    cardStyle: {
      backgroundColor: 'rgba(0, 255, 0, 0.1)',
      opacity: 1
    },
  })

const AppContainer = createAppContainer(Root);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
    // return <UsuarioStack />;
  }
}
