import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(128,128,128,0.6)',
  },
  container: {
    backgroundColor: '#a5f',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    maxHeight: 0.93 * Dimensions.get('window').height,
    height: '50%',
  },
});
