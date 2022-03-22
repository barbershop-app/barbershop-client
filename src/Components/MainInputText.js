import {View, Text, TextInput} from 'react-native';
import React from 'react';

const MainInputText = props => {
  return (
    <View>
      <TextInput
        placeholder={props.placeHolder}
        style={{
          width: `${props.size}%`,
          fontSize: 15,
          backgroundColor: props.yellow
            ? '#D5BE2A'
            : props.white
            ? 'white'
            : 'white',
            textAlign:props.center?"center":props.right?"right":props.left?"left":"left",
          borderWidth: 1,
          borderRadius: 10,
        }}
        onChangeText={() => {}}
      />
    </View>
  );
};

export default MainInputText;
