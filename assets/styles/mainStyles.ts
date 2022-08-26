import {StyleSheet, StatusBar, Platform} from 'react-native';

export const mainStyles = StyleSheet.create({
  mainContainer: {
    overflow: 'hidden',
    position: 'relative',
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  mainContainer_Todo: {
    backgroundColor: '#FFD615',
  },

  wrapper: {
    flex: 1,
    paddingHorizontal: 33,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  wrapper_Intro: {marginBottom: 46},

  heading: {
    color: '#000',
    fontFamily: 'poppinsBold',
    fontSize: 18,
    lineHeight: 27,
  },

  heading_Intro: {
    marginBottom: 19,
  },

  heading_SignUp: {
    marginBottom: 16,
  },

  heading_SignIn: {
    marginBottom: 47,
  },

  heading_Modal: {
    marginBottom: 26,
  },

  description: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'poppinsRegular',
    fontSize: 12,
    lineHeight: 18,
  },

  description_Intro: {
    height: 90,
    marginBottom: 65,
  },

  description_SignUp: {
    marginBottom: 66,
  },

  Button: {
    width: '100%',
    height: 70,
    marginBottom: 25,

    backgroundColor: '#FFD615',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,

    shadowOffset: {width: 5, height: 10},
    shadowOpacity: 15,
    shadowRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.15);',
    elevation: 15,
  },

  Button__text: {
    color: '#030303',
    fontFamily: 'poppinsBold',
    fontSize: 22,
    lineHeight: 33,
  },

  form: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },

  image_intro: {
    marginBottom: 42,
  },

  image_signIn: {
    marginBottom: 47,
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
});
