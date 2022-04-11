import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {StatusBar} from 'react-native';
import {windowWidth} from '../Utils/Themes';

const TitleAndArrow = props => {
  return (
    <View>
      <View
        style={{
          marginTop: StatusBar.currentHeight * 0.5,
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
        <View
          style={{
            positon: 'absoulte',

            width: windowWidth * 0.095,
          }}>
          <Icon
            name="left"
            size={35}
            color="black"
            onPress={() => props.navigation.goBack()}
            style={{}}
          />
        </View>
        <View
          style={{
            width: windowWidth * 0.805,

            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 0.095 * windowWidth,
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'black',
            }}>
            {props.title}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TitleAndArrow;
