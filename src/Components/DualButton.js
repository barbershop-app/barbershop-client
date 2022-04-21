import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const DualButton = props => {
  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-around',
        alignSelf: 'center',
      }}>
      <TouchableOpacity
        onPress={props.onPressIconOne}
        style={{
          padding: 10,
          borderRightWidth: 1,
          backgroundColor: 'black',
          width: '45%',
          alignItems: 'center',
          borderRadius: 15,
        }}>
        <Icon
          name={props.iconOne}
          size={20}
          color="white"
          style={{marginLeft: '3%', alignSelf: 'center'}}
        />
        <Text style={{color: 'white', fontSize: 15}}>{props.textIconOne}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={props.onPressIconTwo}
        style={{
          width: '45%',
          padding: 10,
          borderRightWidth: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          borderRadius: 15,
        }}>
        <Icon
          name={props.iconTwo}
          size={20}
          color="black"
          style={{marginLeft: '3%', alignSelf: 'center'}}
        />
        <Text style={{color: 'black'}}>{props.textIconTwo}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DualButton;
