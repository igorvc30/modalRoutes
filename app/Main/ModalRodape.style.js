import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(128,128,128,0.6)',
  },
  container: {
    backgroundColor: '#ccc',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    maxHeight: 0.85 * Dimensions.get('window').height,
    paddingBottom: 10,
    alignItems: 'center',
  },
});
