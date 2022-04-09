import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AUTH, HOME, INTRO, LOGIN, SIGNUP, SPLASH} from '../Utils/RouteNames';
import Auth from '../Screens/Auth';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import Intro from '../Screens/Intro';
import Splash from '../Screens/Splash';
import Home from '../Screens/Home';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={SPLASH}
      cardStyle={{opacity: 1}}>
      <Stack.Screen name={SPLASH} component={Splash} />
      <Stack.Screen name={INTRO} component={Intro} />
      <Stack.Screen name={AUTH} component={Auth} />
    </Stack.Navigator>
  );
}
