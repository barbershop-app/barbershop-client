import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';

export default function AppNavContainer() {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
}