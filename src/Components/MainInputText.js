import {View, Text, TextInput} from 'react-native';
import React from 'react';

const MainInputText = props => {
  //! placeholder , size , yellow/white center setOnChangeText
  return (
    <View style={{width: `${props.size}%`}}>
      <TextInput
        placeholder={props.placeHolder}
        placeholderTextColor={
          props.placeholderTextColor ? props.placeholderTextColor : '#000'
        }
        style={{
          borderRadius: props.borderRadius ? props.borderRadius : 15,
          // width: `${props.size}%`,
          fontSize: 15,
          backgroundColor: props.yellow
            ? '#D5BE2A'
            : props.white
            ? 'white'
            : 'white',
          textAlign: props.textCenter
            ? 'center'
            : props.textRight
            ? 'right'
            : props.textLeft
            ? 'left'
            : 'left',
          alignSelf: props.center
            ? 'center'
            : props.right
            ? 'right'
            : props.left
            ? 'left'
            : null,
          borderWidth: 1,
        }}
        onChangeText={props.setOnChangeText ? props.setOnChangeText : null}
      />
    </View>
  );
};

export default MainInputText;
