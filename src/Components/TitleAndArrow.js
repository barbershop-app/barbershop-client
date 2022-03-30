import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {StatusBar} from 'react-native';

const TitleAndArrow = props => {
  return (
    <View
      style={{
        marginTop: StatusBar.currentHeight + 5,
      }}>
      <View>
        <Icon
          name="left"
          size={35}
          color="black"
          onPress={() => props.navigation.goBack()}
          style={{}}
        />
      </View>

      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            position: 'absolute',
            top: -StatusBar.currentHeight,
          }}>
          {props.title}
        </Text>
      </View>
    </View>
  );
};

export default TitleAndArrow;
