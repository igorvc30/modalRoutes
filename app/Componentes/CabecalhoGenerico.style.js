import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
    height: 96,
  },
  separador: {
    borderBottomWidth: 1,
    borderBottomColor: '#009',
  },
  esquerdaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  esquerda: {
    marginRight: 20,
  },
  meio: {
    position: 'absolute',
    top: 20,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

