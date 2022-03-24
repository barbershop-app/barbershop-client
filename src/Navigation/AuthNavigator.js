import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AUTH, LOGIN, SIGNUP } from '../Utils/RouteNames';
import Auth from '../Screens/Auth';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';



const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={AUTH}>
      <Stack.Screen name={AUTH} component={Auth} />
      <Stack.Screen name={LOGIN} component={Login} />
      <Stack.Screen name={SIGNUP} component={SignUp} />
    </Stack.Navigator>
  );
}