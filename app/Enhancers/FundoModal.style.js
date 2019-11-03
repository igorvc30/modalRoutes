import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  safeArea: {

    backgroundColor: '#fff'
  },
  fundoTranslucido: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(190,190,190,0.6)'
  },
  containerModal: {
    backgroundColor: '#fff',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    paddingBottom: 10,
    width: '100%'
  },
  container: {
    backgroundColor: '#fff',
    height: '80%',
    alignItems: 'center'
  },
  container1: {
    backgroundColor: '#ccc',
    // borderColor: 'rgba(128,128,128, 0.6)',
    // overflow: 'hidden',
    maxHeight: 0.75 * Dimensions.get('window').height,
    minHeight: 0.35 * Dimensions.get('window').height,
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
    width: '100%',
    justifyContent: 'flex-end',
  
  },
  containerModal1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end'
    // backgroundColor: 'rgba(128,128,128,0.6)'
  },
})
