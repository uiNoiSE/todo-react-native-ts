import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  View,
  Text,
  Keyboard,
  ScrollView,
} from 'react-native';
import {Formik, Field} from 'formik';
import * as Yup from 'yup';
import {cache} from '../store/index';

import {mainStyles as MS} from '../assets/styles/mainStyles';

import CustomButton from '../components/CustomButton';
import Decorations from '../components/Decorations';
import InlinePropose from '../components/InlinePropose';
import Input from '../components/Input';

import RootStackParams from './RootStackParams';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParams>;
};

interface iSaveNewUser {
  userName: string;
  email: string;
  passwd: string;
  todos: Array<object>;
}

const SignUp: React.FC<Props> = ({navigation}) => {
  const signUpValidationSchema = Yup.object().shape({
    userName: Yup.string()
      .min(2, ({min}) => `Name must be ${min} characters long`)
      .required('Name is required'),

    email: Yup.string()
      .email('Please provide valid email')
      .required('Email Address is required'),

    passwd: Yup.string()
      .min(2, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),

    confirmPasswd: Yup.string()
      .oneOf([Yup.ref('passwd')], 'Passwords do not match')
      .required('Confirm password is required'),
  });

  const saveNewUser = async ({
    userName,
    email,
    passwd,
    todos,
  }: iSaveNewUser) => {
    try {
      const jsonValue = JSON.stringify({userName, email, passwd, todos});
      await cache.set(email, jsonValue);
      navigation.navigate('SignIn');
      Keyboard.dismiss();
    } catch (e) {
      console.log(e);
    }
  };

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
          <Text style={[MS.heading, MS.heading_SignUp]}>Welcome Onboard!</Text>
          <Text style={[MS.description, MS.description_SignUp]}>
            We help you meet up you tasks on time.
          </Text>
          <Formik
            validationSchema={signUpValidationSchema}
            initialValues={{
              userName: '',
              email: '',
              passwd: '',
              confirmPasswd: '',
              todos: [],
            }}
            onSubmit={values => saveNewUser(values)}>
            {({handleSubmit, isValid}) => (
              <>
                <Field
                  component={Input}
                  name="userName"
                  placeholder="Enter your full name"
                  returnKeyType="next"
                  textContentType={'givenName'}
                />

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
                  textContentType={'newPassword'}
                  secureTextEntry
                />

                <Field
                  component={Input}
                  name="confirmPasswd"
                  placeholder="Confirm password"
                  returnKeyType="done"
                  textContentType={'password'}
                  secureTextEntry
                />

                <CustomButton
                  f={handleSubmit}
                  text={'Register'}
                  disabled={!isValid}
                />
              </>
            )}
          </Formik>
          <InlinePropose
            f={() => navigation.navigate('SignIn')}
            text={'Already have an account?'}
            linkText={'Sign In'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
