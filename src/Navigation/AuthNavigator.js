import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AUTH, INTRO, SELECTCOLOR, SPLASH} from '../Utils/RouteNames';
import Auth from '../Screens/Auth';
import Intro from '../Screens/Intro';
import Splash from '../Screens/Splash';

import GradientColorselector from '../Screens/Splash/GradientColorSelector';
import { useSelector } from 'react-redux';



const Stack = createNativeStackNavigator();

export default function AuthNavigator() {


  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={SPLASH}
      cardStyle={{opacity: 1}}>
      <Stack.Screen name={SPLASH} component={Splash} />
      <Stack.Screen name={INTRO} component={Intro} />
      <Stack.Screen  name={AUTH} component={Auth} />
      <Stack.Screen name={SELECTCOLOR} component={GradientColorselector} />
    </Stack.Navigator>
  );
}
