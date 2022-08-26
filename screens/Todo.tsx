import React, {useState, useEffect} from 'react';
import {StatusBar, View, Text, Pressable, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {currentUser, cache} from '../store';
import {observer} from 'mobx-react-lite';

import {mainStyles as MS} from '../assets/styles/mainStyles';
import {TodoStyles as TS} from '../assets/styles/TodoStyles';
import LogOutButton from '../assets/svg/logOutButton.svg';

import Decorations from '../components/Decorations';
import Tasklist from '../components/Tasklist';
import Clock from '../components/Clock';
import loginStatus from '../store/loginStatus';

const Todo = () => {
  const [currentUserName, setCurrentUserName] = useState('');

  const logOut = async () => {
    try {
      loginStatus.signOut();
      await currentUser.clearAll();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUserName = async () => {
      try {
        const userData = await currentUser.get('currently logged');
        const userEmail = JSON.parse(userData as string).email;
        const res = await cache.get(userEmail);
        const userName = JSON.parse(res as string).userName;
        if (userName) {
          setCurrentUserName(userName);
        } else {
          return;
        }
      } catch (e) {
        console.warn(e);
      }
    };
    getUserName();
  }, []);

  return (
    <SafeAreaView
      edges={['left', 'right', 'bottom']}
      style={[MS.mainContainer, MS.mainContainer_Todo]}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <Decorations color={{backgroundColor: 'rgba(255, 252, 238, 0.47)'}} />

      <View style={TS.wrapper}>
        <View style={TS.header}>
          <View style={TS.signOutWrapper}>
            <Pressable
              style={TS.signOutWrapper__button}
              hitSlop={18}
              onPress={() => logOut()}>
              <LogOutButton />
            </Pressable>
          </View>

          <View style={TS.avatar}>
            <Image
              style={TS.avatar__img}
              source={require('../assets/img/user.jpg')}
            />
          </View>
          <Text style={MS.heading}>Welcome {currentUserName}!</Text>
        </View>

        <View style={TS.contentWrapper}>
          <Clock />
          <Text style={TS.title}>Tasks List</Text>
          <Tasklist />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default observer(Todo);
