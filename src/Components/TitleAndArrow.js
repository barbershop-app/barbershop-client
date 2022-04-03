import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {StatusBar} from 'react-native';

const TitleAndArrow = props => {
  return (
    <View
      style={{
        marginTop: StatusBar.currentHeight * 0.5,
        flexDirection:'row',
        justifyContent:'space-around'
      }}>
      <View>
        <Icon
          name="left"
          size={35}
          color="black"
          onPress={() => props.navigation.goBack()}
          style={{marginLeft:-15}}
        />
      </View>

      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'black',
          }}>
          {props.title}
        </Text>
      </View>
      <View></View>
    </View>
  );
};

export default TitleAndArrow;
