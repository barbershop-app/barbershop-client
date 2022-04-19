import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import AppNavContainer from './src/Navigation/index';
import {Provider} from 'react-redux';
import store from './src/Redux/store';
import Home from './src/Screens/Home';
import OrderPlaced from './src/Screens/OrderPlaced';
import Intro from './src/Screens/Intro';
import Splash from './src/Screens/Splash';
import BookAppointment from './src/Screens/BookingMenu/BookAppointment';
import {LogBox} from 'react-native';
import BookedAppointments from './src/Screens/Admin/BookedAppointments';

export default function App() {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);
  LogBox.ignoreLogs([
    'If you want to use Reanimated 2 then go through our installation steps https://docs.swmansion.com/react-native-reanimated/docs/installation',
  ]);
  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor="#b3e6ff"
        barStyle="dark-content"
        hidden={true}
      />
      <AppNavContainer />
      {/* <BookedAppointments /> */}
      {/* <BookAppointment /> */}
    </Provider>
  );
}
