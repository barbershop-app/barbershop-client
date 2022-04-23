import {View, Text} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

const LoadingDots = props => {
  return (
    <Animatable.Text
      animation="swing"
      iterationCount={'infinite'}
      style={{
        color: props.color ? props.color : 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 70,
        marginTop: 10,
      }}
      direction="alternate">
      ...
    </Animatable.Text>
  );
};

export default LoadingDots;
