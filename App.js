import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import AppNavContainer from './src/Navigation/index';
import {Provider} from 'react-redux';
import store from './src/Redux/store';
import Home from './src/Screens/Home';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor="#b3e6ff"
        barStyle="dark-content"
        hidden={true}
      />
      {/* <AppNavContainer /> */}
      <Home />
    </Provider>
  );
}
