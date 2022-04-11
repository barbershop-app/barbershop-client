import {View, Text} from 'react-native';
import React from 'react';

const LeftCircle = props => {
  return (
    <View
      style={{
        backgroundColor: '#D5BE2A',
        width: 70,
        height: 70,
        borderWidth: 1,
        alignSelf: 'center',
        padding: 10,
        alignItems: 'center',
        borderRadius: 35,
      }}>
      <Text style={{color: 'black', fontWeight: 'bold', fontSize: 30}}>
        {props.leftPlaces}
      </Text>
      <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: -10}}>
        Left
      </Text>
    </View>
  );
};

export default LeftCircle;
