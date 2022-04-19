import {View, Text} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

const LeftCircle = props => {
  return (
    <View
      style={{
        backgroundColor: 'black',
        width: 70,
        height: 70,
        borderWidth: 1,
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
              color: 'gray',
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
