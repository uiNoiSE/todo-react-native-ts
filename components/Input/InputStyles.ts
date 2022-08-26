import {StyleSheet} from 'react-native';

export const InputStyles = StyleSheet.create({
  textfield: {
    width: '100%',
    height: 49,
    marginBottom: 26,
    paddingHorizontal: 29,
    color: '#000',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    overflow: 'hidden',
  },

  wrapper: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },

  errorInput: {
    borderColor: 'red',
    borderWidth: 2,
  },

  errorText: {
    position: 'absolute',
    bottom: 14,
    fontSize: 10,
    color: 'red',
  },
});
