import { Platform, StyleSheet } from 'react-native'


export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 12,
    paddingVertical: Platform.OS === 'ios' ? 18 : 12,
    width: '100%'
  },
  bordaInferior: {
    borderBottomColor: 'rgba(100,100,100,0.4)',
    borderBottomWidth: 1
  },

  containerBotoesEsquerda: {
    ...Platform.select({
      ios: {
        position: 'absolute',
        left: 16
      },
      android: {
        marginRight: 24
      }
    })
  },
  containerBotoesDireita: {
    ...Platform.select({
      ios: {
        position: 'absolute',
        right: 12
      }
    })
  },

  // containerBotaoEsquerdo: {
  //   marginRight: iOS ? 0 : 24
  // },
  titulo: {
    color: 'rgba(0,0,0,0.9)',
    flex: 1,
    fontSize: Platform.OS === 'ios' ? 17 : 20,
    fontWeight: Platform.OS === 'ios' ? '600' : '500',
    textAlign: Platform.OS === 'ios' ? 'center' : 'left'
  },
  botaoFechar: {}
})