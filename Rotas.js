import React from 'react';
import {Button, Image, View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation'; // 1.0.0-beta.27
import {createStackNavigator} from 'react-navigation-stack';
import CabecalhoGenerico from './CabecalhoGenerico';
class LogoTitle extends React.Component {
  render() {
    return (
      <Image source={require('./spiro.png')} style={{width: 30, height: 30}} />
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: <LogoTitle />,
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('MyModal2')}
          title="Info"
          color="#000"
        />
      ),
      headerRight: (
        <Button onPress={params.increaseCount} title="+1" color="#000" />
      ),
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({increaseCount: this._increaseCount});
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({count: this.state.count + 1});
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
        <Text>Home Screen</Text>
        <Text>Count: {this.state.count}</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'First Details',
            });
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    const {params} = navigation.state;

    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  render() {
    /* 2. Read the params from the navigation state */
    const {params} = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#880',
        }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Update the title"
          onPress={() =>
            this.props.navigation.setParams({otherParam: 'Updated!'})
          }
        />
        <Button
          title="Modal Bottom"
          onPress={() => this.props.navigation.navigate('MyModal')}
        />
        <Button
          title="Modal Float"
          onPress={() => this.props.navigation.navigate('MyModal2')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

class ModalScreen extends React.Component {
  render() {
    return (
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
            backgroundColor: 'rgba(128,128,128,0.6)',
          }}>
          <Text style={{fontSize: 30}}>This is a modal!</Text>
          <Button
            title="Modal Float"
            onPress={() => this.props.navigation.navigate('MyModal2')}
          />
          <Button
            onPress={() => this.props.navigation.goBack(null)}
            title="Dismiss"
          />
        </View>
      </View>
    );
  }
}

class ModalScreen2 extends React.Component {
  render() {
    return (
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
            justifyContent: 'center',
            borderRadius: 20,
            borderColor: '#000',
            borderWidth: 1,
          }}>
          <CabecalhoGenerico
            meio={<Text>Modal com cabechalho</Text>}
            centralizar={true}
            esquerda={
              <Button
                onPress={() => this.props.navigation.popToTop()}
                title="<="
              />
            }
          />
          <Text style={{fontSize: 30}}>This is a modal!</Text>
          <Button
            onPress={() => this.props.navigation.popToTop()}
            title="Dismiss"
          />

          <Button
            title="Modal from ground"
            onPress={() => this.props.navigation.navigate('MyModal')}
          />
        </View>
      </View>
    );
  }
}

const OutraStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#f0f',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: OutraStack,
    },
  },
  {
    initialRouteName: 'Home',
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
    MyModal: {
      screen: ModalScreen,
    },
    MyModal2: {
      screen: ModalScreen2,
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
  }
}
