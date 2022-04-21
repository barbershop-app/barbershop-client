import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {windowWidth} from '../../Utils/Themes';
import {CART} from '../../Utils/RouteNames';
const NavProductPage = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: windowWidth * 0.95,
        alignSelf: 'center',
        marginTop: StatusBar.currentHeight * 0.5,
      }}>
      <Icon
        name="arrow-left"
        size={35}
        color="black"
        onPress={() => props.navigation.goBack()}
        style={{}}
      />
      <Icon
        name="bag"
        // onPress={props.onPressCart}
        size={30}
        color="black"
        style={{marginRight: '3%'}}
        onPress={() => props.navigation.navigate(CART)}
      />
    </View>
  );
};

export default NavProductPage;
