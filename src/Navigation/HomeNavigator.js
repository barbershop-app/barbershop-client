import React from 'react';
import {Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ABOUT,
  BOOK_APPOINTMENT,
  GALLERY,
  HOME,
  SETTINGS,
  SHOP,
} from '../Utils/RouteNames';
import Home from '../Screens/Home';
import About from '../Screens/About';
import BookAppointment from '../Screens/BookingMenu/BookAppointment';
import Gallery from '../Screens/Gallery';
import Settings from '../Screens/Settings';
import Shop from '../Screens/Shop';

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={HOME}>
      <Stack.Screen name={HOME} component={Home} />
      <Stack.Screen name={ABOUT} component={About} />
      <Stack.Screen name={BOOK_APPOINTMENT} component={BookAppointment} />
      <Stack.Screen name={GALLERY} component={Gallery} />
      <Stack.Screen name={SETTINGS} component={Settings} />
      <Stack.Screen name={SHOP} component={Shop} />
    </Stack.Navigator>
  );
}
