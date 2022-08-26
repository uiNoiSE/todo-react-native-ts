import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  View,
  Text,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native';
import {Formik, Field} from 'formik';
import * as Yup from 'yup';
import {v4 as uuidv4} from 'uuid';

import {observer} from 'mobx-react-lite';
import {cache, currentUser} from '../store';
import loginStatus from '../store/loginStatus';
import RootStackParams from './RootStackParams';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import LoginImage from '../assets/svg/login.svg';
import {mainStyles as MS} from '../assets/styles/mainStyles';

import InlinePropose from '../components/InlinePropose';
import CustomButton from '../components/CustomButton';
import Decorations from '../components/Decorations';
import Input from '../components/Input';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParams>;
};

interface iFieldProps {
  email: string;
  passwd: string;
}

const SignIn: React.FC<Props> = ({navigation}) => {
  const getData = async ({email, passwd}: iFieldProps) => {
    try {
      let userData = await cache.get(email);
      if (userData) {
        const parsedUserData = JSON.parse(userData);
        const userPasswd = parsedUserData?.passwd;
        if (passwd === userPasswd) {
          const currentlyLogged = JSON.stringify({email, token: uuidv4()});
          Keyboard.dismiss();
          await currentUser.set('currently logged', currentlyLogged);
          loginStatus.signIn();
          return userData;
        } else {
          Alert.alert('Error', 'Invalid details');
        }
      } else {
        Alert.alert('Error', 'User does not exist');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Unexpected error');
    }
    Keyboard.dismiss();
  };

  const signInValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please provide valid email')
      .required('Email Address is required'),

    passwd: Yup.string()
      .min(2, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });
  return (
    <SafeAreaView style={MS.mainContainer}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <Decorations />
      <ScrollView contentContainerStyle={MS.scrollContainer}>
        <View style={MS.wrapper}>
          <Text style={[MS.heading, MS.heading_SignIn]}>Welcome Back!</Text>
          <LoginImage style={MS.image_signIn} />

          <Formik
            validationSchema={signInValidationSchema}
            initialValues={{
              email: '',
              passwd: '',
            }}
            onSubmit={values => getData(values)}>
            {({handleSubmit, isValid}) => (
              <>
                <Field
                  component={Input}
                  name="email"
                  placeholder="Email Address"
                  keyboardType="email-address"
                  returnKeyType="next"
                  textContentType={'emailAddress'}
                />

                <Field
                  component={Input}
                  name="passwd"
                  placeholder="Enter password"
                  returnKeyType="next"
                  textContentType={'password'}
                  secureTextEntry
                />

                <InlinePropose
                  f={() => navigation.navigate('SignUp')}
                  linkText={'Forgot Password'}
                />

                <CustomButton
                  f={handleSubmit}
                  text={'Sign In'}
                  disabled={!isValid}
                />

                <InlinePropose
                  f={() => navigation.navigate('SignUp')}
                  text={'Don’t have an account?'}
                  linkText={'Sign Up'}
                />
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(SignIn);
