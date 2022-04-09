import {View, Text} from 'react-native';
import React from 'react';

const Location = () => {
  return (
    <View style={{width: '90%', alignSelf: 'center'}}>
      <Text
        style={{
          fontSize: 25,
          color: 'black',
          fontWeight: 'bold',
          marginBottom: 10,
        }}>
        Location
      </Text>
    </View>
  );
};

export default Location;
