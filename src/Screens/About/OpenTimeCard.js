import {View, Text} from 'react-native';
import React from 'react';

export default function OpenTimeCard({text}) {
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 5,
      }}>
      <Text style={{fontSize: 25, color: 'black', fontWeight: 'bold'}}>
        {text}
      </Text>
    </View>
  );
}
