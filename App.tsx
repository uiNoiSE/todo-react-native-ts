import React, {useState, useEffect} from 'react';

import Intro from './screens/Intro';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import Todo from './screens/Todo';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {observer} from 'mobx-react-lite';
import loginStatus from './store/loginStatus';
import {currentUser} from './store';

const App = () => {
  const {isLogged} = loginStatus;
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        const userData = await currentUser.get('currently logged');
        userData ? loginStatus.signIn() : loginStatus.signOut();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLogged ? (
          <Stack.Group>
            <Stack.Screen name="Todo" component={Todo} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

export default observer(App);
