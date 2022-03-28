import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const DualButton = props => {
  return (
    <LinearGradient
      colors={['white', '#D5BE2A']}
      start={{x: 0, y: 0}}
      end={{x: 0.75, y: 0}}
      style={{
        width: '90%',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 35,
        borderWidth: 0.5,
        marginTop: 10,
        justifyContent: 'space-around',
        alignSelf: 'center',
      }}>
      <TouchableOpacity
        onPress={props.onPressIconOne}
        style={{padding: 25, borderRightWidth: 1, borderRadius: 25}}>
        <Icon
          name={props.iconOne}
          size={55}
          color="black"
          style={{marginLeft: '3%', alignSelf: 'center'}}
        />
        <Text style={{color: 'black'}}>{props.textIconOne}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={props.onPressIconTwo}
        style={{padding: 25, borderLeftWidth: 1, borderRadius: 25}}>
        <Icon
          name={props.iconTwo}
          size={55}
          color="black"
          style={{marginLeft: '3%', alignSelf: 'center'}}
        />
        <Text style={{color: 'black'}}>{props.textIconTwo}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default DualButton;
