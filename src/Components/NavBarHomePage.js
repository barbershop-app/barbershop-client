import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {StatusBar} from 'react-native';
import {windowHeight, windowWidth} from '../Utils/Themes';

const NavBarHomePage = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: StatusBar.currentHeight * 0.5,
        width: windowWidth,
        height: windowHeight * 0.06,
        padding: 5,
      }}>
      <Icon
        name="menu"
        onPress={props.onPressMenu}
        size={30}
        color="black"
        style={{marginLeft: '3%'}}
      />
      <Icon
        name="bag"
        onPress={props.onPressCart}
        size={30}
        color="black"
        style={{marginRight: '3%'}}
      />
    </View>
  );
};

export default NavBarHomePage;
