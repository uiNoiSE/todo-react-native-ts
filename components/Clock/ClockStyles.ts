import {StyleSheet} from 'react-native';

export const ClockStyles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    width: 291,
    height: 75,
    marginVertical: 44,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  colons: {
    position: 'absolute',

    width: '100%',
    height: '100%',
  },

  colons__first: {
    position: 'absolute',
    top: -2,
    left: 83,
  },

  colons__second: {
    position: 'absolute',
    top: -2,
    right: 83,
  },

  tile: {
    position: 'relative',
    width: 75,
    height: 69,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#FAE68C',
    borderRadius: 10,

    textAlign: 'center',

    // shadowColor: 'rgba(0, 0, 0, 0.15);',
    elevation: 5,
  },

  tile__accent: {
    position: 'absolute',
    bottom: 0,
    left: 0,

    width: '100%',
    height: 34,

    backgroundColor: '#FEE15B',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  tile__text: {
    color: '#000',
    fontFamily: 'poppinsBold',
    fontSize: 56,
    lineHeight: 75,
  },
});
