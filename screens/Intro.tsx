import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StatusBar, View, Text} from 'react-native';

import {mainStyles as MS} from '../assets/styles/mainStyles';
import IntroImage from '../assets/svg/intro.svg';

import CustomButton from '../components/CustomButton';
import Decorations from '../components/Decorations';
import RootStackParams from './RootStackParams';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParams>;
};

const Intro: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={MS.mainContainer}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <Decorations />
      <View style={[MS.wrapper, MS.wrapper_Intro]}>
        <IntroImage style={MS.image_intro} />
        <Text style={[MS.heading, MS.heading_Intro]}>
          Let’s get things done on time
        </Text>
        <Text style={[MS.description, MS.description_Intro]}>
          {
            'Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Telluspraesent purus\ntincidunt ut cursus vitae. Nisl, vitae nulla\nlectus tortor, est a aliquam. Pretium netus'
          }
        </Text>
        <CustomButton
          f={() => navigation.navigate('SignUp')}
          text={'Get Started'}
        />
      </View>
    </SafeAreaView>
  );
};

export default Intro;
