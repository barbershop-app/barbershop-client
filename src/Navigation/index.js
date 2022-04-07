import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';
import {useSelector} from 'react-redux';
import Splash from '../Screens/Splash';

export default function AppNavContainer() {
  const data = useSelector(state => state.app);
  return (
    <NavigationContainer>
      {data.isLoggedIn ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
