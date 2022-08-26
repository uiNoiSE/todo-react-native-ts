import {StyleSheet} from 'react-native';

export const TodoStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    padding: 0,
  },

  header: {
    width: '100%',
    height: 215,
    display: 'flex',
    alignItems: 'center',
  },

  signOutWrapper: {
    display: 'flex',
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  signOutWrapper__button: {
    display: 'flex',
    paddingVertical: 12,
    paddingHorizontal: 18,
  },

  avatar: {
    width: 100,
    height: 100,
    marginBottom: 18,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar__img: {
    borderRadius: 100,
    height: '100%',
    width: '100%',
  },

  contentWrapper: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 25,
  },

  title: {
    marginBottom: 29,
    alignSelf: 'flex-start',
    fontFamily: 'poppinsBold',
    color: '#000',
    fontSize: 18,
    lineHeight: 27,
  },
});
