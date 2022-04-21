import {View, Text} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import {gradientColors} from '../../../Utils/Colors';

const LeftCircle = props => {
  return (
    <View
      style={{
        backgroundColor: gradientColors[0],
        width: 70,
        height: 70,
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',
        padding: 10,
        alignItems: 'center',
        borderRadius: 35,
      }}>
      {props.animation ? (
        <Animatable.Text
          animation="swing"
          iterationCount={'infinite'}
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 30,
            marginTop: -5,
          }}
          direction="alternate">
          ...
        </Animatable.Text>
      ) : (
        <>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30}}>
            {props.leftPlaces}
          </Text>
          <Text
            style={{
              color: 'white',
              opacity: 0.7,
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: -10,
            }}>
            Left
          </Text>
        </>
      )}
    </View>
  );
};

export default LeftCircle;
