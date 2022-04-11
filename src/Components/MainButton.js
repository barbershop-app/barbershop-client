import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';

export default function MainButton(props) {
  //* shadow borderWidth borderColor borderRadius alignSelf color(textColor)
  //!width title onPressFunction
  return (
    <TouchableOpacity
      disabled={props.disabled}
      style={[
        {margin: 5, justifyContent: 'center'},
        props.shadow ? styles.shadow : '',
        {
          borderWidth: props.borderWidth ? props.borderWidth : 0,
          borderColor: props.borderColor ? props.borderColor : 'black',
          borderRadius: props.borderRadius ? props.borderRadius : 10,
          width: `${props.width}%`,
          backgroundColor: props.color ? props.color : '#D5BE2A',
          height: props.height ? props.height : 'auto',
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
            fontWeight: props.bold ? 'bold' : null,
            padding: props.padding ? props.padding : 5 + props.width / 8,
            fontSize: props.fontSize ? props.fontSize : 13,
            color: props.titleColor ? props.titleColor : 'black',
            alignSelf: props.textCenter
              ? 'center'
              : props.textRight
              ? 'flex-end'
              : props.textLeft
              ? 'flex-start'
              : 'center',
            textAlign: props.textCenter
              ? 'center'
              : props.textRight
              ? 'right'
              : props.textLeft
              ? 'left'
              : 'auto',
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
