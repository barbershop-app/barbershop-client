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

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor="#b3e6ff"
        barStyle="dark-content"
        hidden={true}
      />
      <AppNavContainer />
      {/* <BookAppointment /> */}
    </Provider>
  );
}
