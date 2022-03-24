import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';

export default function AppNavContainer() {
  return (
    <NavigationContainer>
      {/* <HomeNavigator /> */}
      <AuthNavigator/>
      
    </NavigationContainer>
  );
}