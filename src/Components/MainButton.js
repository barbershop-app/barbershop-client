import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';

export default function MainButton(props) {
  return (
    <TouchableOpacity
      style={[
        {margin: 5},
        props.shadow ? styles.shadow : '',
        {
          borderWidth: props.borderWidth ? props.borderWidth : 0,
          borderColor: props.borderColor ? props.borderColor : 'black',
          borderRadius: props.borderRadius ? props.borderRadius : 10,
          width: `${props.width}%`,
          backgroundColor: props.color ? props.color : '#D5BE2A',
          alignSelf: props.center
            ? 'center'
            : props.right
            ? 'flex-end'
            : props.left
            ? 'flex-start'
            : 'auto',
        },
      ]}
      onPress={props.onPressFunction}>
      {
        <Text
          style={{
            fontWeight: props.bold ? 'bold' : '',
            padding: 5 + props.width / 8,
            fontSize: props.fontSize ? props.fontSize : 13,
            color: props.titleColor ? props.titleColor : 'black',
            alignSelf: props.textCenter
              ? 'center'
              : props.textRight
              ? 'flex-end'
              : props.textLeft
              ? 'flex-start'
              : 'center',
          }}>
          {props.title}
        </Text>
      }
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
});