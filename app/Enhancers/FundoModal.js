// @flow
import React, { Component, type ComponentType } from 'react'
import {
  View,
  Animated,
  SafeAreaView,
  TouchableWithoutFeedback,
  NativeEventSubscription,
  BackHandler,
  Easing,
  KeyboardAvoidingView,
  Keyboard,
  StatusBar,
  Platform
  } from 'react-native'
import type { NavigationScreenProp } from 'react-navigation'
import styles from './FundoModal.style'

const plataformaiOS = Platform.OS === 'ios'
const tecladoFoiAberto = plataformaiOS ? 'keyboardWillShow' : 'keyboardDidShow'
const tecladoFoiFechado = plataformaiOS ? 'keyboardWillHide' : 'keyboardDidHide'

type Props = {
  navigation: NavigationScreenProp
}

type State = {
  opacidade: Animated.Value,
  tecladoAberto: boolean
}

const 
hocFundoModal = (WrappedComponent: ComponentType<*>) => {
  class FundoModal extends Component<Props, State> {
    backHandler: NativeEventSubscription
    tecladoFoiAbertoListener: { remove: () => void }
    tecladoFoiFechadoListener: { remove: () => void }

    constructor (props: Props) {
      super(props)
      this.state = {
        opacidade: new Animated.Value(0),
        tecladoAberto: false
      }
    }

    render () {
      const { opacidade, tecladoAberto } = this.state

      return (
        <View style={styles.container1}>
          <StatusBar barStyle={'light-content'} />
          {/* <Animated.View style={[styles.fundoTranslucido, { opacity: opacidade }]}> */}
            {/* <TouchableWithoutFeedback onPress={() => this.handleFecharModal()}>
              <View style={{ flex: 1 }} />
            </TouchableWithoutFeedback> */}

            <KeyboardAvoidingView
              style={[styles.containerModal1, tecladoAberto && styles.conteudoTecladoAberto]}
              enabled={plataformaiOS}
              behavior='padding'
            >
              <WrappedComponent
                {...this.props}
                handleFecharModal={this.handleFecharModal}
                handleVoltarModal={this.handleVoltarModal}
              />
            </KeyboardAvoidingView>
            <SafeAreaView style={styles.safeArea} forceInset={{ bottom: 'always' }} />
          {/* </Animated.View> */}
        </View>
      )
    }

    componentDidMount = () => {
      this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
        this.animacaoFundo(0, 300, () => this.props.navigation.goBack(null))
        return true
      })
      this.tecladoFoiAbertoListener = Keyboard.addListener(tecladoFoiAberto, () =>
        this.setState({ tecladoAberto: true })
      )
      this.tecladoFoiFechadoListener = Keyboard.addListener(tecladoFoiFechado, () =>
        this.setState({ tecladoAberto: false })
      )
      setTimeout(() => this.animacaoFundo(1, 250), 300)
    }

    componentWillUnmount = () => {
      this.backHandler.remove()
      if (this.tecladoFoiAbertoListener) {
        this.tecladoFoiAbertoListener.remove()
      }
      if (this.tecladoFoiFechadoListener) {
        this.tecladoFoiFechadoListener.remove()
      }
    }

    animacaoFundo = (value: number, duration: number, callback?: () => void) => {
      Animated.timing(this.state.opacidade, {
        toValue: value,
        duration: duration,
        easing: Easing.linear
      }).start(callback)
    }

    handleFecharModal = () => {
      this.animacaoFundo(0, 300, () => {
        this.props.navigation.popToTop()
      })
    }

    handleVoltarModal = () => {
      this.setState({ tecladoAberto: false })
      this.animacaoFundo(0, 300, () => {
        this.props.navigation.goBack()
      })
    }
  }
  return FundoModal
}
export default hocFundoModal


