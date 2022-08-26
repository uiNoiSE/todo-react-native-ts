import {StyleSheet} from 'react-native';

export const CustomModal = StyleSheet.create({
  wrapper: {
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },

  contentWrapper: {
    width: '100%',
    height: 'auto',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#F5F5F5',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
